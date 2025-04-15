import React, { useState } from 'react';
import './FAQSection.css';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer full-stack web development, Azure cloud solutions, and ongoing support services.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary but most websites take 2-4 weeks from planning to launch.',
  },
  {
    question: 'Do you provide after-launch support?',
    answer: 'Yes! We offer maintenance plans to ensure your site stays secure and up-to-date.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`faq-item ${openIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">{faq.question}</div>
            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
