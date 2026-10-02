// Pure decisions behind the section swipe, kept apart from the DOM so they can be unit tested.
// useSectionSwipe feeds them touch measurements and applies what they return.
// Relative import: the `unit` Vitest project runs in plain node and has no `~` alias.
import { PAGES, getSectionIndex } from "./constants/pages";

export type SwipeDirection = "next" | "prev";

// Finger travel before we decide whether the gesture is a swipe or a scroll.
const LOCK_DISTANCE = 10;
// How much more horizontal than vertical a move must be to count as a swipe.
const HORIZONTAL_BIAS = 1.5;
// Nothing follows the finger, so a swipe has to be unmistakable on its own: a fixed distance
// (not a share of the screen) or a quick flick.
const COMMIT_DISTANCE = 80;
const FLICK_VELOCITY = 0.5; // px per ms
const FLICK_MIN_DISTANCE = 40;

export function lockAxis(dx: number, dy: number): "x" | "y" | null {
  const absX = Math.abs(dx);
  const absY = Math.abs(dy);
  if (Math.max(absX, absY) < LOCK_DISTANCE) return null;
  return absX > absY * HORIZONTAL_BIAS ? "x" : "y";
}

// A leftward drag pulls the next section in, like turning a page forward.
export function directionFor(dx: number): SwipeDirection {
  return dx < 0 ? "next" : "prev";
}

export function targetFor(path: string, direction: SwipeDirection): string | null {
  const index = getSectionIndex(path);
  if (index === -1) return null;

  // On a child page (a blog post) the only way is back to its section.
  if (path !== PAGES[index]) return direction === "prev" ? PAGES[index]! : null;

  return PAGES[direction === "next" ? index + 1 : index - 1] ?? null;
}

export function shouldCommit(dx: number, velocity: number) {
  const distance = Math.abs(dx);
  if (distance >= COMMIT_DISTANCE) return true;
  return Math.abs(velocity) > FLICK_VELOCITY && distance > FLICK_MIN_DISTANCE;
}
