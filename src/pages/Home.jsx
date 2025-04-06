import React from "react";
import Banner from "../components/Banner";
import FeaturedArticles from "../components/FeaturedArticles";
import CoursesSection from "../components/CoursesSection";
import ProductSection from "../components/ProductSection";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="px-8">
        <FeaturedArticles />
        <CoursesSection />
        <ProductSection />
      </div>
    </div>
  );
};

export default Home;
