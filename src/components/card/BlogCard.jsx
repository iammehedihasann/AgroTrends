import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 border overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-green-800 mb-2 hover:underline cursor-pointer">
          {blog.title}
        </h3>
        <p className="text-sm text-gray-500 mb-1">By {blog.authorName}</p>
        <p className="text-sm text-gray-400 mb-3">{blog.date}</p>
        <p className="text-gray-700 line-clamp-3 mb-4">{blog.content}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-medium px-4 py-2 rounded-md transition"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
