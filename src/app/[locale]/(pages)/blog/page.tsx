import { getAllSlugs } from "@/lib/mdx";
import { BlogCard } from "./_components/blog-card";

const BlogPage = async () => {
  const slugs = await getAllSlugs();

  console.log(slugs);

  return (
    <div className="flex justify-center min-h-[70vh] flex-col items-center gap-4">
      {slugs.map(
        (item) =>
          item && (
            <BlogCard
              key={item.slug}
              title={item.title}
              imageUrl={item.image}
              slug={item.slug}
            />
          )
      )}
    </div>
  );
};

export default BlogPage;
