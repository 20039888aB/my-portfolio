// src/components/MyInfo.js
import React from 'react';
import './MyInfo.css';

const MyInfo = () => {
  return (
    <section className="myinfo-section" id="myinfo">
      <h2>My Info</h2>
      <div className="myinfo-content">
        <p>
          Hello! I’m <strong>Sir Felix</strong>, a passionate software engineer specializing in full-stack web development, cybersecurity, and system administration.
        </p>
        <p>
          I’m currently pursuing my degree in Information Technology at Machakos University and have experience building real-world applications like Hospital Management and Voting systems.
        </p>
        <p>
          I’m actively learning penetration testing and ways to secure systems by identifying vulnerabilities and applying best practices.
        </p>
        <p>
          My Full Name is <br></br><strong>Felix Mngola Onyango</strong><br></br> my email address is <br></br>fmngolaonyango@gmail.com <strong><br></br>phone number is <br></br></strong>0713423945/0115138594
        </p>
      </div>
    </section>
  );
};

export default MyInfo;
