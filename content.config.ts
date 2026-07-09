import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  contentHeading: false,
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        image: z.string(),
        date: z.date(),
        title: z.string(),
        num: z.number(),
        description: z.string()
      }),
    }),
  },
});
