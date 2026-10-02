// The site is prerendered, so the server's timestamp is the build time. It is
// carried through the payload so hydration matches, then swapped for the
// visitor's current time once mounted.
//
// `isLocal` stays false until then: the prerender runs in UTC, so dates must be
// read in UTC while hydrating, or a visitor in another time zone gets a
// different day than the server rendered.
const FRESH_MS = 60_000;

export function useNow() {
  const now = useState("now", () => Date.now());
  const isLocal = useState("now-local", () => false);
  onMounted(() => {
    // Several components use this: the first to mount swaps the time and the rest, mounting right
    // after it, skip the extra render. A mount much later (a tab left open, then navigating)
    // still refreshes it so dates don't go stale.
    const current = Date.now();
    if (isLocal.value && current - now.value < FRESH_MS) return;
    now.value = current;
    isLocal.value = true;
  });
  return { now, isLocal };
}
