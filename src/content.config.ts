import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const docs = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/docs" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    section: z.enum(['intro', 'foundations', 'components', 'patterns', 'recipes']).default('intro'),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

export const collections = { docs };
