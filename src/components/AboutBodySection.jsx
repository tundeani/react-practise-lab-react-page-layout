// src/components/AboutBodySection.jsx
import React from 'react';
import './AboutBodySection.css';

const AboutBodySection = () => {
  return (
    <section className="about-body">
      <div className="about-block">
        <h2>Our Mission & Vision</h2>
        <p>
          Our mission is to deliver impactful digital solutions that drive success.
          Our vision is to be a leading innovator in the tech industry, empowering individuals and organizations worldwide.
        </p>
      </div>

      <div className="about-block">
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate developers, designers, and strategists dedicated to crafting exceptional digital experiences.
          With years of industry experience, we specialize in delivering client-focused solutions.
        </p>
      </div>

      <div className="about-block">
        <h2>Our History</h2>
        <ul className="timeline">
          <li><strong>2018:</strong> Company was founded with a mission to innovate.</li>
          <li><strong>2020:</strong> Launched our first SaaS product, gaining nationwide traction.</li>
          <li><strong>2022:</strong> Expanded globally and added new enterprise services.</li>
          <li><strong>2024:</strong> Introduced AI-based tools and automation solutions.</li>
        </ul>
      </div>

      <div className="about-block">
        <h2>Why Choose Us</h2>
        <p>
          ✔️ Client-Centric Approach  
          <br />
          ✔️ Proven Track Record  
          <br />
          ✔️ Highly Skilled Professionals  
          <br />
          ✔️ Cutting-Edge Technologies  
        </p>
      </div>
    </section>
  );
};

export default AboutBodySection;