// src/components/CourseDetails.jsx

import courses from "../components/data/courses";
import CourseModules from "../components/Modules/CourseModules";

const CourseDetails = ({ courseId }) => {
  const course = courses.find((c) => c.id === Number(courseId));

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md">
          <div className="text-6xl mb-4">🌱</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Course Not Found
          </h2>
          <p className="text-gray-600">
            The requested agriculture course doesn't exist
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Course Header */}
      <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 shadow-md mb-8 border border-green-100">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-64 object-cover rounded-xl shadow-lg border-4 border-white"
            />
          </div>
          <div className="md:w-2/3">
            <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-3">
              {course.category || "Agriculture"}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {course.title}
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              By{" "}
              <span className="font-semibold text-green-700">
                {course.instructor}
              </span>
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600 mr-2">⏱️</span>
                <span>{course.duration || "4 Weeks"}</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600 mr-2">📶</span>
                <span>{course.level || "Intermediate"}</span>
              </div>
              <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600 mr-2">🌾</span>
                <span>{course.isFree ? "Free" : `$${course.price}`}</span>
              </div>
            </div>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {course.description ||
                "Master modern agricultural techniques with this comprehensive course."}
            </p>

            <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 transform hover:scale-105">
              {course.isFree ? "Enroll Now" : `Enroll With $${course.price}`}
            </button>
          </div>
        </div>
      </div>

      {/* Course Modules */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
        <div className="bg-green-600 px-6 py-4">
          <h2 className="text-xl font-semibold text-white">
            Course Curriculum
          </h2>
        </div>
        {course.modules ? (
          <CourseModules modules={course.modules} />
        ) : (
          <div className="p-8 text-center text-gray-500">
            <p>No modules available yet</p>
          </div>
        )}
      </div>

      {/* Back Button */}
      <div className="mt-8 text-center">
        <button
          onClick={() => window.history.back()}
          className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
        >
          ← Back to All Courses
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
