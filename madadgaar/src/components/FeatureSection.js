import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faCar, faDollarSign, faHeadset } from '@fortawesome/free-solid-svg-icons';
import '../App.css';  // Custom CSS file for styling

const FeatureSection = () => {
  return (
    <div className="feature-section">
      <div className="feature-item">
        <FontAwesomeIcon icon={faCheckSquare} size="3x" className="feature-icon" />
        <h3>Easy Payments</h3>
        <p>Our team will ensure payments are simple and secure.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faCar} size="3x" className="feature-icon" />
        <h3>Always on time</h3>
        <p>Our team will get the job done on time and within budget.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faDollarSign} size="3x" className="feature-icon" />
        <h3>Uniform Pricing</h3>
        <p>All our prices are transparent so you don't have to bargain.</p>
      </div>
      <div className="feature-item">
        <FontAwesomeIcon icon={faHeadset} size="3x" className="feature-icon" />
        <h3>Reliable Support</h3>
        <p>Our customer support team is available 24/7 to assist you with any inquiries or issues.</p>
      </div>
    </div>
  );
};

export default FeatureSection;