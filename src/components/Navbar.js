// src/components/Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </div>

      <div className="hamburger" onClick={toggleMenu}>
        ☰
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
       

        {/* 🔹 Existing Links */}
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        <li><a href="#myinfo" onClick={toggleMenu}>My Info</a></li>
         {/* 🔹 New Links at the Top */}
        <li><a href="#testimonials" onClick={toggleMenu}>Testimonials</a></li>
        <li><a href="#resume" onClick={toggleMenu}>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
