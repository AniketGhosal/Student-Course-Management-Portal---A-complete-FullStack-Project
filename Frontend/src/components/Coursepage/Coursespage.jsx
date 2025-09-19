// // import React from 'react';
// // import CoursesHeader from './CoursesHeader';


// // const Coursespage = () => {
// //   return (
// //     <div className="container courses-page py-5">
// //       <CoursesHeader />
// //       {/* <CourseList />  */}
// //     </div>
// //   );
// // };

// // export default Coursespage;


// import React, { useEffect, useState } from 'react';
// import CoursesHeader from './CoursesHeader';
// import CourseSection from './CourseSection';
// import { getCourses } from '../../services/courseService';
// import './Coursespage.css';

// const Coursespage = () => {
//   const [courses, setCourses] = useState([]);

//   useEffect(() => {
//     getCourses()
//       .then(res => res.json())
//       .then(data => setCourses(data))
//       .catch(err => console.error(err));
//   }, []);

//   const groupedCourses = {
//     Language: [],
//     Software: [],
//     Hardware: [],
//   };

//   courses.forEach(course => {
//     if (groupedCourses[course.category]) {
//       groupedCourses[course.category].push(course);
//     }
//   });

//   return (
//     <div className="container courses-page py-5">
//       <CoursesHeader />

//       <CourseSection
//         title="Language Specific Courses"
//         courses={groupedCourses.Language}
//         direction="ltr"
//       />
//       <CourseSection
//         title="Software Based Courses"
//         courses={groupedCourses.Software}
//         direction="rtl"
//       />
//       <CourseSection
//         title="Hardware Based Courses"
//         courses={groupedCourses.Hardware}
//         direction="ltr"
//       />
//     </div>
//   );
// };

// export default Coursespage;

import React, { useEffect, useState } from 'react';
import CoursesHeader from './CoursesHeader';
import CourseSection from './CourseSection';
import { getCourses } from '../services/courseService';
import './Coursespage.css';

const Coursespage = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCourses()
      .then(data => setCourses(data))
      .catch(err => {
        console.error('Failed to load courses:', err);
        setError('Unable to fetch courses. Please try again later.');
      });
  }, []);

  const groupedCourses = {
    Language: [],
    Software: [],
    Hardware: [],
  };

  courses.forEach(course => {
    const category = course.category?.trim();
    if (groupedCourses[category]) {
      groupedCourses[category].push(course);
    }
  });

  return (
    <div className="container courses-page py-5">
      <CoursesHeader />

      {error && (
        <p className="text-center text-danger mb-4">{error}</p>
      )}

      <CourseSection
        title="Language Specific Courses"
        courses={groupedCourses.Language}
        direction="ltr"
      />
      <CourseSection
        title="Software Based Courses"
        courses={groupedCourses.Software}
        direction="rtl"
      />
      <CourseSection
        title="Hardware Based Courses"
        courses={groupedCourses.Hardware}
        direction="ltr"
      />
    </div>
  );
};

export default Coursespage;