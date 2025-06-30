import React, { useState } from 'react';
import './UserTypes.css';

const UserTypes = () => {
  const [activeTab, setActiveTab] = useState('professors');

  const userTypes = {
    professors: {
      title: 'Para Profesores',
      icon: '👨‍🏫',
      subtitle: 'Herramientas avanzadas para simplificar la docencia',
      features: [
        {
          icon: '🤖',
          title: 'Evaluación Automatizada',
          description: 'Las entregas de los estudiantes son evaluadas automáticamente por IA en base a criterios personalizados.',
          benefits: ['Ahorro de tiempo', 'Evaluación consistente', 'Criterios personalizables']
        },
        {
          icon: '📊',
          title: 'Seguimiento del Progreso',
          description: 'Visualice el avance de sus estudiantes en tiempo real con métricas detalladas.',
          benefits: ['Análisis en tiempo real', 'Métricas detalladas', 'Identificación de dificultades']
        },
        {
          icon: '📋',
          title: 'Exportación de Calificaciones',
          description: 'Descargue informes detallados en formato CSV para su integración con sistemas académicos.',
          benefits: ['Formato estándar', 'Integración sencilla', 'Reportes completos']
        }
      ]
    },
    students: {
      title: 'Para Estudiantes',
      icon: '👨‍🎓',
      subtitle: 'Aprende programación con retroalimentación inteligente',
      features: [
        {
          icon: '📱',
          title: 'Entrega de Ejercicios',
          description: 'Suba sus soluciones en imágenes y reciba retroalimentación instantánea mediante OCR avanzado.',
          benefits: ['Proceso sencillo', 'Múltiples formatos', 'Feedback inmediato']
        },
        {
          icon: '💬',
          title: 'Retroalimentación Detallada',
          description: 'Reciba sugerencias específicas para mejorar su código, adaptadas a su nivel de aprendizaje.',
          benefits: ['Comentarios específicos', 'Evaluación a medida', 'Mejora continua']
        },
        {
          icon: '📈',
          title: 'Seguimiento Personal',
          description: 'Visualice su progreso y áreas de mejora con métricas personalizadas.',
          benefits: ['Progreso visual', 'Áreas de mejora', 'Motivación constante']
        },
      ]
    }
  };

  const currentUser = userTypes[activeTab];

  return (
    <section id="users" className="section user-types">
      <div className="container">
        <div className="user-types-header">
          <h2 className="section-title">Diseñado para Todos</h2>
          <p className="section-subtitle">
            EduCode facilita tanto la enseñanza como el aprendizaje de programación
          </p>
        </div>

        <div className="user-tabs">
          <button 
            className={`user-tab ${activeTab === 'professors' ? 'active' : ''}`}
            onClick={() => setActiveTab('professors')}
          >
            <span className="tab-icon">👨‍🏫</span>
            <span className="tab-text">Profesores</span>
          </button>
          <button 
            className={`user-tab ${activeTab === 'students' ? 'active' : ''}`}
            onClick={() => setActiveTab('students')}
          >
            <span className="tab-icon">👨‍🎓</span>
            <span className="tab-text">Estudiantes</span>
          </button>
        </div>

        <div className="user-content">
          <div className="user-header">
            <div className="user-icon">{currentUser.icon}</div>
            <div className="user-info">
              <h3 className="user-title">{currentUser.title}</h3>
              <p className="user-subtitle">{currentUser.subtitle}</p>
            </div>
          </div>

          <div className="user-features grid grid-2">
            {currentUser.features.map((feature, index) => (
              <div 
                key={index} 
                className={`user-feature-card card animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="user-feature-header">
                  <div className="user-feature-icon">{feature.icon}</div>
                  <h4 className="user-feature-title">{feature.title}</h4>
                </div>
                
                <p className="user-feature-description">{feature.description}</p>
                
                <div className="user-feature-benefits">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="benefit-item">
                      <span className="benefit-check">✓</span>
                      <span className="benefit-text">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="user-workflow">
          <h3 className="workflow-title">Flujo de Trabajo Simplificado</h3>
          <div className="workflow-steps">
            {activeTab === 'professors' ? (
              <>
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Crear actividad</h4>
                    <p>Configure su actividad con criterios de evaluación personalizados</p>
                  </div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Monitorear entregas</h4>
                    <p>La IA evalúa automáticamente las soluciones de los estudiantes</p>
                  </div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Revisar resultados</h4>
                    <p>Acceda a métricas detalladas y exporte calificaciones en formato CSV</p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="workflow-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Subir ejercicio</h4>
                    <p>Tome una foto de su código o suba una imagen</p>
                  </div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Procesamiento IA</h4>
                    <p>OCR digitaliza el código y la IA lo evalúa</p>
                  </div>
                </div>
                <div className="workflow-arrow">→</div>
                <div className="workflow-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Recibir feedback</h4>
                    <p>Obtenga retroalimentación detallada y sugerencias</p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserTypes; 