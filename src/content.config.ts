import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    date: z.coerce.date(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/projects" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    start_date: z.int(),
    end_date: z.int(),
    preview_img: z.string(),
    highlight: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
