export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Pouyan Portfolio",
      htmlAttrs: {
        lang: "en",
      },
    },
  },

  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image", "@nuxt/ui"],

  css: ["~/assets/css/main.css"],

  colorMode: {
    preference: "dark",
  },
});
