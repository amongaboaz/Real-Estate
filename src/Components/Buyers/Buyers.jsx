import React from 'react';
import './Buyers.css';

const Buyers = () => {
  return (
    <div className="buyers">
      <div className="buyers-container">
        <h1>For Buyers</h1>
        <p>Discover your dream home with Realty Boris. Whether you're looking for a cozy cottage in the countryside or a modern apartment in the city, we have the perfect property for you.</p>
        <div className="buyers-info">
          <div className="info-item">
            <i className="fas fa-home"></i>
            <h2>Find Your Home</h2>
            <p>Explore our listings to find the perfect property for you.</p>
          </div>
          <div className="info-item">
            <i className="fas fa-check"></i>
            <h2>Expert Guidance</h2>
            <p>Our team of experienced agents will guide you through the buying process.</p>
          </div>
          <div className="info-item">
            <i className="fas fa-dollar-sign"></i>
            <h2>Competitive Pricing</h2>
            <p>We offer competitive pricing on all our properties.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buyers;
