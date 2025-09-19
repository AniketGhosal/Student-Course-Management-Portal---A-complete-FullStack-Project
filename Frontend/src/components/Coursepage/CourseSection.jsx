import React, { useRef, useEffect, useState } from 'react';
import CourseCard from './CourseCard';
import './Coursespage.css';

const CourseSection = ({ title, courses, direction }) => {
  const sectionRef = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`course-section section-reveal ${visible ? 'visible' : ''}`}
    >
      <div className="section-header">
        <h3>{title}</h3>
        <a href="#">View All</a>
      </div>
      <div className={`course-scroll ${direction === 'rtl' ? 'scroll-rtl' : 'scroll-ltr'}`}>
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CourseSection;