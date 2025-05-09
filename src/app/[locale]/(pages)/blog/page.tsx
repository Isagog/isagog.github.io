import { getAllSlugs } from "@/lib/mdx";
import { BlogCard } from "./_components/blog-card";

const BlogPage = async () => {
  const slugs = await getAllSlugs();

  return (
    <div className="flex justify-center min-h-[70vh] flex-col items-center gap-4">
      {slugs.map(({ slug, title, image }) => (
        <BlogCard key={slug} title={title} imageUrl={image} slug={slug} />
      ))}
    </div>
  );
};

export default BlogPage;
