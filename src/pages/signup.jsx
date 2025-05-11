import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "/firebase/firebaseConfig";
import { useNavigate, Link } from "react-router-dom";
// import assets from "../assets/assets";

const SignUp = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirm) {
      setError("Passwords do not match");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, {
        displayName: name,
      });
      navigate("/signin");
    } catch (err) {
      switch (err.code) {
        case "auth/email-already-in-use":
          setError("Email already in use.");
          break;
        case "auth/invalid-email":
          setError("Invalid email address.");
          break;
        case "auth/weak-password":
          setError("Password should be at least 6 characters.");
          break;
        default:
          setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-green-300">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 ">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          {/* Form Header */}
          <div className="bg-green-600 py-4 px-6">
            <h2 className="text-xl font-semibold text-white">
              Create Your Account
            </h2>
          </div>

          {/* Signup Form */}
          <form onSubmit={handleSignUp} className="p-6 space-y-4">
            {error && <p className="text-red-500 text-center">{error}</p>}

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="••••••••"
                required
              />
            </div>

            <div>
              <label
                htmlFor="confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                required
              />
              <label
                htmlFor="terms"
                className="ml-2 block text-sm text-gray-700"
              >
                I agree to the{" "}
                <a href="#" className="text-green-600 hover:text-green-500">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                Sign Up
              </button>
            </div>
          </form>

          {/* Login Link */}
          <div className="bg-gray-50 px-6 py-4">
            <p className="text-sm text-gray-600 text-center">
              Already have an account?{" "}
              <Link
                to="/signin"
                className="font-medium text-green-600 hover:text-green-500"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
