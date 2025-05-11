import React from "react";
import Banner from "./Banner";
// import FeaturedArticles from "../components/sections/FeaturedArticles";
// import CoursesSection from "../components/sections/CoursesSection";
// import ProductSection from "../components/sections/ProductSection";
import Authorspage from "./AuthorsPage";
import BlogPage from "./BlogPage";
import ProductsPage from "./ProductsPage";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-8">
        <BlogPage />
        {/* <CoursesSection /> */}
        <Authorspage />
        <ProductsPage />
      </div>
    </div>
  );
};

export default Home;
