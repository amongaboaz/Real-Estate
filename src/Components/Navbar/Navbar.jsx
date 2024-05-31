import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">Realty Kai</a>
        </div>
        <nav className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home">PROPERTIES</a></li>
            <li><a href="#listings">LAND</a></li>
            <li><a href="#about">MEDIA</a></li>
            <li><a href="#blog">BUYERS</a></li>
            <li><a href="#contact">SELLERS</a></li>
            <li><a href="#contact">ABOUT US</a></li>
            <li><a href="#contact">CONTACT US</a></li>
            

          </ul>
        </nav>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span className="navbar-toggle-icon"></span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
