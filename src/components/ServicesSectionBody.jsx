// src/components/ServicesSectionBody.jsx
import React from 'react';
import './ServicesSectionBody.css';

const HowWeWorkSection = () => {
  return (
    <section className="how-we-work">
      <h2>How We Work</h2>
      <div className="work-steps">
        <div className="step">
          <h3>1. Consultation</h3>
          <p>We understand your goals and challenges to tailor the perfect solution.</p>
        </div>
        <div className="step">
          <h3>2. Strategy</h3>
          <p>We create a customized plan that aligns with your objectives and budget.</p>
        </div>
        <div className="step">
          <h3>3. Execution</h3>
          <p>We build and implement using modern tools and practices for best results.</p>
        </div>
        <div className="step">
          <h3>4. Support</h3>
          <p>We stay with you, offering ongoing maintenance and support post-launch.</p>
        </div>
      </div>
    </section>
  );
};

const WhyOurServicesSection = () => {
  return (
    <section className="why-our-services">
      <h2>Why Choose Our Services?</h2>
      <ul>
        <li>Proven expertise with years of experience</li>
        <li>Customer-first approach with tailor-made solutions</li>
        <li>Affordable pricing with top-notch results</li>
        <li>Excellent support and transparent communication</li>
      </ul>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="cta-section">
      <h2>Ready to Get Started?</h2>
      <p>Let’s work together to bring your vision to life. Reach out to us today!</p>
      <a href="/contact" className="cta-button">Contact Us</a>
    </section>
  );
};

const ServicesSectionBody = () => {
  return (
    <div className="services-body">
      <HowWeWorkSection />
      <WhyOurServicesSection />
      <CTASection />
    </div>
  );
};

export default ServicesSectionBody;
