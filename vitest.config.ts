import { defineConfig } from "vitest/config";
import { defineVitestProject } from "@nuxt/test-utils/config";

export default defineConfig({
  test: {
    // Don't fail when a project has no tests yet
    passWithNoTests: true,
    projects: [
      {
        test: {
          name: "unit",
          include: ["tests/unit/**/*.{test,spec}.ts"],
          environment: "node",
        },
      },
      await defineVitestProject({
        test: {
          name: "nuxt",
          include: ["tests/nuxt/**/*.{test,spec}.ts"],
          environment: "nuxt",
        },
      }),
    ],
  },
});
