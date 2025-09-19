// import React from 'react';
// import { Routes, Route } from 'react-router-dom';
// import TopNavbar from './TopNavbar';
// import Sidebar from './Sidebar';
// import DashboardHome from './DashboardHome';
// import LMS from './LMS';
// import Projects from './Projects';
// import Certificate from './Certificate';
// import Referral from './Referral';

// const StudentDashboard = () => {
//   return (
//     <>
//       <TopNavbar />
//       <Sidebar />
//       <main className="dashboard-main">
//         <Routes>
//           <Route path="/student/dashboard" element={<DashboardHome />} />
//           <Route path="/student/lms" element={<LMS />} />
//           <Route path="/student/projects" element={<Projects />} />
//           <Route path="/student/certificate" element={<Certificate />} />
//           <Route path="/student/referral" element={<Referral />} />
//         </Routes>
//       </main>
//     </>
//   );
// };

// export default StudentDashboard;


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import Sidebar from './Sidebar';
import DashboardHome from './DashboardHome';
import LMS from './LMS';
import Projects from './Projects';
import Certificate from './Certificate';
import Referral from './Referral';
import './StudentDashboard.css';

const StudentDashboard = () => {
  return (
    <div className="student-dashboard-wrapper">
      <TopNavbar />
      <div className="student-dashboard-body">
        <Sidebar />
        <main className="dashboard-main">
          <Routes>
            <Route path="/student/dashboard" element={<DashboardHome />} />
            <Route path="/student/lms" element={<LMS />} />
            <Route path="/student/projects" element={<Projects />} />
            <Route path="/student/certificate" element={<Certificate />} />
            <Route path="/student/referral" element={<Referral />} />
            <Route path="*" element={<DashboardHome />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default StudentDashboard;