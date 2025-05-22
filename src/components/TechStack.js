// src/components/TechStack.js
import React from 'react';
import './TechStack.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase } from 'react-icons/fa';

const TechStack = () => {
  return (
    <section className="techstack-section" id="techstack">
      <h2 className="section-title">Tech Stack</h2>
      <div className="tech-icons-container">
        <div className="tech-icon fade-in"><FaHtml5 title="HTML5" /></div>
        <div className="tech-icon fade-in"><FaCss3Alt title="CSS3" /></div>
        <div className="tech-icon fade-in"><FaJs title="JavaScript" /></div>
        <div className="tech-icon fade-in"><FaReact title="React" /></div>
        <div className="tech-icon fade-in"><FaNodeJs title="Node.js" /></div>
        <div className="tech-icon fade-in"><FaPython title="Python" /></div>
        <div className="tech-icon fade-in"><FaGitAlt title="Git" /></div>
        <div className="tech-icon fade-in"><FaDatabase title="Database" /></div>
      </div>
    </section>
  );
};

export default TechStack;
