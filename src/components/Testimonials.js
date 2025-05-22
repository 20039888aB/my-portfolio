import React, { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: "Jane Doe",
    text: "Felix is an exceptional developer. His work on our project was outstanding!",
  },
  {
    name: "John Smith",
    text: "Professional, efficient, and creative. Highly recommended!",
  },
  {
    name: "Emily Rose",
    text: "Felix brought our ideas to life with precision and flair.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);

  const delay = 5000; // 5 seconds

  useEffect(() => {
    timeoutRef.current = setTimeout(
      () => setCurrent((prev) => (prev + 1) % testimonials.length),
      delay
    );
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="milky-way-bg"></div>
      <div className="testimonials-content">
        <h2>What People Say About me </h2>
        <div className="testimonial-card">
          <div className="overlay"></div>
          <p>"{testimonials[current].text}"</p>
          <h4>- {testimonials[current].name}</h4>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
