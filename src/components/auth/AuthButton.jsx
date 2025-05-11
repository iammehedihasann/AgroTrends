import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import LoginForm from "./LoginForm";
import ProfileDropdown from "./ProfileDropdown";

const AuthButton = () => {
  const { user, login, logout } = useAuth();
  const [showLogin, setShowLogin] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (email, password) => {
    try {
      await login(email, password);
      setShowLogin(false);
      setError("");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="relative">
      {user ? (
        <div className="relative">
          <button
            onClick={() => setShowProfile(!showProfile)}
            className="flex items-center space-x-1 text-gray-700 hover:text-green-600"
          >
            <span className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
              {user.displayName?.charAt(0) || user.email?.charAt(0)}
            </span>
          </button>
          {showProfile && <ProfileDropdown user={user} onLogout={logout} />}
        </div>
      ) : (
        <div className="relative">
          <button
            onClick={() => setShowLogin(!showLogin)}
            className="text-gray-700 hover:text-green-600"
          >
            Sign In
          </button>
          {showLogin && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-3 px-4 z-50">
              <LoginForm onLogin={handleLogin} error={error} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthButton;
