import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css'; 
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



const HeroSection = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 fixed-top">
        <a className="navbar-brand fw-bold text-primary" href="/">CampusHub</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav me-3">
            <li className="nav-item"><a className="nav-link nav-hover" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="/about">About</a></li>
            <li className="nav-item"><NavLink className="nav-link nav-hover" to="/courses" activeClassName="active-link">Courses</NavLink></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="/pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link nav-hover" href="/contact">Contact Us</a></li>
          </ul>
          <div>
           <Link className="btn btn-outline-primary me-2" to="/login">Login</Link>
          <Link className="btn btn-primary" to="/register">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="container-fluid hero-section py-5 px-4">
        <div className="row align-items-center">
          {/* Left Text */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h1 className="display-5 fw-bold text-primary">CampusHub Ambassador Program</h1>
            <p className=" class1 lead mt-3 text-dark">
              Become the voice of CampusHub at your College / University and lead the 
              digital transformation of Student life!<br />
              Embark on a rewarding journey to unlock your leadership potential, build your network and
              create a lasting impact on your Campus community.
            </p>
            <a href="/apply" className="btn btn-success apply-btn mt-3">Apply Now</a>
          </div>

          {/* Right Illustration */}
          <div className="col-md-6 text-center">
            <video src="./images/hero section.mp4" className="hero-video" autoPlay
              loop muted playsInline />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


