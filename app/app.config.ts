export default defineAppConfig({
  ui: {
    colors: {
      tertiary: "amber",
    },
    prose: {
      a: {
        // Underline always (colour alone doesn't set a link apart from body text) and a full-strength focus ring.
        base: "underline underline-offset-4 outline-primary",
      },
    },
    card: {
      slots: {
        // Paper sheet in light mode, HUD panel in dark mode (see main.css).
        root: "case-sheet",
      },
    },
  },
});
