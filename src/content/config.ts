// src/content/config.ts
import { defineCollection, reference, z } from "astro:content";

const sectionSchema = z.object({
  collection: z.string(),
  query: z.string(),
  component: z.function().optional(),
});

export const metaSchema = z.object({
  description: z.string().optional(),
  hasPage: z.boolean().default(true),
  itemsHasPage: z.boolean().default(true),
  sections: z.array(sectionSchema).optional(),
  itemsSections: z.array(sectionSchema).optional(),
});

// Base schema for each item (MDX)
const baseSchema = ({ image }: { image: Function }) =>
  z.object({
    title: z.string(),
    featuredImage: image().optional(),
    description: z.string().optional(),
    hasPage: z.boolean().optional(),
    sections: z.array(sectionSchema).optional(),
  });

export const collections = {
  testimonials: defineCollection({
    schema: ({ image }) =>
      baseSchema({ image }).extend({
        video: z.string().optional(), // New optional video field
      }),
  }),
  benefits: defineCollection({}),
};
