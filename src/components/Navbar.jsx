// // src/components/Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav className="bg-gradient-to-r from-green-500 to-green-300 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <h1 className="text-white text-xl font-bold">Agro Trends</h1>
//         <ul className="flex space-x-4 text-white">
//           <li>
//             <Link to="/">Home</Link>
//           </li>

//           <li>
//             <Link to="/courses">Courses</Link>
//           </li>
//           <li>
//             <Link to="/products">Products</Link>
//           </li>
//           <li>
//             <Link to="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link to="/authors">Authors</Link>
//           </li>
//           <li>
//             <Link to="/events">Upcoming Events</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-400 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">🌱 Agro Trends</h1>

        {/* Hamburger button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation links */}
        <ul
          className={`md:flex md:space-x-6 text-white font-medium ${
            isOpen ? "block" : "hidden"
          } md:block mt-4 md:mt-0`}
        >
          <li>
            <Link to="/" className="hover:text-gray-200 block py-1">
              Home
            </Link>
          </li>
          <li>
            <Link to="/courses" className="hover:text-gray-200 block py-1">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-200 block py-1">
              Products
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-200 block py-1">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/authors" className="hover:text-gray-200 block py-1">
              Authors
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-200 block py-1">
              Upcoming Events
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
