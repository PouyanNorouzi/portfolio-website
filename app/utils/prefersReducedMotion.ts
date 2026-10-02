// One MediaQueryList is reused, and `matches` is read from it each call: the browser keeps it
// live, so a change to the OS setting is picked up without caching the boolean.
let query: MediaQueryList | undefined;

export function prefersReducedMotion() {
  if (!import.meta.client) return false;
  query ??= window.matchMedia("(prefers-reduced-motion: reduce)");
  return query.matches;
}
