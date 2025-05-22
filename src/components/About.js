// src/components/About.js
import React from 'react';
import './About.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import felixImage from '../assets/felix.jpg';  // import the image

const About = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  const particlesOptions = {
    background: {
      color: {
        value: "#000000",
      },
    },
    fullScreen: {
      enable: false,
    },
    particles: {
      number: {
        value: 80,
      },
      color: {
        value: "#00ffcc",
      },
      shape: {
        type: "char",
        character: {
          value: ["0", "1", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "$", "#", "if", "==", "return", "void", "const","nice","adrien",],
          font: "monospace",
          style: "",
          weight: "400",
        },
      },
      opacity: {
        value: 0.5,
      },
      size: {
        value: 12,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "bottom",
        straight: false,
        outMode: "out",
      },
    },
  };

  return (
    <div className="about-section">
      <Particles id="about-particles" init={particlesInit} options={particlesOptions} />
      <div className="about-content" data-aos="fade-up">
        <img src={felixImage} alt="Sir Felix" className="about-image" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm <strong>Sir Felix</strong>, a passionate software engineer and developer with experience in full-stack web development, system administration, and cybersecurity.
          </p>
          <p>
            I'm currently pursuing my degree in Information Technology at Machakos University. I love building modern, responsive web applications and solving real-world problems through code.
          </p>
          <p>
            I’ve completed several projects, including a Hospital Management System and an IEBC Voting Platform, and I’m always eager to learn and grow.
          </p>
          <p>
            Currently, I am learning penetration testing and how to make sure your system is secure and how to identify vulnerabilities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

