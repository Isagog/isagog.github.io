import { MarkdownRenderer } from "@/app/_components/custom/markdown-render";
import { LocaleLink as Link } from "@/app/_components/custom/locale-link";
import { getMdxBySlug, getSlugs } from "@/lib/mdx";

export const dynamicParams = false;

export function generateStaticParams({
  params,
}: {
  params: { locale: string };
}) {
  return getSlugs("projects", params.locale).map((slug) => ({ slug }));
}

const ProjectPostPage = async ({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) => {
  const { slug, locale } = await params;

  const post = await getMdxBySlug(slug, "projects", locale);

  if (!post) {
    return (
      <div className="text-center min-h-[70vh] flex items-center flex-col justify-center ">
        <h1 className="text-2xl font-bold">Project not found</h1>
        <Link href="/project" className="text-terracotta">
          Go back to projects
        </Link>
      </div>
    );
  }

  return <MarkdownRenderer content={post.content} />;
};

export default ProjectPostPage;
