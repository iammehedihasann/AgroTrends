import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "/firebase/firebaseConfig";

import Home from "./Home";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authentication = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div>Loading...</div>;

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/signin" />} />
        <Route
          path="/signin"
          element={!user ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          path="/signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Authentication;
