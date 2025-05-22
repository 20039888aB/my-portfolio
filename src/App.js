// src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import MyInfo from './components/MyInfo';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Resume from './components/Resume';
import TechStack from './components/TechStack';
import DarkModeToggle from './components/DarkModeToggle';
import Login from './components/Login';
import Admin from './components/Admin';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null);
  const auth = getAuth();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [auth]);

  return (
    <Router>
      <div className={darkMode ? 'App dark-mode' : 'App'}>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <LandingPage />
              <About />
              <Projects />
              <Skills />
              <TechStack />
              <Testimonials />
              <Resume />
              <Contact />
              <MyInfo />
              <SocialLinks />
              <Footer />
            </>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={user ? <Admin /> : <Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

