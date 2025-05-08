import { zGitHubFilesArraySchema } from "@/packages/artciles/article.model";
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from "remark-gfm";

const repoOwner = process.env.GITHUB_REPO_OWNER!;
const repoName = process.env.GITHUB_REPO_NAME!;
const folderPath = process.env.GITHUB_FOLDER_PATH!;
const branch = process.env.GITHUB_BRANCH!;
const token = process.env.GITHUB_TOKEN!;

export const getAllSlugs = async () => {
  const githubApiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${folderPath}?ref=${branch}`;

  const response = await fetch(githubApiUrl, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    console.error("GitHub API error:", await response.text());
    return [];
  }

  const files = zGitHubFilesArraySchema.parse(await response.json());

  const slugsWithMeta = await Promise.all(
    files
      .filter((file) => file.name.endsWith(".mdx"))
      .map(async (file) => {
        const rawUrl = file.download_url;

        if (!rawUrl) {
          console.error(`No download URL for ${file.name}`);
          return null;
        }

        const rawContent = await fetch(rawUrl, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }).then(res => res.text());

        const { frontmatter } = await compileMDX({
          source: rawContent,
          options: { parseFrontmatter: true },
        });

        return {
          slug: file.name.replace(/\.mdx$/, ""),
          title: String(frontmatter?.title || ""),
          image: String(frontmatter?.image || "/placeholder.png"),
        };
      })
  );

  return slugsWithMeta;
};

export const getMdxBySlug = async (slug: string) => {
  const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branch}/${folderPath}/${slug}.mdx`;

  try {
    const response = await fetch(rawUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      console.error(`GitHub fetch error for ${slug}:`, await response.text());
      return null;
    }

    const rawContent = await response.text();

    const { content, frontmatter } = await compileMDX({
      source: rawContent,
      options: { parseFrontmatter: true, mdxOptions: { remarkPlugins: [remarkGfm] } },
    });

    return {
      content,
      frontmatter,
      slug,
    };
  } catch (error) {
    console.error(`Error processing MDX for ${slug}:`, error);
    return null;
  }
};