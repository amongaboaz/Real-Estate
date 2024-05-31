import React from 'react';
import './Hero.css';
import Back_Image from '../Assets/background.jpg'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="card">
          <div className="card-image">
            <img src={Back_Image} alt="Property" />
          </div>
          <div className="card-text">
            <h1>Welcome to Realty Kai</h1>
            <p>Your dream home awaits</p>
            <a href="#listings" className="hero-button">View Listings</a>
          </div>
        </div>
      </div>
      <div className="hero-gradient"></div>
    </div>
  );
};

export default Hero;
