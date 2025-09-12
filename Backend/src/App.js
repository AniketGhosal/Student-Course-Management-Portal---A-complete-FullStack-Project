import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import CourseSection from './components/CoursesSection';
import FeatureSection from './components/FeaturesSection';
import GuidelineSection from './components/GuidelinesSection';
import FooterSection from './components/FooterSection';
import Login from './components/Auth/Login.jsx';
import Register from './components/Auth/Register.jsx';
import CoursesPage from './components/Coursepage/Coursespage';

import PrivateRoute from './components/Auth/PrivateRoute';
import AdminDashboard from './components/For_Backend_Interfaces/AdminDashboard';
import StudentDashboard from './components/For_Backend_Interfaces/StudentDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection />
            <CourseSection />
            <FeatureSection />
            <GuidelineSection />
            <FooterSection />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/courses" element={<CoursesPage />} />

        {/* Protected Routes */}
        <Route path="/admin/dashboard" element={
          <PrivateRoute allowedRole="admin">
            <AdminDashboard />
          </PrivateRoute>
        } />
        <Route path="/student/dashboard" element={
          <PrivateRoute allowedRole="student">
            <StudentDashboard />
          </PrivateRoute>
        } />

      </Routes>
    </Router>
  );
}

export default App;
