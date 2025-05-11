import { useParams } from "react-router-dom";
import { authors } from "../components/data/authors";
import { article as blogs } from "../components/data/blogs";
const AuthorBlogs = () => {
  const { id } = useParams();
  const author = authors.find((a) => a.id === id);
  const authorBlogs = blogs.filter((blog) => blog.authorId === id);

  if (!author) {
    return (
      <div className="text-center py-20 text-red-600">Author not found</div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="mb-8 text-center">
        <img
          src={author.image}
          alt={author.name}
          className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-green-200 mb-4 shadow"
        />
        <h2 className="text-3xl font-bold text-green-800">{author.name}</h2>
        <p className="text-green-600 text-sm">{author.title}</p>
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2 border-green-100">
        Blogs by {author.name}
      </h3>

      {authorBlogs.length === 0 ? (
        <p className="text-gray-500 text-center">
          No blogs available for this author.
        </p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {authorBlogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-green-100 p-5 rounded-xl shadow hover:shadow-md transition duration-300"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h4 className="text-xl font-bold text-green-800 mb-2">
                {blog.title}
              </h4>
              <p className="text-sm text-gray-600 mb-4">{blog.excerpt}</p>
              <button className="inline-block text-sm font-medium text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition">
                Read More
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorBlogs;
