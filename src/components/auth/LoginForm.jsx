import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = ({ onLogin, error }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {error && <p className="text-red-500 text-xs">{error}</p>}
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-2 py-1 text-sm border rounded"
          required
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-2 py-1 text-sm border rounded"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-1 rounded text-sm hover:bg-green-700"
      >
        Sign In
      </button>
      <p className="text-xs text-center text-gray-500">
        Don't have an account?{" "}
        <Link to="/signup" className="text-green-600">
          Sign Up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
