import { z } from "zod";

const zGitHubFileSchema = z.object({
  name: z.string(),
  path: z.string(),
  sha: z.string(),
  size: z.number(),
  url: z.string().url(),
  html_url: z.string().url(),
  git_url: z.string().url(),
  download_url: z.string().url().nullable(),
  type: z.union([z.literal("file"), z.literal("dir")]),
});

export const zGitHubFilesArraySchema = z.array(zGitHubFileSchema);