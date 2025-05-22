import React, { useState, useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import './Contact.css';

// Import Firestore functions
import { getFirestore, collection, addDoc } from 'firebase/firestore';
// Import your initialized Firebase app
import { initializeApp } from 'firebase/app';

// Your existing Firebase config (replace with your config if needed)
const firebaseConfig = {
  apiKey: "AIzaSyA3Ir-RwtHM-OG_jvWuQuV6Dnq6BNMrBQ0",
  authDomain: "myportfoliocontactform-ef550.firebaseapp.com",
  projectId: "myportfoliocontactform-ef550",
  storageBucket: "myportfoliocontactform-ef550.firebasestorage.app",
  messagingSenderId: "887789986106",
  appId: "1:887789986106:web:0b58620c69b4288f23b003",
  measurementId: "G-VDQ8GZFG2G"
};

// Initialize Firebase and Firestore (only once)
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(''); // to show success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Save form data to Firestore "contacts" collection
      await addDoc(collection(db, "contacts"), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date()
      });

      setSubmitted(true);
      setSubmitStatus("Thank you for reaching out! I will get back to you soon.");
      setFormData({ name: '', email: '', message: '' }); // clear form after submit
    } catch (error) {
      console.error("Error adding document: ", error);
      setSubmitStatus("Oops! Something went wrong. Please try again.");
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section className="contact-section">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#0f172a" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: { grab: { distance: 140, line_linked: { opacity: 1 } } },
          },
          particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.3, width: 1 },
            move: { direction: "none", enable: true, outModes: "bounce", speed: 1 },
            number: { value: 80, density: { enable: true, area: 800 } },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Have a project or just want to say hi? Send me a message!</p>

        {submitted ? (
          <div className="thank-you-message">
            <h3>{submitStatus}</h3>
          </div>
        ) : (
          <>
            <form onSubmit={handleSubmit} className="contact-form">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <button type="submit" className="btn-pink">Send Message</button>
            </form>
            {submitStatus && <p className="submit-status">{submitStatus}</p>}
          </>
        )}
      </div>
    </section>
  );
};

export default Contact;

