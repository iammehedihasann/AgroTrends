// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "/firebase/firebaseConfig";
// import { Navigate } from "react-router-dom";

// const ProtectedRoute = ({ children }) => {
//   const [user, loading] = useAuthState(auth);

//   if (loading) return <div>Loading...</div>;

//   return user ? children : <Navigate to="/signin" />;
// };

// export default ProtectedRoute;

import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default ProtectedRoute;
