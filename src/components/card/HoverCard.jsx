import React from "react";

const HoverCard = ({ image, title, info, hoverInfo }) => {
  return (
    <div className="relative group w-full max-w-sm bg-white rounded-xl shadow-md overflow-hidden transition duration-300 hover:shadow-xl">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{info}</p>
      </div>

      {/* Hover info */}
      <div className="absolute inset-0 bg-gray-500 cursor-pointer bg-opacity-80 text-white  p-4 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm">{hoverInfo}</p>
      </div>
    </div>
  );
};
export default HoverCard;
