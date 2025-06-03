import React, { useState, useEffect } from 'react';
import Header from './components/Header';


function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    'home', 'about', 'skills', 'projects', 'timeline', 'contact'
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header 
        activeSection={activeSection} 
        scrollToSection={scrollToSection} 
        scrolled={scrolled}
        sections={sections}
      />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      
      <footer className="py-8 text-center text-gray-400 text-sm">
        <div className="container">
          <p>© {new Date().getFullYear()} Alex Johnson. All rights reserved.</p>
          <p className="mt-2">Designed and built with React & Vite</p>
        </div>
      </footer>
    </div>
  );
}

export default App;