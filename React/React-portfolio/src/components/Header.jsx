import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ activeSection, scrollToSection, scrolled, sections }) => {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className={`fixed w-full z-50 py-4 transition-all duration-500 ${scrolled ? 'py-3 bg-black/80 backdrop-blur-lg' : 'py-4'}`}>
      <div className="container flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          AJ.
        </div>
        
        <nav className={`md:flex items-center gap-8 ${navOpen ? 'flex flex-col absolute top-full left-0 right-0 bg-gray-900 py-6 shadow-xl' : 'hidden'}`}>
          {sections.map((section) => (
            <button
              key={section}
              className={`px-4 py-2 rounded-lg transition-all font-medium ${
                activeSection === section 
                  ? 'bg-indigo-600 text-white' 
                  : 'text-gray-300 hover:text-white hover:bg-gray-800'
              }`}
              onClick={() => {
                scrollToSection(section);
                setNavOpen(false);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
        
        <button 
          className="md:hidden text-white text-2xl z-50"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;