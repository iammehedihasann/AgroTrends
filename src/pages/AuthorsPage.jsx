import AuthorCard from "../components/card/AuthorCard";
import { authors } from "../components/data/authors";

const Authorspage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Meet Our Authors</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {authors.map((author) => (
          <AuthorCard key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default Authorspage;
