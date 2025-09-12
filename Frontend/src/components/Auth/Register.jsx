import React, { useState } from 'react';
import './Auth.css';


const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

//  const handleRegister = (e) => {
//   e.preventDefault();
//   console.log("Register submitted");
//   // Later: send form data to backend
// };
const handleRegister = async (e) => {
  e.preventDefault();
  console.log("Register submitted");

  try {
    const response = await fetch('http://localhost:5000/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await response.json();
    console.log("Registration response:", data);

    // Optional: redirect or show success message
    // navigate('/login'); or alert("Registration successful!");
  } catch (error) {
    console.error("Registration failed:", error);
  }
};

  return (
    <div className="auth-container row g-0">
      {/* Left Side with Image */}
      <div className="col-md-6 auth-image-section d-none d-md-flex align-items-center justify-content-center">
        <div className="overlay-text text-white text-center px-4">
          <h2>Join <span className="brand">CampusHub</span> and grow your skills</h2>
          <p>Sign up to access exclusive courses and career tools.</p>
        </div>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <form className="auth-form" onSubmit={handleRegister}>
          <h3 className="form-title">Sign Up</h3>
          <div className="input-group">
            <span className="input-icon">👤</span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Sign Up</button>
          <p className="switch-link">Already have an account? <a href="/login">Login</a></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
