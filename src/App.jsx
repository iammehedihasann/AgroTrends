import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import ProtectedRoute from "./components/shared/ProtectedRoute";
// import ProductCard from "./components/card/ProductCard";

//pages
import Home from "./pages/Home";
// import Courses from "./pages/Courses";
import CoursesPage from "./pages/CoursesPage";
import SingleCoursePage from "./pages/SingleCoursePage";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import SignUp from "/src/pages/SignUP";
import SignIn from "/src/pages/SignIn";
import MainHome from "./pages/MainHome";
import Events from "./pages/Events";
import BlogSection from "./components/sections/BlogSection";
import BlogDetails from "./pages/BlogDetails";
import AuthorsPage from "./pages/AuthorsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsPage from "./pages/ProductsPage";
import AuthorBlogs from "./pages/AuthorBlogs";

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Auth Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/" element={<MainHome />} />

        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/q&a" element={<Faqs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<SingleCoursePage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/blogs/author/:id" element={<AuthorBlogs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
