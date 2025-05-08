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
      <div className="text-center min-h-[70vh] flex items-center flex-col justify-center">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/project" className="text-[#86efac]" prefetch>
          Go back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="prose max-w-4xl mx-auto space-y-4">
      {post.content}
    </article>
  );
};

export default ProjectPostPage;
