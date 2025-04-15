// src/components/HeroSection.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to My React Site</h1>
        <p>Your gateway to a clean, modern, and modular web experience.</p>
        <Link to="/about" className="cta-button">Learn More</Link>
      </div>
    </section>
  );
};

export default HeroSection;
