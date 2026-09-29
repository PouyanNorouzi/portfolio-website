export default defineAppConfig({
  ui: {
    colors: {
      tertiary: "amber",
    },
    card: {
      slots: {
        // Paper sheet in light mode, HUD panel in dark mode (see main.css).
        root: "case-sheet",
      },
    },
  },
});
