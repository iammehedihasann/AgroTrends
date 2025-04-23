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
// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-gradient-to-r from-green-600 to-green-400 shadow-lg">
//       <div className="container mx-auto px-4 py-3 flex justify-between items-center">
//         <h1 className="text-white text-2xl font-bold">🌱 Agro Trends</h1>

//         {/* Hamburger button */}
//         <div className="md:hidden">
//           <button
//             className="text-white focus:outline-none"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>

//         {/* Navigation links */}
//         <ul
//           className={`md:flex md:space-x-6 text-white font-medium ${
//             isOpen ? "block" : "hidden"
//           } md:block mt-4 md:mt-0`}
//         >
//           <li>
//             <Link to="/" className="hover:text-green-200 block py-1">
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link to="/courses" className="hover:text-green-200 block py-1">
//               Courses
//             </Link>
//           </li>
//           <li>
//             <Link to="/products" className="hover:text-green-200 block py-1">
//               Products
//             </Link>
//           </li>
//           <li>
//             <Link to="/blogs" className="hover:text-green-200 block py-1">
//               Blogs
//             </Link>
//           </li>
//           <li>
//             <Link to="/authors" className="hover:text-green-200 block py-1">
//               Authors
//             </Link>
//           </li>
//           <li>
//             <Link to="/events" className="hover:text-green-200 block py-1">
//               Upcoming Events
//             </Link>
//           </li>
//           <li>
//             <Link to="/calender" className="hover:text-green-200 block py-1">
//               Calender
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomePageNavbar from "./HomePageNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    alert("Searching for: " + searchTerm);
  };

  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-400 shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between items-center">
        {/* Logo + Mobile Controls */}
        <div className="flex items-center justify-between w-full md:w-auto mb-3 md:mb-0">
          <h1 className="text-white text-2xl font-bold mr-4">🌱 Agro Trends</h1>

          {/* Mobile Search Icon */}
          <div className="flex items-center md:hidden space-x-3">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white"
            >
              🔍
            </button>

            {/* Mobile Menu Toggle */}
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
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
        </div>

        {/* Nav Links */}
        <ul
          className={`md:flex md:space-x-6 text-white font-medium w-full md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link to="/" className="block py-1 hover:text-gray-200">
              Home
            </Link>
          </li>

          <li>
            <Link to="/courses" className="block py-1 hover:text-gray-200">
              Courses
            </Link>
          </li>
          <li>
            <Link to="/products" className="block py-1 hover:text-gray-200">
              Products
            </Link>
          </li>
          <li>
            <Link to="/blogs" className="block py-1 hover:text-gray-200">
              Blogs
            </Link>
          </li>
          <li>
            <Link to="/authors" className="block py-1 hover:text-gray-200">
              Authors
            </Link>
          </li>
          <li>
            <Link to="/events" className="block py-1 hover:text-gray-200">
              Upcoming Events
            </Link>
          </li>

          {/* Desktop Search Input */}
          <li className="hidden md:block pl-20">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="pl-3 pr-10 py-1 rounded-md border border-green-200 text-black focus:outline-none focus:ring-2 focus:ring-green-300 w-40 transition duration-300 ease-in-out"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-green-700"
              >
                🔍
              </button>
            </form>
          </li>

          {showSearch && (
            <li className="md:hidden w-full">
              <form onSubmit={handleSearch} className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-3 pr-10 py-1 rounded-md border border-green-200 text-black w-full focus:outline-none focus:ring-2 focus:ring-green-300"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-700"
                >
                  🔍
                </button>
              </form>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
