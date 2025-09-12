// import { Navigate } from 'react-router-dom';
// import jwtDecode from 'jwt-decode';

// const PrivateRoute = ({ children, allowedRole }) => {
//   const token = localStorage.getItem('token');
//   if (!token) return <Navigate to="/login" />;

//   const { role } = jwtDecode(token);
//   return role === allowedRole ? children : <Navigate to="/unauthorized" />;
// };

// export default PrivateRoute;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 

const PrivateRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem('token');
  if (!token) return <Navigate to="/login" />;

  try {
    const { role } = jwtDecode(token);
    return role === allowedRole ? children : <Navigate to="/unauthorized" />;
  } catch (err) {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;