import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Coursespage.css'; 
import { NavLink, Link } from 'react-router-dom';

const CoursesHeader = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top">
      <NavLink className="navbar-brand fw-bold text-primary" to="/">CampusHub</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav me-3">
          <li className="nav-item">
            <NavLink className="nav-link nav-hover" to="/" end>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-hover" to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-hover active-link" to="/courses">Courses</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-hover" to="/pricing">Pricing</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-hover" to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <div>
          <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
          <Link className="btn btn-primary" to="/register">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default CoursesHeader;
