import React from 'react';
import './ServicesListSection.css';
import { FaLaptopCode, FaCloud } from 'react-icons/fa';


const services = [
  {
    icon: <FaLaptopCode className="service-icon" />,
    title: 'Full Stack Web App Development',
    description:
      'Building dynamic, scalable, and secure web applications using modern technologies like React, Node.js, Express, and MongoDB with clean UI and backend logic.',
  },
  {
    icon: <FaCloud className="service-icon" />,
    title: 'Azure Cloud Administration',
    description:
      'Managing and deploying cloud infrastructure using Microsoft Azure. Skilled in Azure Active Directory, VM provisioning, storage, networking, and automation tools.',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing support to keep your site secure and updated, including performance monitoring, bug fixes, and regular backups.',
    icon: '🔧',
  },
];

const ServicesListSection = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesListSection;
