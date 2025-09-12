import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div className="container-fluid">
        {/* <a className="navbar-brand brand-name" href="#">
          <span className="brand-highlight">S</span>top
        </a> */}

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 nav-links">
            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="/courses">Courses</a></li>
            <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
            <li className="nav-item"><a className="nav-link" href="/contact">Contact Us</a></li>
          </ul>

          <div className="d-flex">
            <button className="btn login-btn">Login</button>
            <button className="btn signup-btn">Sign Up</button>
          </div>
        </div>
      </div>
    </nav>
  
  
  );
};

export default Header;
