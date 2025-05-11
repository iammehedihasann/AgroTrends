// import React from "react";

// const CourseModules = ({ modules }) => {
//   return (
//     <div className="mt-8">
//       <h2 className="text-xl font-semibold mb-4">Course Curriculum</h2>
//       <div className="space-y-4">
//         {modules.map((module, index) => (
//           <div key={index} className="border rounded-lg overflow-hidden">
//             <div className="bg-gray-50 px-4 py-3 font-medium">
//               Week {module.week}: {module.title}
//             </div>
//             <ul className="divide-y">
//               {module.lessons.map((lesson, i) => (
//                 <li key={i} className="px-4 py-3 text-sm flex items-center">
//                   <span className="w-5 h-5 bg-green-100 text-green-800 rounded-full flex items-center justify-center mr-3">
//                     {i + 1}
//                   </span>
//                   {lesson}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CourseModules;

// src/components/CourseModules.jsx
const CourseModules = ({ modules }) => {
  return (
    <div className="divide-y divide-gray-200">
      {modules.map((module, index) => (
        <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
          <div className="flex items-start">
            <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center mr-4">
              <span className="text-green-600 font-medium">{module.week}</span>
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                Week {module.week}: {module.title}
              </h3>
              <ul className="space-y-2 pl-2">
                {module.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="text-gray-700">{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseModules;
