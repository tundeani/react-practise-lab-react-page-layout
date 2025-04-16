// src/pages/Services.jsx
import React from 'react';
import ServicesHeaderSection from '../components/ServicesHeaderSection';
import ServiceCardsSection from '../components/ServiceCardsSection';
import ServicesSectionBody from '../components/ServicesSectionBody';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <ServicesHeaderSection />
      <ServiceCardsSection />
      <ServicesSectionBody />
    </div>
  );
};

export default Services;
