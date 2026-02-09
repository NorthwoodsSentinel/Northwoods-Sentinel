import { defineCollection, z } from 'astro:content';

// Base schema shared across all content types
const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

// Essays - long-form writing and Substack-style content
const essaysCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    // Essays can have optional reading time override
    readingTime: z.number().optional(),
  }),
});

// FlowLabs - experiments, biometrics, human performance
const flowlabsCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    // FlowLabs posts might have experiment metadata
    experimentType: z.enum(['biometrics', 'flow-state', 'performance', 'research']).optional(),
    dataSource: z.string().optional(),
  }),
});

// Systems - technical thinking, cybersecurity, architecture
const systemsCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    // Systems posts might reference related technical areas
    domain: z.enum(['cybersecurity', 'systems-thinking', 'architecture', 'technical']).optional(),
  }),
});

// Media - YouTube integration and video content
const mediaCollection = defineCollection({
  type: 'content',
  schema: baseSchema.extend({
    // Media posts include video metadata
    videoUrl: z.string().url().optional(),
    youtubeId: z.string().optional(),
    duration: z.string().optional(),
  }),
});

export const collections = {
  'essays': essaysCollection,
  'flowlabs': flowlabsCollection,
  'systems': systemsCollection,
  'media': mediaCollection,
};
