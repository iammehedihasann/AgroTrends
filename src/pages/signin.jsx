import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/firebase/firebaseConfig"; // ✅ Adjust path as needed
import { useNavigate, Link } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/"); // ✅ Redirect to home on successful login
    } catch (err) {
      setError(err.message); // ✅ Show actual Firebase error
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-100">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-4">
          AgriBlog
        </h1>
        <h2 className="text-xl font-semibold text-center mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 p-2 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-1 font-medium">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full border border-gray-300 p-2 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-700"
          >
            Sign In
          </button>
        </form>

        <p className="mt-4 text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
