import React from 'react';
import './Dashboard.css';
import './animations.css';

const DashboardHome = () => {
  return (
    <div className="dashboard-content fade-in">
      <h1 className="dashboard-header">Dashboard</h1>

      <h2 className="dashboard-heading">Your Weekly Progress</h2>

      <div className="dashboard-grid">
        {/* Left Column: Progress Tracking */}
        <div className="dashboard-progress">
          <div className="progress-item">
            <label>Web Development Back-End</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '59%' }}>59%</div>
            </div>
          </div>
          <div className="progress-item">
            <label>Web Development Front-End</label>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '61%' }}>61%</div>
            </div>
          </div>
        </div>

        {/* Right Column: User Guide */}
        <div className="dashboard-video">
          <h3>User Guide</h3>
          <iframe
            width="100%"
            height="200"
            src="https://www.youtube.com/embed/samplevideo"
            title="1STOP USER GUIDE VIDEO"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* Bottom Section: Announcements */}
      <div className="dashboard-announcements">
        <h3>Announcements</h3>
        <p>Welcome to CampusHub! Stay tuned for updates.</p>
      </div>
    </div>
  );
};

export default DashboardHome;

// import React from 'react';
// import './Dashboard.css';
// import './animations.css';

// const DashboardHome = ({ courses, videoLink, announcements }) => {
//   const handleDownload = (message) => {
//     const blob = new Blob([message], { type: 'application/pdf' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'announcement.pdf';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="dashboard-content fade-in">
//       <h2 className="dashboard-heading">Your Weekly Progress</h2>

//       <div className="dashboard-grid">
//         {/* Left Column: Dynamic Progress */}
//         <div className="dashboard-progress">
//           {courses.map((course, index) => (
//             <div className="progress-item" key={index}>
//               <label>{course.name}</label>
//               <div className="progress-bar">
//                 <div className="progress-fill" style={{ width: `${course.progress}%` }}>
//                   {course.progress}%
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Right Column: User Guide */}
//         <div className="dashboard-video">
//           <h3>User Guide</h3>
//           {videoLink ? (
//             <iframe
//               width="100%"
//               height="200"
//               src={videoLink}
//               title="User Guide"
//               frameBorder="0"
//               allowFullScreen
//             ></iframe>
//           ) : (
//             <p>Video unavailable</p>
//           )}
//         </div>
//       </div>

//       {/* Bottom Section: Announcements */}
//       <div className="dashboard-announcements">
//         <h3>Announcements</h3>
//         {announcements.map((msg, index) => (
//           <div key={index} className="announcement-item">
//             <p>{msg}</p>
//             <button onClick={() => handleDownload(msg)}>Download PDF</button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DashboardHome;