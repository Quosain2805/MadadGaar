import React from 'react';
import './Footer.css'; // Create a CSS file for the footer styles

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
        <h4>Contact us:</h4>
          <img src="/logo.png" alt="Positivus logo" className="footer-logo" />
          <p>Email: info@positivus.com</p>
          <p>Phone: 555-567-8901</p>
          <p>Address: 1234 Main St, Moonstone City, Stardust State 12345</p>
        </div>
        <div className="footer-right">
          <div className="subscribe">
            <input type="email" id="email" placeholder="Email" />
            <button className="btn-subscribe">Subscribe to news</button>
          </div>
        </div>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>

      <div className="footer-bottom">
        <p>© 2023 Positivus. All Rights Reserved. <a href="/privacy-policy">Privacy Policy</a></p>
      </div>
    </footer>
  );
};

export default Footer;