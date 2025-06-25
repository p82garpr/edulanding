import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Footer Top */}
        <div className="footer-top">
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <h3>EduCode.AI</h3>
              <div className="logo-accent"></div>
            </div>
            <p className="footer-description">
              Transformando la educación con inteligencia artificial. 
              Una solución innovadora para la corrección automática de 
              actividades educativas que revoluciona el proceso de aprendizaje.
            </p>
            <div className="footer-stats">
              <div className="stat-item">
                <span className="stat-number">95%</span>
                <span className="stat-label">Precisión</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">80%</span>
                <span className="stat-label">Tiempo Ahorrado</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Producto</h4>
            <ul className="footer-links">
              <li><a href="#features">Características</a></li>
              <li><a href="#technology">Tecnología</a></li>
              <li><a href="#users">Para Profesores</a></li>
              <li><a href="#users">Para Estudiantes</a></li>
              <li><a href="#about">Sobre el Proyecto</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Tecnología</h4>
            <ul className="footer-links">
              <li><a href="#tech">OCR Avanzado</a></li>
              <li><a href="#tech">Modelos de IA</a></li>
              <li><a href="#tech">Flutter Mobile</a></li>
              <li><a href="#tech">Backend Robusto</a></li>
              <li><a href="#tech">APIs RESTful</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Proyecto TFG</h4>
            <ul className="footer-links">
              <li><a href="#about">Metodología</a></li>
              <li><a href="#about">Objetivos</a></li>
              <li><a href="#about">Resultados</a></li>
              <li><a href="#about">Documentación</a></li>
              <li><a href="#about">Investigación</a></li>
            </ul>
          </div>

          <div className="footer-section footer-contact">
            <h4>Contacto</h4>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <span>contacto@educode.ai</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🎓</span>
                <span>Trabajo Fin de Grado</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🏫</span>
                <span>Universidad Tecnológica</span>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link github" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="social-link demo" aria-label="Demo">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p>&copy; {currentYear} EduCode.AI - Trabajo Fin de Grado</p>
            <p className="footer-subtitle">
              Desarrollado con 💙 usando React, Flutter e Inteligencia Artificial
            </p>
          </div>
          
          <div className="footer-bottom-right">
            <div className="footer-badges">
              <span className="tech-badge">React</span>
              <span className="tech-badge">Flutter</span>
              <span className="tech-badge">Python</span>
              <span className="tech-badge">AI/ML</span>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="footer-bg-element footer-bg-1"></div>
        <div className="footer-bg-element footer-bg-2"></div>
        <div className="footer-bg-element footer-bg-3"></div>
      </div>
    </footer>
  );
};

export default Footer; 