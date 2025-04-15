import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">We'd love to hear from you. Reach out to us via email or phone.</p>

        <div className="contact-details">
          <p><strong>Email:</strong> info@example.com</p>
          <p><strong>Phone:</strong> +234 700 000 0000</p>
        </div>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
