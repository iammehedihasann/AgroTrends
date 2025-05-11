import React, { useState } from "react";
import Navbar from "../components/shared/Navbar";
import BlogSection from "../components/sections/BlogSection";
import Home from "./Home"; // Your untouched Home.jsx
import assets from "../assets/assets";

const blogList = [
  {
    image: assets.blogging,
    title: "The Art of Writing",
    info: "Discover tips and tricks for honing your writing skills...",
    hoverInfo: "Details...",
  },
  {
    image: assets.reading,
    title: "Reading for Pleasure",
    info: "Explore the joys of reading...",
    hoverInfo: "Details...",
  },
  {
    image: assets.fertilizer,
    title: "Blogging Essentials",
    info: "Learn the essentials of blogging...",
    hoverInfo: "Details...",
  },
  {
    image: "https://via.placeholder.com/300",
    title: "Blog Title 4",
    info: "Short description...",
    hoverInfo: "Details...",
  },
];

const MainHome = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogList.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {setSearchQuery}
      <Home />
      <BlogSection blogList={filteredBlogs} />
    </>
  );
};

export default MainHome;
