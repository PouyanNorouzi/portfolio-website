// Types a list of strings one after another, like a chart printer. `typed[i]` is how many
// characters of string `i` are showing. Nothing is typed on the server or the first client
// render, so the markup matches; callers hide the untyped rest with `motion-safe:` classes so
// reduced-motion users see the full text from the start.
export function useTypewriter(
  texts: MaybeRefOrGetter<string[]>,
  msPerChar: number[],
  gapMs: number
) {
  const typed = ref(toValue(texts).map(() => 0));
  const started = ref(false);
  const finished = ref(false);

  const speedOf = (index: number) => msPerChar[index] ?? msPerChar.at(-1) ?? 20;

  // Total time the typing takes, for syncing other animations to it.
  const duration = computed(() =>
    toValue(texts).reduce(
      (total, text, index) => total + text.length * speedOf(index) + (index ? gapMs : 0),
      0
    )
  );

  // The string currently being typed, where the caret sits; -1 when idle.
  const active = computed(() =>
    started.value && !finished.value
      ? typed.value.findIndex((count, index) => count < (toValue(texts)[index]?.length ?? 0))
      : -1
  );

  let frame: number | undefined;
  let done: (() => void) | undefined;

  function finish() {
    finished.value = true;
    frame = undefined;
    done?.();
  }

  // Shows everything at once, whether typing is under way or hasn't begun.
  function skip() {
    if (finished.value) return;
    if (frame !== undefined) cancelAnimationFrame(frame);
    started.value = true;
    typed.value = toValue(texts).map((text) => text.length);
    finish();
  }

  // Resolves once everything is typed (or skipped, or the component unmounts first).
  function start(): Promise<void> {
    if (started.value) return Promise.resolve();
    started.value = true;
    const lengths = toValue(texts).map((text) => text.length);

    if (prefersReducedMotion()) {
      skip();
      return Promise.resolve();
    }

    const startTime = performance.now();
    const tick = (now: number) => {
      let remaining = now - startTime;
      const next = lengths.map((length, index) => {
        const count = Math.min(length, Math.max(0, Math.floor(remaining / speedOf(index))));
        remaining -= length * speedOf(index) + gapMs;
        return count;
      });
      // Most frames reveal no new character; assigning anyway would re-render the row every frame.
      if (next.some((count, index) => count !== typed.value[index])) typed.value = next;

      if (next.every((count, index) => count === lengths[index])) finish();
      else frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return new Promise((resolve) => (done = resolve));
  }

  onBeforeUnmount(() => {
    if (frame !== undefined) cancelAnimationFrame(frame);
    done?.();
  });

  return { typed, started, finished, active, duration, start, skip };
}
