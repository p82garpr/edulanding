import React from 'react';
import { Link } from 'react-router-dom';
import './Documentation.css';

const Documentation = () => {
  const documents = [
    {
      id: 'manual_usuario',
      title: 'Manual de Usuario',
      description: 'Guía completa para usuarios finales de la plataforma EduCode',
      icon: '👤',
      path: '/docs/manual_usuario.pdf',
      type: 'Manual'
    },
    {
      id: 'memoria_tecnica',
      title: 'Memoria Técnica',
      description: 'Documentación técnica detallada del desarrollo del proyecto',
      icon: '⚙️',
      path: '/docs/memoria_tecnica.pdf',
      type: 'Técnica'
    }
  ];

  return (
    <section className="documentation" id="documentation">
      <div className="container">
        <div className="section-header">
          <h2>Documentación</h2>
          <p>
            Consulta la documentación completa para obtener toda la información 
            sobre el uso y desarrollo de EduCode.
          </p>
        </div>
        
        <div className="docs-grid">
          {documents.map((doc) => (
            <div key={doc.id} className="doc-card">
              <div className="doc-icon">
                <span>{doc.icon}</span>
              </div>
              
              <div className="doc-content">
                <div className="doc-type">{doc.type}</div>
                <h3 className="doc-title">{doc.title}</h3>
                <p className="doc-description">{doc.description}</p>
                
                <div className="doc-actions">
                  <Link 
                    to={`/documentation${doc.path}`}
                    className="btn-primary doc-btn"
                  >
                    📖 Ver Documento
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Documentation; 