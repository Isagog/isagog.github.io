import { z } from "zod";

export const zArticleSchema = z.object({
  title: z.string(),
  image: z.string(),
  slug: z.string(),
});

export const zArticlesSchema = z.array(zArticleSchema);
export type ArticleType = z.infer<typeof zArticleSchema>;