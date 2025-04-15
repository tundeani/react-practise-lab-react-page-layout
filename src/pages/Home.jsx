import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ServicesListSection from '../components/ServicesListSection';
import FAQSection from '../components/FAQSection';
import NewsletterSignupSection from '../components/NewsletterSignupSection';
import './Home.css';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ServicesListSection />
      <FAQSection />
      <NewsletterSignupSection />
      {/* Add more home sections below if needed */}
    </main>
  );
};

export default Home;
