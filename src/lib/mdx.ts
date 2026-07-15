import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getSlugs = (
  type: "articles" | "projects",
  locale?: string
): string[] => {
  const contentDirectory =
    type === "projects"
      ? path.join(process.cwd(), "content", type, locale ?? "en")
      : path.join(process.cwd(), "content", type);

  return fs
    .readdirSync(contentDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
};

export const getMdxBySlug = async (
  slug: string,
  type: "articles" | "projects",
  locale?: string
) => {
  const contentDirectory =
    type === "articles"
      ? path.join(process.cwd(), "content/articles")
      : path.join(process.cwd(), "content/projects", locale ?? "en");

  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  try {
    const rawContent = await fs.promises.readFile(filePath, "utf-8");
    const { content, data: frontmatter } = matter(rawContent);

    return {
      content,
      frontmatter,
      slug,
    };
  } catch (error) {
    console.error(`Error reading MDX file for slug "${slug}":`, error);
    return null;
  }
};
