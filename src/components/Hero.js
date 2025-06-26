import React from 'react';
import './Hero.css';

const Hero = () => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fadeInUp">
            <h1 className="hero-title">
              <span className="hero-title-main">EduCode.AI</span>
              <span className="hero-title-subtitle">
                Inteligencia Artificial aplicada a la educación
              </span>
            </h1>
            
            <p className="hero-description">
              Una aplicación móvil revolucionaria que utiliza inteligencia artificial 
              para la corrección automática de ejercicios de todo tipo, facilitando 
              el trabajo del profesorado y mejorando la experiencia de aprendizaje del alumnado.
            </p>

            <div className="hero-features-preview">
              <div className="feature-badge">
                <span className="feature-icon">🔍</span>
                <span>OCR</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">🤖</span>
                <span>LLM</span>
              </div>
              <div className="feature-badge">
                <span className="feature-icon">📱</span>
                <span>Evaluación automática</span>
              </div>
            </div>
            
            <div className="hero-actions">
              <button 
                className="btn btn-primary btn-large animate-pulse"
                onClick={scrollToFeatures}
              >
                Descubrir características
              </button>
              <button 
                className="btn btn-secondary btn-large animate-fadeInUp"
                onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              >
                Acerca del Proyecto
              </button>
            </div>
          </div>

          <div className="hero-visual animate-fadeInRight">
            <div className="hero-image-container">
              <div className="hero-image-placeholder">
                <div className="phone-mockup">
                  <div className="phone-screen">
                    <div className="app-header">
                      <div className="app-title">EduCode</div>
                      <div className="app-status"></div>
                    </div>
                    <div className="app-content">
                      <div className="code-block">
                        <div className="code-line"></div>
                        <div className="code-line short"></div>
                        <div className="code-line"></div>
                        <div className="code-line medium"></div>
                      </div>
                      <div className="evaluation-result">
                        <div className="result-icon">✓</div>
                        <div className="result-text">Evaluado con IA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-card ai-card">
                  <span className="card-icon">🧠</span>
                  <span className="card-text">LLM Evaluador</span>
                </div>
                <div className="floating-card ocr-card">
                  <span className="card-icon">📸</span>
                  <span className="card-text">Image to Text mediante OCR</span>
                </div>
                <div className="floating-card feedback-card">
                  <span className="card-icon">💬</span>
                  <span className="card-text">Feedback personalizado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 