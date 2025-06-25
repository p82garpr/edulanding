import React from 'react';
import './TechStack.css';

const TechStack = () => {
  const technologies = [
    {
      category: 'Reconocimiento OCR',
      icon: '👁️',
      description: 'Múltiples modelos de OCR evaluados para digitalización precisa',
      techs: [
        { name: 'Qwen 7B', type: 'LLM con OCR', color: 'var(--blue-500)' },
        { name: 'Qwen 3B', type: 'Modelo compacto', color: 'var(--blue-600)' },
        { name: 'Gemma 3', type: 'IA especializada', color: 'var(--blue-700)' },
        { name: 'Azure Computer Vision', type: 'OCR empresarial', color: 'var(--blue-800)' }
      ]
    },
    {
      category: 'Modelos de IA',
      icon: '🧠',
      description: 'Large Language Models para evaluación inteligente',
      techs: [
        { name: 'Google Gemini', type: 'LLM avanzado', color: 'var(--blue-500)' },
        { name: 'GPT', type: 'Modelo de OpenAI', color: 'var(--blue-600)' },
        { name: 'Ollama', type: 'Local deployment', color: 'var(--blue-700)' },
        { name: 'DeepSeek Coder', type: 'Especializado en código', color: 'var(--blue-800)' }
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
        { name: 'Docker', type: 'Containerización', color: 'var(--blue-800)' }
      ]
    }
  ];

  const aiModels = [
    {
      name: 'OCR Service',
      description: 'Servicio de reconocimiento óptico configurable',
      values: ['qwen7b', 'qwen3b', 'gemma3', 'azure'],
      icon: '📸'
    },
    {
      name: 'Model IA',
      description: 'Motor de evaluación inteligente',
      values: ['gemini', 'gpt', 'ollama'],
      icon: '🤖'
    },
    {
      name: 'Ollama Models',
      description: 'Modelos locales especializados',
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

        <div className="tech-benefits">
          <div className="benefits-content">
            <h3 className="benefits-title">Ventajas Técnicas</h3>
            <div className="benefits-grid grid grid-2">
              <div className="benefit-item">
                <div className="benefit-icon">⚡</div>
                <div className="benefit-text">
                  <h4>Alto Rendimiento</h4>
                  <p>Procesamiento optimizado para respuestas rápidas</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🔧</div>
                <div className="benefit-text">
                  <h4>Configurabilidad</h4>
                  <p>Adaptable a diferentes necesidades educativas</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">📈</div>
                <div className="benefit-text">
                  <h4>Escalabilidad</h4>
                  <p>Arquitectura preparada para crecer</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🛡️</div>
                <div className="benefit-text">
                  <h4>Fiabilidad</h4>
                  <p>Sistema robusto con respaldos automáticos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack; 