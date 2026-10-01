export const PAGE_INDEX = "/";
export const PAGE_PROJECT = "/projects";
export const PAGE_BLOG = "/blog";
export const PAGE_ABOUT = "/about";

// Ordered to match the navigation order in the header
export const PAGES = [PAGE_INDEX, PAGE_PROJECT, PAGE_BLOG, PAGE_ABOUT];

// Header navigation, named after the case file sections each page holds. `short` is the
// label under the number on mobile, where the full names don't fit side by side.
export const NAV_PAGES = [
  { path: PAGE_INDEX, number: "01", label: "Dossier", short: "Dossier" },
  { path: PAGE_PROJECT, number: "02", label: "Operations", short: "Ops" },
  { path: PAGE_BLOG, number: "03", label: "Transmissions", short: "Transmit" },
  { path: PAGE_ABOUT, number: "04", label: "Polygraph", short: "Polygraph" },
];

// Resolve a path to the index of its section in PAGES (e.g. "/blog/3" -> "/blog")
export function getSectionIndex(path: string) {
  return PAGES.findIndex((page) => path === page || (page !== "/" && path.startsWith(`${page}/`)));
}
