import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Trabajo de Fin de Grado</h2>
            
            <div className="academic-info">
              <div className="academic-logos">
                <div className="logo-container university-logo">
                  <img src="/logos/logo-uco.png" alt="Universidad de Córdoba" className="academic-logo" />
                  <span className="logo-label">Universidad de Córdoba</span>
                </div>
                <div className="logo-container project-logo">
                  <img src="/logos/logo-educode.png" alt="EduCode.AI" className="academic-logo" />
                  <span className="logo-label">EduCode.AI</span>
                </div>
              </div>
              
              <div className="academic-details">
                <div className="academic-detail">
                  <span className="detail-label">Carrera:</span>
                  <span className="detail-value">Ingeniería Informática</span>
                </div>
                <div className="academic-detail">
                  <span className="detail-label">Especialidad:</span>
                  <span className="detail-value">Ingeniería del Software</span>
                </div>
                <div className="academic-detail">
                  <span className="detail-label">Universidad:</span>
                  <span className="detail-value">Universidad de Córdoba (UCO)</span>
                </div>
                <div className="academic-detail">
                  <span className="detail-label">Nota:</span>
                  <span className="detail-value">10/10 (Matrícula de Honor)</span>
                </div>
                <div className="academic-detail">
                  <span className="detail-label">Repositorio:</span>
                  <a href="https://github.com/p82garpr/eduCode.AI" target="_blank" rel="noopener noreferrer" className="detail-link">
                    github.com/p82garpr/eduCode.AI
                  </a>
                </div>
              </div>
            </div>

            <div className="about-description">
              <p>
                <strong>EduCode.AI</strong> es un Trabajo de Fin de Grado que tiene como objetivo 
                el desarrollo de una aplicación móvil que aplica inteligencia artificial en el 
                ámbito educativo para facilitar el trabajo del profesorado y mejorar la 
                experiencia del alumnado.
              </p>
              
              <p>
                El proyecto combina el diseño de una aplicación móvil con la integración de 
                técnicas de visión artificial. En particular, se implementa un sistema en dos 
                etapas: una primera de reconocimiento óptico de caracteres (OCR) para 
                digitalizar ejercicios escritos, y una segunda basada en modelos de lenguaje 
                para corregir automáticamente las respuestas.
              </p>

              <p>
                Se han evaluado distintos modelos de OCR y LLM (Large Language Models), 
                seleccionando los más adecuados según criterios de precisión y eficiencia. 
                Asimismo, el sistema ha sido desarrollado con una arquitectura escalable, 
                haciendo uso de buenas prácticas de programación.
              </p>
            </div>

            <div className="project-goals">
              <h3 className="goals-title">Objetivos del Proyecto</h3>
              <div className="goals-grid">
                <div className="goal-item">
                  <div className="goal-icon">🎯</div>
                  <div className="goal-content">
                    <h4>Automatización</h4>
                    <p>Automatizar procesos repetitivos de evaluación</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">🚀</div>
                  <div className="goal-content">
                    <h4>Modernización</h4>
                    <p>Contribuir a la modernización del entorno educativo</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">🧠</div>
                  <div className="goal-content">
                    <h4>Demostración</h4>
                    <p>Demostrar el potencial de la IA en educación</p>
                  </div>
                </div>
                <div className="goal-item">
                  <div className="goal-icon">💡</div>
                  <div className="goal-content">
                    <h4>Innovación</h4>
                    <p>Crear herramientas innovadoras de apoyo docente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-container">
              <h3 className="stats-title">Especificaciones Técnicas</h3>
              
              <div className="stat-item">
                <div className="stat-label">Etapas de Procesamiento</div>
                <div className="stat-value">2</div>
                <div className="stat-description">OCR + LLM Evaluation</div>
              </div>

              <div className="stat-item">
                <div className="stat-label">Modelos OCR Evaluados</div>
                <div className="stat-value">4</div>
                <div className="stat-description">Qwen, Gemma, Azure</div>
              </div>

              <div className="stat-item">
                <div className="stat-label">Modelos LLM Integrados</div>
                <div className="stat-value">5+</div>
                <div className="stat-description">Gemini, GPT, Ollama</div>
              </div>
            </div>

            <div className="tech-features">
              <h4 className="features-subtitle">Características Técnicas</h4>
              <ul className="features-list">
                <li>✨ Sistema de dos etapas (OCR + LLM)</li>
                <li>🔧 Configuración flexible de modelos</li>
                <li>📱 Diseño móvil optimizado</li>
                <li>🔒 Sistema robusto de respaldos</li>
                <li>📊 Métricas detalladas de progreso</li>
                <li>🌐 API escalable con FastAPI</li>
                <li>🗄️ Base de datos PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>

      

        {/* Conclusion 
        <div className="about-conclusion">
          <div className="conclusion-content">
            <h3 className="conclusion-title">Conclusión</h3>
            <p className="conclusion-text">
              EduCode busca contribuir a la modernización del entorno educativo, 
              automatizando procesos repetitivos y demostrando el potencial de la 
              inteligencia artificial como herramienta de apoyo al aprendizaje y la docencia. 
              Este proyecto representa un paso hacia el futuro de la educación, 
              donde la tecnología y la pedagogía trabajan en armonía para crear 
              experiencias de aprendizaje más efectivas y personalizadas.
            </p>
          </div>
        </div>
        */}

        <div className="opensource-section">
          <div className="opensource-content">
            <h3 className="opensource-title">Proyecto Open Source</h3>
            <p className="opensource-description">
              El código completo de EduCode.AI está disponible públicamente en GitHub, 
              incluyendo tanto el frontend (Flutter) como el backend (FastAPI). 
            </p>
            <div className="github-info">
              <div className="github-icon">⭐</div>
              <div className="github-details">
                <h4>Acceso al Repositorio</h4>
                <a 
                  href="https://github.com/p82garpr/eduCode.AI" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="github-link"
                >
                  <span className="github-url">github.com/p82garpr/eduCode.AI</span>
                  <span className="external-icon">↗</span>
                </a>
                <p className="repo-description">
                  68 commits • Flutter + Python • Documentación completa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 