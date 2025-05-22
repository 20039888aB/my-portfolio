// src/components/Resume.js
import React from 'react';
import './Resume.css';

const resumeData = [
  {
    title: 'Bachelor of Science in Information Technology',
    institution: 'Machakos University',
    date: '2021 - Present',
    type: 'education',
    description: 'Specializing in System Development, Networking, and Security.',
  },
  {
    title: 'Software Engineer Intern',
    institution: 'IEBC Kenya',
    date: 'Jan 2025 - April 2025',
    type: 'experience',
    description: 'Developed a Django-based voter education and voting platform.',
  },
  {
    title: 'Freelance Web Developer',
    institution: 'Self-employed',
    date: '2022 - Present',
    type: 'experience',
    description: 'Built websites, web apps and portfolio systems for clients using React and Django.',
  },
];

const Resume = () => {
  return (
    <div className="resume-section" id="resume">
      <h2 className="resume-heading">My Timeline</h2>
      <div className="timeline">
        {resumeData.map((item, index) => (
          <div key={index} className={`timeline-item ${item.type}`}>
            <div className="timeline-dot">
              {item.type === 'education' ? '🎓' : '💼'}
            </div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <h4>{item.institution}</h4>
              <span className="timeline-date">{item.date}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <a
  href="/resume/felix-resume.pdf"
  download="Felix_Resume"
  className="download-resume-btn"
>
  📄 Download Resume
</a>
    </div>
  );
};

export default Resume;
