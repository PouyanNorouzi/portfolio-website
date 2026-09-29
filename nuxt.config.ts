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
    pageTransition: { name: "page", mode: "out-in" },
  },

  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/content",
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

  colorMode: {
    preference: "dark",
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
      // @ts-expect-error runtimeConfig.public typing
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://pouyannorouzi.com",
    },
  },

  vite: {
    optimizeDeps: {
      include: ["chart.js", "vue-chartjs"],
    },
  },
});
