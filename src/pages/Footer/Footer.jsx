import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <h2>Little Break</h2>
          <p>Your perfect spot for great food and conversations since 2022.</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Near Palampur Bus Stand, 2nd Floor</p>
          <p>+91 9876543210</p>
          <p>littlebreak@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Little Break. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;