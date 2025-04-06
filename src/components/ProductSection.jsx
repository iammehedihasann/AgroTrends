import assets from "../assets/assets";
import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./card/Card";

const ProductSection = () => {
  const products = [
    {
      image: assets.seeds,
      title: "Seeds",
      description: "Classic and modern seed options.",
    },
    {
      image: assets.tools,
      title: "Gardening Tools Set",
      description: "Explore quality gardening tools.",
    },
    {
      image: assets.fertilizer,
      title: "Organic Fertilizers",
      description: "Eco-friendly fertilizers for better yield.",
    },
  ];

  return (
    <div>
      <SectionTitle title="Product" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {products.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
