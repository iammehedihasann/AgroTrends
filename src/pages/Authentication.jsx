import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebaseConfig"; // ✅ Correct the path if needed

import Home from "./Home";
import SignIn from "../SignIn";
import SignUp from "./SignUp";

const Authentication = () => {
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <div className="text-center mt-10">Loading...</div>;

  if (error)
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error.message}
      </div>
    );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Home /> : <Navigate to="/signin" replace />}
        />
        <Route
          path="/signin"
          element={!user ? <SignIn /> : <Navigate to="/" replace />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Authentication;
