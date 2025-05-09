import { MarkdownRenderer } from "@/app/_components/custom/markdown-render";
import { getMdxBySlug } from "@/lib/mdx";
import Link from "next/link";

const ProjectPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const post = await getMdxBySlug(slug, "projects");

  if (!post) {
    return (
      <div className="text-center min-h-[70vh] flex items-center flex-col justify-center ">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/project" className="text-[#86efac]" prefetch>
          Go back to projects
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-[10%]">
      <MarkdownRenderer content={post.content} />
    </div>
  );
};

export default ProjectPostPage;
