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

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
    "@nuxt/test-utils/module",
  ],

  css: ["~/assets/css/main.css"],

  image: {
    provider: "none",
  },

  ui: {
    theme: {
      colors: ["primary", "secondary", "tertiary", "info", "success", "warning", "error"],
    },
  },

  // Follow the visitor's OS theme; the terminal look is the fallback when it can't be read.
  colorMode: {
    preference: "system",
    fallback: "dark",
  },

  fonts: {
    defaults: {
      weights: [400, 700],
    },
    families: [
      // only used in markdown blog content, so the scanner can't detect it
      { name: "Ballet", global: true },
    ],
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://pouyannorouzi.com",
    },
  },
});
