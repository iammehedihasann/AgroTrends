// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import Courses from "./pages/Courses";
// import Products from "./components/ProductSection";
// import Blogs from "./pages/Blogs";
// import Authors from "./pages/Authors";
// import Events from "./pages/Events";
// import Banner from "./components/Banner";

// function App() {
//   return (
//     <Router>
//       <Navbar /> {/* Navbar will always be shown */}
//       <div className="min-h-screen">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/courses" element={<Courses />} />
//           <Route path="/blogs" element={<Blogs />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/authors" element={<Authors />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/banner" element={<Banner />} />
//           {/* Example route for category */}
//           {/* Add more routes as needed */}
//           {/* Example: <Route path='/category' element={<Category />} /> */}
//         </Routes>
//       </div>
//       <Footer /> {/* Footer will always be shown */}
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Products from "./pages/Products";
import Calendar from "./pages/Calender";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/products" element={<Products />} />
        <Route path="/calender" element={<Calendar />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
