import { BlogCard } from "./_components/blog-card";

const BlogPage = async () => {
  return (
    <div className="flex justify-center min-h-[70vh] flex-col items-center gap-4">
      <BlogCard />
    </div>
  );
};

export default BlogPage;
