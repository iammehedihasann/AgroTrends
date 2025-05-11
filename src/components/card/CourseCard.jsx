// src/components/CourseCard.jsx
import { Link } from "react-router-dom";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 transform hover:-translate-y-1">
      {/* Course Thumbnail */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {/* Category Badge */}
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
            course.isFree
              ? "bg-green-100 text-green-800"
              : "bg-amber-100 text-amber-800"
          }`}
        >
          {course.isFree ? "FREE" : `PAID`}
        </span>
      </div>

      {/* Course Content */}
      <div className="p-5">
        {/* Category & Duration */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
            {course.category || "Agriculture"}
          </span>
          <span className="text-xs text-gray-500 flex items-center">
            ⏱️ {course.duration || "4 Weeks"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {course.title}
        </h3>

        {/* Instructor */}
        <p className="text-sm text-gray-600 mb-4 flex items-center">
          <span className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center mr-2 text-xs">
            👨‍🌾
          </span>
          {course.instructor || "Agriculture Expert"}
        </p>

        {/* Difficulty & Button */}
        <div className="flex justify-between items-center">
          <span
            className={`text-xs px-2 py-1 rounded-full ${
              course.level === "Beginner"
                ? "bg-blue-100 text-blue-800"
                : course.level === "Intermediate"
                ? "bg-purple-100 text-purple-800"
                : "bg-amber-100 text-amber-800"
            }`}
          >
            {course.level || "Beginner"}
          </span>

          <Link
            to={`/courses/${course.id}`}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-lg transition-colors duration-300"
          >
            View Course
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
