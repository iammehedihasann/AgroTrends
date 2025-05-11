import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Pass search input to parent
  };

  return (
    <nav className="bg-gradient-to-r  bg-green-900 shadow-md">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row md:justify-between items-center">
        <div className="flex items-center justify-between w-full md:w-auto mb-3 md:mb-0">
          <h1 className="text-white text-2xl font-bold mr-4">🌱 Agro Trends</h1>

          <div className="flex items-center md:hidden space-x-3">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="text-white"
            >
              🔍
            </button>
            <button className="text-white" onClick={() => setIsOpen(!isOpen)}>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" strokeWidth={2} />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} />
                )}
              </svg>
            </button>
          </div>
        </div>

        <ul
          className={`md:flex md:space-x-6 text-white font-medium text-1xl w-full md:w-auto ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li>
            <Link to="/" className="block py-1 hover:text-gray-200">
              Home
            </Link>
          </li>

          {/* About Us */}
          <li>
            <Link to="/about" className="block py-1 hover:text-green-200">
              About us
            </Link>
          </li>
          {/* Categories Dropdown */}
          <li className="group relative ">
            <button className="block py-1 hover:text-gray-200 focus:outline-none ">
              Categories
            </button>

            <ul className="absolute left-0 hidden group-hover:block bg-slate-200 text-black mt-1 rounded shadow-md w-40 z-10">
              <li>
                <Link
                  to="/blogs"
                  className="block px-4 py-2 hover:bg-green-400"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/courses"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/authors"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Authors
                </Link>
              </li>
            </ul>
          </li>
          {/* Q & A */}
          <li>
            <Link to="/q&a" className="block py-1 hover:text-green-300">
              Q & A
            </Link>
          </li>

          {/* Upcoming Events */}
          <li>
            <Link to="/events" className="block py-1 hover:text-gray-200">
              Upcoming Events
            </Link>
          </li>

          {/* Desktop Search */}
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

          <Link to="/signin">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-950">
              Sign In
            </button>
          </Link>

          {/* Mobile Search */}
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
