// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // Prettier formats void elements as <br />
    "vue/html-self-closing": ["warn", { html: { void: "always" } }],
  },
});
