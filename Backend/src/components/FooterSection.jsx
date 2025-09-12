import React from 'react';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <footer className="footer-wrapper">
      <div className="container py-5">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">About</h5>
            <p className="footer-text">
              CampusHub is the all-in-one student portal designed to empower your academic journey. We provide a
              centralized platform for course management, campus events, community connection and essential
              resources - helping you succeed from day one.
            </p>
          </div>

          {/* Pages */}
          <div className="col-md-2 mb-4">
            <h5 className="footer-title">Pages</h5>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/blogs">Courses</a></li>
              <li><a href="/verify">Verify Certificate</a></li>
              <li><a href="/affiliate">Courses Pricing</a></li>
            </ul>
          </div>

          {/* Documents */}
          <div className="col-md-2 mb-4">
            <h5 className="footer-title">Documents</h5>
            <ul className="footer-links">
              <li><a href="/terms">Terms of Use</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">
              Unit No. 608, 609 & 612, 6th Floor, DLF Galleria, New Town, Kolkata - 700156, West Bengal, India
            </p>
            <p><strong>Phone:</strong> <a href="tel:+918086263751">+91 8086263751</a></p>
            <p><strong>Email:</strong> <a href="mailto:support@1stop.ai">support@CampusHub.in</a></p>
            <div className="social-icons">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="icon insta">📸</a>
              <a href="https://t.me" target="_blank" rel="noreferrer" className="icon telegram">📨</a>
              <a href="https://wa.me/918086263751" target="_blank" rel="noreferrer" className="icon whatsapp">💬</a>
              <a href="mailto:support@1stop.ai" className="icon email">✉️</a>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="map-container mb-4">
          <iframe
            title="Kolkata Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.206896321956!2d88.412644!3d22.592819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b2c5e6e0a1%3A0x9f3f2e5f1e3e6e3e!2sKolkata!5e0!3m2!1sen!2sin!4v1660000000000"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom d-flex justify-content-between align-items-center pt-3">
          <span>CampusHub © 2024. All Rights Reserved.</span>
          <span>100% Safe and secure payments.</span>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;

