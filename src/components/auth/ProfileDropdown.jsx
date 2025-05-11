import { Link } from "react-router-dom";

const ProfileDropdown = ({ user, onLogout }) => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-50">
      <div className="px-4 py-3 border-b">
        <p className="text-sm font-medium text-gray-900">
          {user.displayName || "User"}
        </p>
        <p className="text-xs text-gray-500 truncate">{user.email}</p>
      </div>
      <div className="px-4 py-3">
        <p className="text-xs text-gray-500">
          <span className="font-medium">Joined:</span>{" "}
          {new Date(user.metadata.creationTime).toLocaleDateString()}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          <span className="font-medium">Last Login:</span>{" "}
          {new Date(user.metadata.lastSignInTime).toLocaleDateString()}
        </p>
      </div>
      <div className="border-t px-1 py-1">
        <Link
          to="/profile"
          className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          My Profile
        </Link>
        <button
          onClick={onLogout}
          className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ProfileDropdown;
