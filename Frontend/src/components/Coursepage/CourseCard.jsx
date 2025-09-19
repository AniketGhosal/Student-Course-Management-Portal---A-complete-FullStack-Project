// import React from 'react';
// import './Coursespage.css';

// const CourseCard = ({ course }) => {
//   return (
//     <div className="course-card">
//       <img src={course.image} alt={course.title} className="course-image" />
//       <div className="course-info">
//         <h5>{course.title}</h5>
//         <p>{course.description}</p>
//         <span className="course-category">{course.category}</span>
//         <span className="course-price">₹{course.price}</span>
//       </div>
//       <div className="course-hover">
//         <button className="enroll-btn">Enroll</button>
//       </div>
//     </div>
//   );
// };

// export default CourseCard;

import React from 'react';
import './Coursespage.css';

const CourseCard = ({ course }) => {
  return (
    <div className="dynamic-card">
      <img src={course.image} alt={course.title} className="dynamic-image" />
      <div className="course-info">
        <h5>{course.title}</h5>
        <p>{course.description}</p>
        <span className="course-category">{course.category}</span>
        <span className="course-price">₹{course.price}</span>
      </div>
      <div className="dynamic-hover">
        <button className="dynamic-enroll-btn">Enroll</button>
      </div>
    </div>
  );
};

export default CourseCard;