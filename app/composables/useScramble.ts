interface ScrambleOptions {
  glyphs?: string;
  frames?: number;
  interval?: number;
}

// Shows `text` as random glyphs that resolve left to right into the target, like a
// line being decrypted. Spaces are kept so the shape of the text stays readable.
export function useScramble(
  initial: string,
  { glyphs = "█▓▒░#%&@$01<>/\\", frames = 14, interval = 40 }: ScrambleOptions = {}
) {
  const text = ref(initial);
  let timer: ReturnType<typeof setInterval> | undefined;

  function run(target: string) {
    clearInterval(timer);
    if (prefersReducedMotion()) {
      text.value = target;
      return;
    }
    let frame = 0;
    timer = setInterval(() => {
      frame++;
      if (frame >= frames) {
        clearInterval(timer);
        text.value = target;
        return;
      }
      const done = Math.floor((frame / frames) * target.length);
      text.value = [...target]
        .map((ch, i) =>
          i < done || ch === " " ? ch : glyphs[Math.floor(Math.random() * glyphs.length)]
        )
        .join("");
    }, interval);
  }

  onBeforeUnmount(() => clearInterval(timer));

  return { text, run };
}
