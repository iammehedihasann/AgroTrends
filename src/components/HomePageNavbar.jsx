// src/components/SecondaryNavbar.js
import React from "react";
import About from "../pages/About";
import Calender from "../pages/Calender";
import { Link } from "react-router-dom";
const HomePageNavbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold flex items-center">🌱 Agro Trends</h1>
      <ul
        className={`md:flex md:space-x-6 tex-white font-medium w-full md:w-auto hidden m`}
      >
        <li>
          <Link to="/about" className="block py-1 hover:text-green-200">
            About us
          </Link>
        </li>
        <li>
          <Link to="/calender" className="block py-1 hover:text-green-200">
            Calender
          </Link>
        </li>
        <li>
          <Link to="/q&a" className="block py-1 hover:text-green-200">
            Q & A
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default HomePageNavbar;
