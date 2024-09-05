import React from 'react';
import './App.css'; // Ensure you have this import for styling
import serviceImage from './serviceImage.png'; // Replace with the path to your image
import FeatureSection from './components/FeatureSection'; // Correct import path

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">Logo</div>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="content-left">
          <h1 className="main-heading">Connect with<br />Skilled<br />Professionals for<br />All Your Needs</h1>
          <p className="sub-heading">Find experts in IT, painting, cooking, tailoring, and more—right at your fingertips!</p>
          <button className="consultation-button">Book a Consultation</button>
        </div>
        <div className="content-right">
          <img src={serviceImage} alt="Service" className="service-image" />
        </div>
      </main>
      <FeatureSection /> {/* Correct placement of FeatureSection */}
    </div>
  );
}

export default App;
