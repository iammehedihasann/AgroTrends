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
        {/* Public Routes */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<MainHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/q&a" element={<Faqs />} />
        <Route path="/blogs" element={<BlogSection />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/blogs/author/:id" element={<AuthorBlogs />} />
        <Route path="/authors" element={<AuthorsPage />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <ProductsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProtectedRoute>
              <ProductDetailsPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses"
          element={
            <ProtectedRoute>
              <CoursesPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/courses/:id"
          element={
            <ProtectedRoute>
              <SingleCoursePage />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
