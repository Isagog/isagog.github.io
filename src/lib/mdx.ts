import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getMdxBySlug = async (
  slug: string,
  type: "articles" | "projects"
) => {
  let contentDirectory;

  if (type === "articles") {
    contentDirectory = path.join(process.cwd(), "content/articles");
  } else {
    contentDirectory = path.join(process.cwd(), "content/projects");
  }

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
