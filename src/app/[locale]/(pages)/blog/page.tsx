import { BlogCard } from "./components/blog-card";

const BlogPage = () => {
  return (
    <div className="flex justify-center flex-col items-center gap-4">
      <BlogCard
        title="Il linguaggio non è algebra"
        imageUrl="/placeholder.png"
      />
      <BlogCard title="Linguaggio e conoscenza" imageUrl="/placeholder.png" />
      <BlogCard
        title="Il problema delle allucinazioni"
        imageUrl="/placeholder.png"
      />
      <BlogCard title="La recerca aumentata" imageUrl="/placeholder.png" />
    </div>
  );
};
export default BlogPage;
