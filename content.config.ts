import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/**/*.md",
      schema: z.object({
        date: z.string(),
        tags: z.array(z.string()),
      }),
    }),
    diary: defineCollection({
      type: "page",
      source: "diary/**/*.md",
      schema: z.object({
        date: z.string(),
      }),
    }),
    library: defineCollection({
      type: "data",
      source: "library/**/*.json",
      schema: z.object({
        title: z.string(),
        releaseDate: z.string().optional(),
        purchaseDate: z.string().optional(),
        startDate: z.string().optional(),
        completeDate: z.string().optional(),
        tags: z.array(z.string()).optional(),
        images: z.array(z.string()).optional(),
        status: z
          .enum(["wishlist", "unstarted", "ongoing", "completed"])
          .optional(),
        link: z.string().optional(),
      }),
    }),
  },
});
