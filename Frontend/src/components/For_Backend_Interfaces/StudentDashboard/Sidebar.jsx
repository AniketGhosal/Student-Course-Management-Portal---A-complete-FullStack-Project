// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import './Sidebar.css';

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <NavLink
//         to="/student/dashboard"
//         className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
//       >
//         🏠 Dashboard
//       </NavLink>
//       <NavLink
//         to="/student/lms"
//         className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
//       >
//         📚 LMS
//       </NavLink>
//       <NavLink
//         to="/student/projects"
//         className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
//       >
//         💼 Projects
//       </NavLink>
//       <NavLink
//         to="/student/certificate"
//         className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
//       >
//         🎓 Certificate
//       </NavLink>
//       <NavLink
//         to="/student/referral"
//         className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
//       >
//         🤝 Referral
//       </NavLink>
//     </div>
//   );
// };

// export default Sidebar;



import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <NavLink
        to="/student/dashboard"
        className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
      >
        🏠 Dashboard
      </NavLink>
      <NavLink
        to="/student/lms"
        className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
      >
        📚 LMS
      </NavLink>
      <NavLink
        to="/student/projects"
        className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
      >
        💼 Projects
      </NavLink>
      <NavLink
        to="/student/certificate"
        className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
      >
        🎓 Certificate
      </NavLink>
      <NavLink
        to="/student/referral"
        className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}
      >
        🤝 Referral
      </NavLink>
    </div>
  );
};

export default Sidebar;