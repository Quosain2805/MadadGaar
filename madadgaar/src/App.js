import React from 'react';
import './App.css'; // Ensure you have this import for styling
import serviceImage from './serviceImage.png'; // Replace with the path to your image
import FeatureSection from './components/FeatureSection'; // Correct import path
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import ServicesPage from './components/ServicesPage'; // Ensure ServicesPage is included
import Footer from './components/Footer';  // Ensure 'Footer' matches the filename exactly
import ReviewCarousel from './components/ReviewCarousel';
import Header from './components/Header';
import CombinedSection from './components/CombinedSection';
import BlogList from './components/BlogList';

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <header className="App-header">
        <nav className="navbar">
          <div className="logo">MadadGaar</div>
          <ul className="nav-links">
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </nav>
      </header>

      {/* Main Content Section */}
      <main className="main-content">
        <div className="content-left">
          <h1 className="main-heading">
            Connect with<br />
            Skilled<br />
            Professionals for<br />
            All Your Needs
          </h1>
          <p className="sub-heading">
            Find experts in IT, painting, cooking, tailoring, and more—right at your fingertips!
          </p>
          <button className="consultation-button">Book a Consultation</button>
        </div>
        <div className="service-image">
          <img src={serviceImage} alt="Service" />
        </div>
      </main>

      {/* Feature Section */}
      <FeatureSection />

      {/* About Us Section */}
      <section id="about">
        <AboutUs />
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesPage />
      </section>

      <section id='Blog'>
      <BlogList/>
      </section>
    

    <Header/>
    <CombinedSection/>

      {/* Review Carousel Section */}
      <h2>What Our Clients Say</h2>
      <ReviewCarousel />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;