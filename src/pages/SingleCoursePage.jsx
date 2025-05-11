import React from "react";
import { useParams } from "react-router-dom";
import CourseDetails from "./CourseDetails";

const SingleCoursePage = () => {
  const { id } = useParams(); // Get course ID from URL

  return (
    <div className="bg-gray-50 min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <CourseDetails courseId={id} /> {/* Pass ID to details component */}
      </div>
    </div>
  );
};

export default SingleCoursePage;
