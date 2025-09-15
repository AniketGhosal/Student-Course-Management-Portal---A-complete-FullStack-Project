import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Auth.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      const { token, role, name } = res.data;
      localStorage.setItem('token', token);

      setUsername(name); // ✅ Store name for modal
      setShowModal(true); // ✅ Show modal after name is set

      setTimeout(() => {
        if (role?.toLowerCase() === 'admin') {
          navigate('/admin/dashboard');
        } else {
          navigate('/student/dashboard');
        }
      }, 3000);
    } catch (err) {
      alert('Login failed: ' + (err.response?.data?.message || 'Server error'));
    }
  };

  return (
    <div className="auth-container row g-0">
      {/* ✅ Modal Popup */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Thank You {username}!</h2>
            <p>You are successfully logged in.</p>
          </div>
        </div>
      )}

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



// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import './Auth.css';
// import LoginModal from './LoginModal'; // ✅ Import modal component

// const Login = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', {
//         email,
//         password,
//       });

//       const { token, role, name } = res.data;
//       localStorage.setItem('token', token);

//       setUsername(name); // ✅ Trigger modal by setting username

//       setTimeout(() => {
//         if (role?.toLowerCase() === 'admin') {
//           navigate('/admin/dashboard');
//         } else {
//           navigate('/student/dashboard');
//         }
//       }, 3000);
//     } catch (err) {
//       alert('Login failed: ' + (err.response?.data?.message || 'Server error'));
//     }
//   };

//   return (
//     <div className="auth-container row g-0">
//       {/* ✅ Modal Component */}
//       <LoginModal username={username} />

//       {/* Left Side with Image and Branding */}
//       <div className="col-md-6 auth-image-section d-none d-md-flex align-items-center justify-content-center">
//         <div className="overlay-text text-white text-center px-4">
//           <h2>
//             Start your career with <span className="brand">CampusHub</span>
//           </h2>
//           <p>Login using your registered email ID to continue.</p>
//         </div>
//       </div>

//       {/* Right Side with Form */}
//       <div className="col-md-6 d-flex align-items-center justify-content-center">
//         <form className="auth-form" onSubmit={handleLogin}>
//           <h3 className="form-title">Login</h3>

//           <div className="input-group">
//             <span className="input-icon">📧</span>
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div className="input-group">
//             <span className="input-icon">🔒</span>
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>

//           <div className="form-options">
//             <label>
//               <input type="checkbox" /> Remember me
//             </label>
//             <a href="/forgot" className="forgot-link">
//               Forgot Password?
//             </a>
//           </div>

//           <button type="submit" className="btn btn-primary w-100">
//             Submit
//           </button>

//           <p className="switch-link">
//             New here? <a href="/register">Sign Up</a>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;