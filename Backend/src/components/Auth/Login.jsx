import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, role } = res.data;

      // ✅ Store token
      localStorage.setItem('token', token);


      console.log('Logged in role:', role); // Debugging
      
      // ✅ Redirect based on role
     if (role?.toLowerCase() === 'admin') {
        navigate('/admin/dashboard');
      } else {
        navigate('/student/dashboard');
      }
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  return (
    <div className="auth-container row g-0">
      {/* Left Side with Image and Branding */}
      <div className="col-md-6 auth-image-section d-none d-md-flex align-items-center justify-content-center">
        <div className="overlay-text text-white text-center px-4">
          <h2>
            Start your career with <span className="brand">CampusHub</span>
          </h2>
          <p>Login using your registered email ID to continue.</p>
        </div>
      </div>

      {/* Right Side with Form */}
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <form className="auth-form" onSubmit={handleLogin}>
          <h3 className="form-title">Login</h3>

          <div className="input-group">
            <span className="input-icon">📧</span>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <span className="input-icon">🔒</span>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="/forgot" className="forgot-link">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Submit
          </button>

          <p className="switch-link">
            New here? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;