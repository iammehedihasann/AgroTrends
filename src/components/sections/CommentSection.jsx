import { useState } from "react";

const CommentSection = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [input, setInput] = useState("");

  console.log("Rendering comments for blog ID:", blogId); // ✅ This is correct

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setComments([...comments, input.trim()]);
    setInput("");
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow mt-10">
      <h3 className="text-xl font-semibold text-green-700 mb-4">
        Leave a Comment
      </h3>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Write your thoughts..."
          className="w-full h-28 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="self-end bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md transition"
        >
          Post Comment
        </button>
      </form>
      <div className="mt-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">Comments:</h4>
        {comments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first!</p>
        ) : (
          <ul className="space-y-3">
            {comments.map((comment, i) => (
              <li key={i} className="bg-white p-4 rounded-md shadow border">
                <p className="text-gray-700">{comment}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
