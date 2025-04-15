// src/components/TestimonialsSection.jsx

import React from 'react';
import Slider from 'react-slick';
import './TestimonialsSection.css';

const testimonials = [
  {
    name: 'Amina Suleiman',
    role: 'Product Designer',
    comment: 'This platform is a game-changer. I love the design, performance, and simplicity.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'John David',
    role: 'Frontend Developer',
    comment: 'An amazing experience. The site is intuitive and responsive on all devices.',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Fatima Aliyu',
    role: 'Tech Blogger',
    comment: 'Elegant, functional, and reliable. Everything you want in a modern site.',
    image: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
];

const TestimonialsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <section className="testimonials-section">
      <h3>What Our Users Say</h3>
      <Slider {...settings} className="testimonials-slider">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-slide" key={index}>
            <div className="testimonial-card">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img" />
              <p className="comment">“{testimonial.comment}”</p>
              <div className="testimonial-info">
                <p className="name">{testimonial.name}</p>
                <p className="role">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default TestimonialsSection;
