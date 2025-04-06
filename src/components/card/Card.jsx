import React from "react";

const Card = ({ image, title, description }) => {
  return (
    <div className="border rounded p-4 shadow-md bg-white cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded"
      />
      <h3 className="text-lg font-bold mt-2">{title}</h3>
      <p className="text-sm mt-1">{description}</p>
    </div>
  );
};

export default Card;
