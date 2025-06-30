import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '🔍',
      title: 'Reconocimiento OCR Avanzado',
      description: 'Digitalización precisa de ejercicios escritos a mano utilizando tecnología de reconocimiento óptico de caracteres de última generación.',
      details: ['Múltiples modelos OCR evaluados', 'Precisión optimizada', 'Soporte para diferentes caligrafías']
    },
    {
      icon: '🤖',
      title: 'Evaluación por IA',
      description: 'Corrección automática inteligente mediante modelos de lenguaje especializados que comprenden el contexto y lógica del código.',
      details: ['Modelos LLM optimizados', 'Evaluación contextual', 'Criterios personalizables']
    },
    {
      icon: '⚡',
      title: 'Procesamiento en Tiempo Real',
      description: 'Evaluación instantánea que permite a los estudiantes recibir feedback inmediato sobre sus ejercicios.',
      details: ['Respuesta inmediata', 'Procesamiento eficiente', 'Escalabilidad garantizada']
    },
    {
      icon: '📊',
      title: 'Análisis de Progreso',
      description: 'Visualización del avance académico con métricas detalladas y reportes comprehensivos para profesores y estudiantes.',
      details: ['Métricas detalladas', 'Reportes automáticos', 'Exportación CSV']
    },
  ];

  return (
    <section id="features" className="section features">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Características Innovadoras</h2>
          <p className="section-subtitle">
            EduCode combina las últimas tecnologías de inteligencia artificial 
            con un diseño centrado en la experiencia educativa
          </p>
        </div>

        <div className="features-grid grid grid-3">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`feature-card card animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon-container">
                <span className="feature-icon-large">{feature.icon}</span>
              </div>
              
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="feature-detail">
                      <span className="detail-bullet">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="features-highlight">
          <div className="highlight-content">
            <div className="highlight-text">
              <h3 className="highlight-title">
                Modernización del entorno educativo
              </h3>
              <p className="highlight-description">
                EduCode busca contribuir a la modernización del entorno educativo, 
                automatizando procesos repetitivos y demostrando el potencial de la 
                inteligencia artificial como herramienta de apoyo al aprendizaje y la docencia.
              </p>
            </div>
            <div className="highlight-stats">
              <div className="stat-item">
                <div className="stat-number">2</div>
                <div className="stat-label">Etapas de Procesamiento</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Escalabilidad</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">AI</div>
                <div className="stat-label">Tecnología Avanzada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 