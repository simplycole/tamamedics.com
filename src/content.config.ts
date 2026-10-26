import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const evidence = z.enum(['confirmed', 'observed', 'community', 'unverified', 'researching', 'planned']);

const research = defineCollection({
  loader: glob({ base: './src/content/research', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    summary: z.string(),
    status: z.enum(['active', 'paused', 'complete']),
    projectId: z.string(),
    device: z.string(),
    category: z.string(),
    confidence: evidence,
    tags: z.array(z.string()).default([]),
    published: z.coerce.date().optional(),
    updated: z.coerce.date().optional(),
  }),
});

const labNotes = defineCollection({
  loader: glob({ base: './src/content/lab-notes', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: evidence,
    projectId: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

const guides = defineCollection({
  loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    device: z.string(),
    difficulty: z.enum(['basic', 'intermediate', 'advanced']),
    risk: z.enum(['low', 'moderate', 'high']),
    category: z.string(),
    guideType: z.string().optional(),
    verification: z.string().optional(),
    summary: z.string(),
    status: evidence,
    tools: z.array(z.string()).default([]),
    toc: z.array(z.object({ href: z.string(), label: z.string() })).default([]),
    updated: z.coerce.date().optional(),
  }),
});

const devices = defineCollection({
  loader: glob({ base: './src/content/devices', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    name: z.string(),
    generation: z.string().optional(),
    region: z.string().optional(),
    releaseEra: z.string().optional(),
    modelCode: z.string().optional(),
    status: evidence,
    summary: z.string(),
    researchStatus: evidence,
  }),
});

export const collections = { research, 'lab-notes': labNotes, guides, devices };
