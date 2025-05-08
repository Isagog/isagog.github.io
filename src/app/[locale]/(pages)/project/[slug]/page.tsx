import { getMdxBySlug } from "@/lib/mdx";
import Image from "next/image";
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
      <h1 className="text-2xl font-bold text-center font-sans">
        {post.frontmatter.title as string}
      </h1>
      <Image
        src={post.frontmatter.image as string}
        alt={post.frontmatter.title as string}
        width={1000}
        height={1000}
        className="w-auto mx-auto h-[75vh] object-contain rounded-3xl"
      />
      {post.content}
    </article>
  );
};

export default ProjectPostPage;
