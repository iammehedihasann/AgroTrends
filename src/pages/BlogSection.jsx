// import React from "react";
// import BlogCard from "../components/card/BlogCard";
// import { article } from "../components/data/article";

// const BlogSection = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
//         Agri Blogs
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {article.map((article) => (
//           <BlogCard key={article.id} blog={article} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BlogSection;
import BlogSection from "../components/sections/BlogSection";
import React from "react";

const BlogsSection = () => {
  return <div>{BlogSection}</div>;
};

export default BlogsSection;
