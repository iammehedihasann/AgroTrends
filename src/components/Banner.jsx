// import React from "react";

// const Banner = () => {
//   return (
//     <div
//       className="relative h-64 bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//       }}
//     >
//       <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black bg-opacity-40">
//         Welcome to AgriBlog
//       </h1>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
// import backgroundImage from "../../src/assets/Fontend_assets/banner.png"; // Adjust this path
import assets from "../assets/assets"; // Adjust this path
const Banner = () => {
  return (
    <div
      className="relative h-64 bg-cover bg-center"
      style={{
        backgroundImage: `url(${assets.backgroundImage})`, // Use the imported image
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="absolute inset-0 flex items-center justify-center  text-4xl font-bold text-[#212121] bg-opacity-40">
        Welcome to AgriBlog
      </h1>
    </div>
  );
};

export default Banner;
