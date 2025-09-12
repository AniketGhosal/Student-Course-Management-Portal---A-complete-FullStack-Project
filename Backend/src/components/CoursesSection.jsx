import React from 'react';
import './CoursesSection.css';
import { NavLink } from 'react-router-dom';

const courses = [
  {
    title: 'Strategic Management',
    description: 'This course provides the frameworks and tools to analyze industries and competitors, business strategies, and implement them successfully to achieve a sustainable competitive advantage and long-term organizational goals.',
    image: './images/Strategic-Management-course.jpg',
  },
  {
    title: 'Data Science Fundamentals',
    description: 'Learn to process, analyze, and visualize data to extract meaningful insights. This course covers essential programming, statistical methods, and an introduction to machine learning algorithms to build predictive models from raw data.',
    image: './images/data science.jpg',
  },
  {
    title: 'Digital Photography',
    description: 'Master your camera, manual settings and the artistic principles of composition and lighting. Learn to shoot in various conditions and use post-processing software to professionally enhance your digital images.',
    image: './images/digital photography.webp',
  },
  {
    title: 'Nutrition and Wellness',
    description: 'Discover the fundamental principles of nutrition and learn how to make informed dietary choices to support overall health, boost energy levels, and promote long-term well-being.',
    image: './images/nutrition.webp',
  },
  {
    title: 'Web Development',
    description: 'This course covers structuring content with HTML, styling with CSS, and adding dynamic functionality with JavaScript. You will then learn to build efficient, component-based user interfaces using the popular React library.',
    image: './images/web development.webp',
  },
  {
    title: 'Cybersecurity Basics',
    description: 'Gain essential knowledge to identify common digital threats, vulnerabilities, and attacks, and learn the foundational practices and tools used to protect networks, systems, and sensitive data.',
    image: './images/cyber security.jpg',
  },
];

const CoursesSection = () => {
  return (
    <div className="courses-wrapper py-5 px-4">
      <h2 className="text-center fw-bold mb-5 text-primary">
        What kind of Courses are you looking for?
      </h2>
      <div className="container">
        <div className="row">
          {courses.map((course, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="course-card">
                <img src={course.image} alt={course.title} className="course-image" />
                <div className="course-body">
                  <h5 className="course-title">{course.title}</h5>
                  <p className="course-description">{course.description}</p>
                  <div className="text-center">
                    <button className="btn btn-primary enroll-btn">Enroll</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-4">
          <button className="btn btn-outline-success explore-btn"><NavLink className="nav-link nav-hover-course" to="/courses" activeClassName="active-link">Explore More Courses</NavLink></button>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
