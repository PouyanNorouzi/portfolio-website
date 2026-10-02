import { directionFor, lockAxis, shouldCommit, targetFor } from "~/utils/swipe";

// Touches that start this close to the screen edge belong to the browser's back gesture.
const EDGE_DEAD_ZONE = 20;

type Gesture = {
  pointerId: number;
  startX: number;
  startY: number;
  axis: "x" | null;
  // The last two samples give the release velocity without keeping a history.
  prev: { x: number; t: number };
  last: { x: number; t: number };
};

// Swipe between the top-level sections. Releasing a horizontal swipe navigates, and the
// direction-aware page transition (middleware/transition.global.ts) does the animating.
export function useSectionSwipe() {
  const route = useRoute();

  let gesture: Gesture | null = null;

  function isHorizontallyScrollable(start: EventTarget | null) {
    for (let node = start; node instanceof Element; node = node.parentElement) {
      if (node.scrollWidth <= node.clientWidth + 1) continue;
      const { overflowX } = getComputedStyle(node);
      if (overflowX === "auto" || overflowX === "scroll") return true;
    }
    return false;
  }

  function canStart(event: PointerEvent) {
    if (event.pointerType !== "touch" || !event.isPrimary) return false;
    if (event.clientX < EDGE_DEAD_ZONE || event.clientX > window.innerWidth - EDGE_DEAD_ZONE) {
      return false;
    }
    if (window.getSelection()?.type === "Range") return false;
    const target = event.target;
    if (target instanceof Element && target.closest("input, textarea, select, [data-no-swipe]")) {
      return false;
    }
    return !isHorizontallyScrollable(target);
  }

  function onPointerDown(event: PointerEvent) {
    // A second finger turns this into a pinch or a two-finger scroll, so drop the swipe.
    if (gesture && event.pointerId !== gesture.pointerId) {
      gesture = null;
      return;
    }
    if (!canStart(event)) return;
    const point = { x: event.clientX, t: event.timeStamp };
    gesture = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      axis: null,
      prev: point,
      last: point,
    };
  }

  function onPointerMove(event: PointerEvent) {
    if (!gesture || event.pointerId !== gesture.pointerId) return;

    if (!gesture.axis) {
      const axis = lockAxis(event.clientX - gesture.startX, event.clientY - gesture.startY);
      if (!axis) return;
      // Vertical: it's a scroll, so stay out of the way.
      if (axis === "y") {
        gesture = null;
        return;
      }
      gesture.axis = axis;
    }

    gesture.prev = gesture.last;
    gesture.last = { x: event.clientX, t: event.timeStamp };
  }

  function onPointerUp(event: PointerEvent) {
    if (!gesture || event.pointerId !== gesture.pointerId) return;
    const finished = gesture;
    gesture = null;
    if (finished.axis !== "x") return;

    const dx = event.clientX - finished.startX;
    const elapsed = finished.last.t - finished.prev.t;
    const velocity = elapsed > 0 ? (finished.last.x - finished.prev.x) / elapsed : 0;
    const target = targetFor(route.path, directionFor(dx));

    if (target && shouldCommit(dx, velocity)) navigateTo(target);
  }

  // pointercancel means the browser took the gesture over, so never navigate from it.
  function onPointerCancel(event: PointerEvent) {
    if (gesture && event.pointerId === gesture.pointerId) gesture = null;
  }

  onMounted(() => {
    // passive: we never preventDefault; touch-action in main.css hands us horizontal moves.
    const options = { passive: true } as const;
    document.addEventListener("pointerdown", onPointerDown, options);
    document.addEventListener("pointermove", onPointerMove, options);
    document.addEventListener("pointerup", onPointerUp, options);
    document.addEventListener("pointercancel", onPointerCancel, options);
  });

  onBeforeUnmount(() => {
    document.removeEventListener("pointerdown", onPointerDown);
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    document.removeEventListener("pointercancel", onPointerCancel);
  });
}
