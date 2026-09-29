// The site is prerendered, so the server's timestamp is the build time. It is
// carried through the payload so hydration matches, then swapped for the
// visitor's current time once mounted.
export function useNow() {
  const now = useState("now", () => Date.now());
  onMounted(() => {
    now.value = Date.now();
  });
  return now;
}
