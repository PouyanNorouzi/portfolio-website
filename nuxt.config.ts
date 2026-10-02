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
    // Only the vitest integration needs it, so regular builds skip it
    ...(process.env.VITEST ? ["@nuxt/test-utils/module"] : []),
  ],

  css: ["~/assets/css/main.css"],

  image: {
    provider: "none",
  },

  // Icons resolve locally only: the @iconify-json collections are bundled into the server build
  // and the client bundle holds every icon found in the source, so nothing is fetched from
  // api.iconify.design at runtime. A missing icon fails visibly instead of falling back to the API.
  icon: {
    serverBundle: "local",
    clientBundle: { scan: true },
    fallbackToApi: false,
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
      styles: ["normal"],
      // woff2 is supported by every current browser; skipping woff drops the duplicate files
      formats: ["woff2"],
      subsets: ["latin"],
      // the home page lays out text in these on first paint; without a preload the late swap shifts it
      preload: true,
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
