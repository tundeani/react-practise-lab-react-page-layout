import React from 'react';
import './NewsletterSignupSection.css';

const NewsletterSignupSection = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <h2>Stay Updated</h2>
        <p>Subscribe to our newsletter to receive the latest news, updates, and offers.</p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSignupSection;
