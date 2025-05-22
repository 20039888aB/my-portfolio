// src/components/SocialLinks.js
import React from 'react';
import './SocialLinks.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
  faTelegramPlane
} from '@fortawesome/free-brands-svg-icons';

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a
        href="https://wa.me/254115138594" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
      <a
        href="https://www.linkedin.com/in/your-profile" // Replace with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>
      <a
        href="https://www.facebook.com/felixmngola.onyango" // Replace with your Facebook URL
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a
        href="https://t.me/your_username" // Replace with your Telegram username
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTelegramPlane} />
      </a>
    </div>
  );
};

export default SocialLinks;
