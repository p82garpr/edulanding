import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    {
      category: 'Reconocimiento OCR',
      icon: '👁️',
      description: 'Múltiples modelos de OCR evaluados para digitalización precisa',
      techs: [
        { name: 'Qwen 7B', type: 'LLM con visión', color: 'var(--blue-500)' },
        { name: 'Qwen 3B', type: 'LLM más compacto', color: 'var(--blue-600)' },
        { name: 'Gemma 3', type: 'LLM de Google', color: 'var(--blue-700)' },
        { name: 'Azure Computer Vision', type: 'OCR puro de Microsoft', color: 'var(--blue-800)' }
      ]
    },
    {
      category: 'Modelos de IA',
      icon: '🧠',
      description: 'Large Language Models para evaluación inteligente',
      techs: [
        { name: 'Google Gemini', type: 'LLM de Google gratis', color: 'var(--blue-500)' },
        { name: 'GPT', type: 'LLM de OpenAI de pago', color: 'var(--blue-600)' },
        { name: 'Ollama', type: 'Local deployment', color: 'var(--blue-700)' },
      ]
    },
    {
      category: 'Arquitectura',
      icon: '🏗️',
      description: 'Sistema escalable con buenas prácticas de programación',
      techs: [
        { name: 'Flutter', type: 'Frontend móvil', color: 'var(--blue-500)' },
        { name: 'FastAPI', type: 'Backend API', color: 'var(--blue-600)' },
        { name: 'PostgreSQL', type: 'Base de datos', color: 'var(--blue-700)' },
      ]
    }
  ];

  const aiModels = [
    {
      name: 'OCR Service',
      description: 'Servicio de reconocimiento óptico',
      values: ['qwen7b', 'qwen3b', 'gemma3', 'azure'],
      icon: '📸'
    },
    {
      name: 'Model IA',
      description: 'Motor de evaluación basado en LLMs',
      values: ['gemini', 'gpt', 'ollama'],
      icon: '🤖'
    },
    {
      name: 'Ollama Models',
      description: 'Modelos locales especializados, fácilmente extendibles',
      values: ['gemma3:12b', 'deepseek-coder-v2:latest'],
      icon: '💻'
    }
  ];

  return (
    <section id="technology" className="section tech-stack">
      <div className="container">
        <div className="tech-header">
          <h2 className="section-title">Tecnología Inteligente</h2>
          <p className="section-subtitle">
            EduCode utiliza las tecnologías más avanzadas de inteligencia artificial 
            para ofrecer una experiencia educativa superior
          </p>
        </div>

        <div className="tech-categories grid grid-3">
          {technologies.map((category, index) => (
            <div 
              key={index} 
              className={`tech-category-card card animate-fadeInUp`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="tech-category-header">
                <div className="tech-category-icon">{category.icon}</div>
                <h3 className="tech-category-title">{category.category}</h3>
                <p className="tech-category-description">{category.description}</p>
              </div>

              <div className="tech-list">
                {category.techs.map((tech, techIndex) => (
                  <div key={techIndex} className="tech-item">
                    <div 
                      className="tech-indicator"
                      style={{ backgroundColor: tech.color }}
                    ></div>
                    <div className="tech-info">
                      <div className="tech-name">{tech.name}</div>
                      <div className="tech-type">{tech.type}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="ai-configuration">
          <h3 className="config-title">Configuración de IA</h3>
          <p className="config-subtitle">
            Sistema flexible que permite configurar diferentes modelos según las necesidades
          </p>

          <div className="ai-models grid grid-3">
            {aiModels.map((model, index) => (
              <div 
                key={index} 
                className={`ai-model-card animate-fadeInUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="ai-model-header">
                  <span className="ai-model-icon">{model.icon}</span>
                  <h4 className="ai-model-name">{model.name}</h4>
                </div>
                <p className="ai-model-description">{model.description}</p>
                <div className="ai-model-values">
                  {model.values.map((value, valueIndex) => (
                    <span key={valueIndex} className="ai-value-tag">
                      {value}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Backend Modular Architecture */}
        <div className="backend-architecture">
          <div className="architecture-content">
            <h3 className="architecture-title">Arquitectura Modular del Backend</h3>
            <p className="architecture-subtitle">
              Diseño escalable que separa las operaciones básicas de las funcionalidades de IA 
              para optimizar recursos y permitir flexibilidad en el despliegue
            </p>

            <div className="architecture-diagram">
              <div className="api-modules grid grid-2">
                <div className="api-module basic-api">
                  <div className="module-header">
                    <div className="module-icon">🔧</div>
                    <h4 className="module-title">API Básica</h4>
                    <span className="module-badge lightweight">Ligera</span>
                  </div>
                  <div className="module-content">
                    <p className="module-description">
                      Gestiona las operaciones fundamentales del sistema con pocos recursos
                    </p>
                    <ul className="module-features">
                      <li>✓ Autenticación de usuarios</li>
                      <li>✓ Gestión de asignaturas</li>
                      <li>✓ Base de datos PostgreSQL</li>
                      <li>✓ Manejo de sesiones</li>
                      <li>✓ Endpoints REST básicos</li>
                    </ul>
                  </div>
                </div>

                <div className="api-module ai-api">
                  <div className="module-header">
                    <div className="module-icon">🤖</div>
                    <h4 className="module-title">API de IA</h4>
                    <span className="module-badge advanced">Avanzada</span>
                  </div>
                  <div className="module-content">
                    <p className="module-description">
                      Procesa las tareas de inteligencia artificial de forma independiente
                    </p>
                    <ul className="module-features">
                      <li>✓ Procesamiento OCR</li>
                      <li>✓ Evaluación con LLMs</li>
                      <li>✓ Modelos locales (Ollama)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="architecture-benefits">
                <h4 className="benefits-subtitle">Ventajas de la Arquitectura Modular</h4>
                <div className="benefits-list grid grid-3">
                  <div className="benefit-card">
                    <div className="benefit-icon">💡</div>
                    <h5>Escalabilidad Inteligente</h5>
                    <p>Permite escalar solo el módulo de IA cuando hay mayor demanda de procesamiento</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">⚖️</div>
                    <h5>Distribución de Carga</h5>
                    <p>Alivia la carga del backend principal manteniendo las operaciones básicas ágiles</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🔄</div>
                    <h5>Flexibilidad de Despliegue</h5>
                    <p>Opción de usar modelos locales o APIs externas según los recursos disponibles</p>
                  </div>
                </div>
              </div>

              <div className="deployment-options">
                <h4 className="deployment-title">Opciones de Despliegue</h4>
                <div className="deployment-scenarios">
                  <div className="scenario low-resources">
                    <div className="scenario-header">
                      <span className="scenario-icon">📱</span>
                      <h5>Recursos Limitados</h5>
                    </div>
                    <div className="scenario-content">
                      <p><strong>API Básica</strong> + <strong>APIs Externas</strong></p>
                      <ul>
                        <li>• ChatGPT / Gemini para evaluación</li>
                        <li>• Azure OCR para reconocimiento</li>
                        <li>• Mínimos recursos del servidor</li>
                        <li>• Arranque rápido del sistema</li>
                      </ul>
                    </div>
                  </div>

                  <div className="scenario high-resources">
                    <div className="scenario-header">
                      <span className="scenario-icon">🖥️</span>
                      <h5>Recursos Abundantes</h5>
                    </div>
                    <div className="scenario-content">
                      <p><strong>API Básica</strong> + <strong>API IA Local</strong></p>
                      <ul>
                        <li>• Modelos Ollama en servidor</li>
                        <li>• Procesamiento local completo</li>
                        <li>• Mayor control y privacidad</li>
                        <li>• Independencia de servicios externos</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tech-workflow">
          <h3 className="workflow-tech-title">Flujo de Procesamiento</h3>
          <div className="processing-flow">
            <div className="flow-step">
              <div className="flow-icon">📱</div>
              <h4>Captura</h4>
              <p>El estudiante sube una imagen del ejercicio</p>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-icon">👁️</div>
              <h4>OCR</h4>
              <p>Reconocimiento óptico digitaliza el código</p>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-icon">🧠</div>
              <h4>IA Evaluation</h4>
              <p>LLM analiza y evalúa la solución</p>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-icon">💬</div>
              <h4>Feedback</h4>
              <p>Retroalimentación inteligente generada</p>
            </div>
            
            <div className="flow-arrow">→</div>
            
            <div className="flow-step">
              <div className="flow-icon">📊</div>
              <h4>Análisis</h4>
              <p>Métricas y progreso actualizado</p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
};

export default TechStack; 