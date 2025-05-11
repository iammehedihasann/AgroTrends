import { Link } from "react-router-dom";

const AuthorCard = ({ author }) => {
  return (
    <div className="bg-white rounded-2xl border border-green-500 p-6 text-center  hover:shadow-lg transition-all hover:scale-105 duration-500 ">
      <img
        src={author.image}
        alt={author.name}
        className="w-24 h-24 mx-auto border border-green-500 rounded-full object-cover mb-4 hover:transform hover:scale-105 transition-transform duration-300"
      />
      <h2 className="text-xl font-semibold mb-1 text-gray-900">
        {author.name}
      </h2>
      <p className="text-sm text-gray-500 mb-1">{author.title}</p>
      <p className="text-sm text-gray-600 mb-4 leading-relaxed">{author.bio}</p>
      <Link
        to={`/blogs/author/${author.id}`}
        className="inline-block px-4 py-2 border bg-green-600 border-green-600 text-white rounded-md hover:bg-white hover:text-black transition"
      >
        View Article
      </Link>
    </div>
  );
};

export default AuthorCard;
