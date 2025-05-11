import BlogCard from "../card/BlogCard";
import { article } from "../data/article";

const BlogSection = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-800">
        Latest Agricultural Blogs
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {article.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
