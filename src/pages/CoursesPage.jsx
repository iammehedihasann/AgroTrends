// pages/CoursesPage.jsx
import courses from "../components/data/courses";
import CourseCard from "../components/card/CourseCard";

const CoursesPage = () => (
  <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {courses.map((course) => (
      <CourseCard key={course.id} course={course} />
    ))}
  </div>
);
export default CoursesPage;
