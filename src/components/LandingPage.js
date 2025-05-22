import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import './LandingPage.css';
import { motion } from 'framer-motion';
const LandingPage = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="landing-container">
      <motion.div
  className="about-section"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
></motion.div>
      <div className="overlay">
        <div className="heading">
          <TypeAnimation
            sequence={[
              'Hi, I’m Sir Felix.', 2000,
              'A Full-Stack Developer.', 2000,
              'Cybersecurity Enthusiast.', 2000,
              'A hard working individual with multiple projects developed and tested.', 2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </div>

        <button className="btn-pink" onClick={scrollToAbout}>
          Explore More
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
