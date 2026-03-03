import { defineCollection, z } from 'astro:content';

// --- COLECCIÓN "PROJECTS" ---
const projectsCollection = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tagline: z.string(),
      status: z.enum(['Completed', 'In Progress', 'Archived']),
      cover: image(),
      description: z.string(),
      images: z.array(image()),
      keyFeatures: z.array(z.string()),
      techStack: z.array(z.string()),
      publishDate: z.date(),
      repoUrl: z.string().url().optional(),
      figmaUrl: z.string().url().optional(),
      demoUrl: z.string().url().optional(),
    }),
});

// --- COLECCIÓN "CAREER" (Actualizada) ---
const careerCollection = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum(['Work', 'Education']),
    title: z.string(),
    entity: z.string(),
    location: z.string(),
    startDate: z.date(),
    endDate: z.date().optional(),
    contractType: z.string().optional(),

    // NUEVO CAMPO: Descripción narrativa del rol
    description: z.string().optional(),

    achievements: z.array(z.string()),
    techStack: z.array(z.string()).optional(),
  }),
});

// --- COLECCIÓN "CERTIFICATIONS" ---
const certificationsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    category: z.string(),
    // level: z.string().optional(), // Deprecado en favor de category
    issueDate: z.date(),
    expiryDate: z.date().optional(),
    description: z.string(),
    keySkills: z.array(z.string()),
    techStack: z.array(z.string()).optional(),
    credentialId: z.string().optional(),
    credentialUrl: z.string().url().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  career: careerCollection,
  certifications: certificationsCollection,
};
