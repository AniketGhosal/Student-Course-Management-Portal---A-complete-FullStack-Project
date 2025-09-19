// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Dashboard.css';

// const TopNavbar = () => {
//   return (
//     <div className="dashboard-navbar">
//       <div className="dashboard-navbar-logo">CampusHub</div>
//       <div className="dashboard-navbar-links">
//         <NavLink to="/courses" className="dashboard-navbar-link">Courses</NavLink>
//         <NavLink to="/contact" className="dashboard-navbar-link">Contact Us</NavLink>
//         <div className="dashboard-navbar-profile-dropdown">
//           <img
//             src="./images/profile"
//             alt="Profile"
//             className="dashboard-navbar-profile-icon"
//           />
//           <div className="dashboard-navbar-dropdown-content">
//             <NavLink to="/update-profile" className="dashboard-navbar-dropdown-link">Update Profile</NavLink>
//             <NavLink to="/change-password" className="dashboard-navbar-dropdown-link">Change Password</NavLink>
//             <NavLink to="/logout" className="dashboard-navbar-dropdown-link">Log out</NavLink>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopNavbar;


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Dashboard.css';

const TopNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="dashboard-navbar">
      <div className="dashboard-navbar-logo">CampusHub</div>
      <div className="dashboard-navbar-links">
        <NavLink to="/courses" className="dashboard-navbar-link">Courses</NavLink>
        <NavLink to="/contact" className="dashboard-navbar-link">Contact Us</NavLink>
        <div className="dashboard-navbar-profile-dropdown">
          <img src="public/images/profile_1.png"  alt="Profile" className="dashboard-navbar-profile-icon"
          onClick={toggleDropdown} />
          {dropdownOpen && (
            <div className="dashboard-navbar-dropdown-content">
              <NavLink to="/update-profile" className="dashboard-navbar-dropdown-link">Update Profile</NavLink>
              <NavLink to="/change-password" className="dashboard-navbar-dropdown-link">Change Password</NavLink>
              <NavLink to="/logout" className="dashboard-navbar-dropdown-link">Log out</NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;