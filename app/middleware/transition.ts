import { PAGES, getSectionIndex } from "~/utils/constants/pages";

function getDirection(toPath: string, fromPath: string) {
  const toIndex = getSectionIndex(toPath);
  const fromIndex = getSectionIndex(fromPath);

  if (toIndex !== fromIndex) {
    return toIndex > fromIndex ? "slide-left" : "slide-right";
  }

  // Same section: index -> child slides left, child -> index slides right
  const isToRoot = toPath === PAGES[toIndex];
  const isFromRoot = fromPath === PAGES[fromIndex];
  return isToRoot && !isFromRoot ? "slide-right" : "slide-left";
}

export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.meta.pageTransition || typeof to.meta.pageTransition === "boolean") {
    to.meta.pageTransition = { mode: "out-in" };
  }
  if (!from.meta.pageTransition || typeof from.meta.pageTransition === "boolean") {
    from.meta.pageTransition = { mode: "out-in" };
  }

  const name = getDirection(to.path, from.path);
  from.meta.pageTransition.name = name;
  to.meta.pageTransition.name = name;
});
