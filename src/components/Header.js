import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        <nav className="nav">
          <div className="nav-brand">
            <img src="/logos/logo-educode.png" alt="EduCode.AI" className="nav-logo" />
            <span className="nav-brand-text">EduCode.AI</span>
          </div>
          
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('hero')}
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('features')}
              >
                Características
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('users')}
              >
                Usuarios
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('technology')}
              >
                Tecnología
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('documentation')}
              >
                Documentación
              </button>
            </li>
            <li>
              <button 
                className="nav-link"
                onClick={() => scrollToSection('about')}
              >
                Acerca de
              </button>
            </li>
          </ul>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header; 