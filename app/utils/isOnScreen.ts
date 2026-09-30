// Whether any part of the element is inside the viewport right now.
export function isOnScreen(element: Element | null | undefined) {
  if (!element) return false;
  const { top, bottom } = element.getBoundingClientRect();
  return bottom > 0 && top < window.innerHeight;
}
