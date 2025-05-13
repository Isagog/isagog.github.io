import { MarkdownRenderer } from "@/app/_components/custom/markdown-render";
import { getMdxBySlug } from "@/lib/mdx";
import Link from "next/link";

const BlogPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const post = await getMdxBySlug(slug, "articles");

  if (!post) {
    return (
      <div className="text-center min-h-[70vh] flex items-center flex-col justify-center">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link href="/blog" className="text-[#86efac]" prefetch>
          Go back to blog
        </Link>
      </div>
    );
  }

  return (
    <MarkdownRenderer
      content={post.content}
      imageClassName="w-auto sm:max-w-2/4 mx-auto h-[75vh] object-contain rounded-3xl"
    />
  );
};

export default BlogPostPage;
