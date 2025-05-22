// src/components/Skills.js
import React from 'react';
import './Skills.css';

const skills = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 85 },
  { name: 'JavaScript', percent: 80 },
  { name: 'React', percent: 78 },
  { name: 'Python', percent: 84 },
  { name: 'Django', percent: 82 },
  { name: 'Linux', percent: 76 },
  { name: 'Penetration Testing', percent: 73 },
  { name: 'System Administration', percent: 88 },
  { name: 'Defensive Maintenance', percent: 69 },
];

const Skills = () => {
  return (
    <div className="skills-section" id="skills">
      <div className="skills-content" data-aos="fade-right">
        <h2>My Skills</h2>
        <p>Hover on each skill to see my progress.</p>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index}>
              <div className="skill-item">
                {skill.name}
                <span className="tooltip">{skill.percent}%</span>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Skills;

