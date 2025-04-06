import assets from "../assets/assets";
import React from "react";
import SectionTitle from "./SectionTitle";
import Card from "./card/Card";

const CoursesSection = () => {
  const courses = [
    {
      image: assets.crop,
      title: "Crop Rotation 101",
      description: "Emily shares insights into literature and farming.",
    },
    {
      image: assets.farming,
      title: "Sustainable Farming",
      description: "James talks about tech and sustainability.",
    },
    {
      image: assets.agribuisness,
      title: "Online Agribusiness",
      description: "Sophia shares vibrant travel and agribusiness blogs.",
    },
  ];

  return (
    <div>
      <SectionTitle title="Explore Our Courses" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {courses.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default CoursesSection;
