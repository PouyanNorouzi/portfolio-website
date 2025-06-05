import { PAGES } from "~/utils/constants/pages";

export default defineNuxtRouteMiddleware((to, from) => {
  if (!to.meta.pageTransition || typeof to.meta.pageTransition === "boolean") {
    to.meta.pageTransition = { mode: "out-in" };
  }
  if (!from.meta.pageTransition || typeof from.meta.pageTransition === "boolean") {
    from.meta.pageTransition = { mode: "out-in" };
  }

  console.log(PAGES.indexOf(to.path), PAGES.indexOf(from.path));
  from.meta.pageTransition.name =
    PAGES.indexOf(to.path) > PAGES.indexOf(from.path) ? "slide-left" : "slide-right";
  to.meta.pageTransition.name =
    PAGES.indexOf(to.path) > PAGES.indexOf(from.path) ? "slide-left" : "slide-right";
});
