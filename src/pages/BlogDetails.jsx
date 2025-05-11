import { useParams } from "react-router-dom";
import { article } from "../components/data/article";
import CommentSection from "../components/sections/CommentSection";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = article.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="text-center py-10 text-gray-500">Blog not found.</div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-green-800">{blog.title}</h1>
      <p className="text-sm text-gray-500 mb-2">
        By {blog.authorName} • {blog.date}
      </p>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-xl mb-6"
      />
      <p className="text-lg text-gray-700 mb-6 leading-relaxed">
        {blog.fullText}
      </p>
      {blog.points && (
        <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
          {blog.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      )}
      <CommentSection blogId={blog.id} />
    </div>
  );
};

export default BlogDetails;
