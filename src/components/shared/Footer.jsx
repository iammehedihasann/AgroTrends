// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
// import { Fafacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 text-center">
      <p>© 2025 NNN. All Rights Reserved.</p>
      <div className="flex justify-center space-x-4 ">
        <span>Contact Us</span>
        <span>Twitter</span>
        <Link
          to="https://www.facebook.com/HasanMehediX"
          className="hover hover:text-gray-400"
        >
          Facebook
        </Link>{" "}
        <span>LinkedIn</span>
      </div>
    </footer>
  );
};

export default Footer;
