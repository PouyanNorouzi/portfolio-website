// The site is prerendered, so the server's timestamp is the build time. It is
// carried through the payload so hydration matches, then swapped for the
// visitor's current time once mounted.
//
// `isLocal` stays false until then: the prerender runs in UTC, so dates must be
// read in UTC while hydrating, or a visitor in another time zone gets a
// different day than the server rendered.
export function useNow() {
  const now = useState("now", () => Date.now());
  const isLocal = useState("now-local", () => false);
  onMounted(() => {
    // Several components use this; the first one to mount swaps the time, the rest skip the extra render.
    if (isLocal.value) return;
    now.value = Date.now();
    isLocal.value = true;
  });
  return { now, isLocal };
}
