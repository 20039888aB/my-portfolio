import React from 'react';
import './DarkModeToggle.css';
import { FaMoon, FaSun } from 'react-icons/fa';

const DarkModeToggle = ({ darkMode, setDarkMode }) => {
  return (
    <div className="dark-toggle" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
    </div>
  );
};

export default DarkModeToggle;
