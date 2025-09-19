// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import HeroSection from './components/HeroSection';
// import CourseSection from './components/CoursesSection';
// import FeatureSection from './components/FeaturesSection';
// import GuidelineSection from './components/GuidelinesSection';
// import FooterSection from './components/FooterSection';
// import Login from './components/Auth/Login.jsx';
// import Register from './components/Auth/Register.jsx';
// import CoursesPage from './components/Coursepage/Coursespage';

// import PrivateRoute from './components/Auth/PrivateRoute';
// import AdminDashboard from './components/For_Backend_Interfaces/AdminDashboard';
// // import StudentDashboard from './components/For_Backend_Interfaces/StudentDashboard';
// import StudentDashboard from './components/For_Backend_Interfaces/StudentDashboard/StudentDashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={
//           <>
//             <HeroSection />
//             <CourseSection />
//             <FeatureSection />
//             <GuidelineSection />
//             <FooterSection />
//           </>
//         } />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/courses" element={<CoursesPage />} />

//         {/* Protected Routes */}
//         <Route path="/admin/dashboard" element={
//           <PrivateRoute allowedRole="admin">
//             <AdminDashboard />
//           </PrivateRoute>
//         } />
//         <Route path="/student/dashboard" element={
//           <PrivateRoute allowedRole="student">
//             <StudentDashboard />
//           </PrivateRoute>
//         } />

//       </Routes>
//     </Router>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Public Components
import HeroSection from './components/HeroSection';
import CourseSection from './components/CoursesSection';
import FeatureSection from './components/FeaturesSection';
import GuidelineSection from './components/GuidelinesSection';
import FooterSection from './components/FooterSection';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import CoursesPage from './components/Coursepage/Coursespage';

// Protected Routing
import PrivateRoute from './components/Auth/PrivateRoute';

// Dashboards
import AdminDashboard from './components/For_Backend_Interfaces/AdminDashboard';
import StudentDashboard from './components/For_Backend_Interfaces/StudentDashboard/StudentDashboard.jsx';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CourseSection />
              <FeatureSection />
              <GuidelineSection />
              <FooterSection />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CoursesPage />} />

        {/* Protected Routes */}
        {/* <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute allowedRole="admin">
              <AdminDashboard />
            </PrivateRoute>
          }
        /> */}
        {/* <Route
          path="/student/*"
          element={
            <PrivateRoute allowedRole="student">
              <StudentDashboard />
            </PrivateRoute>
          }
        /> */}
        <Route element={<PrivateRoute allowedRole="student" />}>
  <Route path="/student/*" element={<StudentDashboard />} />
</Route>

 <Route element={<PrivateRoute allowedRole="admin" />}>
  <Route path="/admin/*" element={<AdminDashboard />} />
</Route>

      </Routes>
    </Router>
  );
}

export default App;