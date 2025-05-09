import { z } from "zod";

export const zProjectSchema = z.object({
  title: z.string(),
  description: z.string(),
  secondTitle: z.string(),
  value: z.string(),
  sector: z.string(),
  valueName: z.string(),
  name: z.string(),
  image: z.string(),
  slug: z.string(),
});

export const zProjectsSchema = z.array(zProjectSchema);
export type ProjectType = z.infer<typeof zProjectSchema>;