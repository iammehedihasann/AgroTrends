import React from "react";

const AuthorCard = ({ image, name, bio }) => {
  return (
    <div className="  w-full max-w-xl rounded-xl shadow-md overflow-hidden  m-4 bg-white flex items-center p-4 transition duration-300 hover:shadow-xl cursor-pointer">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mr-4" />
      <div className="h-12">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{bio}</p>
      </div>
    </div>
  );
};
export default AuthorCard;
