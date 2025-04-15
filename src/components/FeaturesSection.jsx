// src/components/FeaturesSection.jsx

import React from 'react';
import './FeaturesSection.css';

const features = [
  {
    icon: '⚡',
    title: 'Fast Performance',
    description: 'Optimized for blazing speed and seamless user experience across devices.',
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description: 'Your site will look amazing on smartphones, tablets, and desktops.',
  },
  {
    icon: '🧭',
    title: 'Easy Navigation',
    description: 'Intuitive and user-friendly layout helps visitors find things easily.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h3>What We Offer</h3>
      <div className="features-list">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
