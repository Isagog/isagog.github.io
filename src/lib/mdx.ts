import fs from "fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

export const getAllSlugs = async () => {
  const contentDirectory = path.join(process.cwd(), "content/articles");

  const files = await fs.promises.readdir(contentDirectory);

  const slugsWithMeta = await Promise.all(
    files
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const rawContent = await fs.promises.readFile(
          path.join(contentDirectory, file),
          "utf-8"
        );

        const { frontmatter } = await compileMDX({
          source: rawContent,
          options: { parseFrontmatter: true },
        });

        return {
          slug: file.replace(/\.mdx$/, ""),
          title: String(frontmatter?.title || ""),
          image: String(frontmatter?.image || "/placeholder.png"),
        };
      })
  );

  return slugsWithMeta;
};

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

    const { content, frontmatter } = await compileMDX({
      source: rawContent,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      content,
      frontmatter,
      slug,
    };
  } catch (error) {
    console.error(`Error reading MDX file for slug ${slug}:`, error);
    return null;
  }
};
