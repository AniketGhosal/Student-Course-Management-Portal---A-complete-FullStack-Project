const LoginModal = ({ username }) => {
  if (!username) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Thank You, {username}!</h2>
        <p>You are successfully logged in.</p>
      </div>
    </div>
  );
};

export default LoginModal; // ✅ Default export