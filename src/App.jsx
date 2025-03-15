import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Navbar from './components/navbar';
import AutoPlayCarousel from './components/carousel';
import Background from './components/background';

import Social from './components/social';
import './App.css';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const socialRef = useRef(null);

  const scrollToSection = (section) => {
    const sectionRefs = {
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    };

    if (sectionRefs[section]?.current) {
      window.scrollTo({
        top: sectionRefs[section].current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className="app">
      <Background />
      <Navbar scrollToSection={scrollToSection} /> {}
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <AutoPlayCarousel />
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={socialRef}>
        <Social />
      </div>
    </main>
  );
}

export default App;
