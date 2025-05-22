// src/components/Projects.js
import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

const projects = [
  {
    title: 'Hospital Management System',
    description: 'A full-stack web app for managing patient records and billing.',
    techStack: ['Django', 'Bootstrap', 'PostgreSQL'],
    image: '/images/hospital.png',
    link: 'https://hosttest1.netlify.app/'
  },
  {
    title: 'IEBC Voting Platform',
    description: 'A secure and dynamic online voting system.',
    techStack: ['Django', 'JavaScript', 'PostgreSQL'],
    image: '/images/iebc.png',
    link: '#'
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio to showcase my skills and work.',
    techStack: ['React', 'Framer Motion', 'CSS'],
    image: '/images/portfolio.png',
    link: '#'
  }
];

const Projects = () => {
  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  return (
    <section className="projects-section" id="projects">
      <Particles
        init={particlesInit}
        className="particles-bg"
        options={{
          fullScreen: false,
          background: { color: { value: "#0a0a0a" } },
          particles: {
            number: { value: 40 },
            shape: { type: "square" },
            size: { value: 4 },
            color: { value: "#00ffcc" },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#00ffcc", distance: 130 }
          }
        }}
      />

      <h2>My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.techStack.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn-pink">View Project</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

