import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './PDFViewer.css';

const PDFViewer = () => {
  const { fileName } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const documentTitles = {
    'manual_usuario.pdf': 'Manual de Usuario - EduCode',
    'memoria_tecnica.pdf': 'Memoria Técnica - EduCode'
  };

  const documentDescriptions = {
    'manual_usuario.pdf': 'Guía completa para usuarios finales de la plataforma EduCode',
    'memoria_tecnica.pdf': 'Documentación técnica detallada del desarrollo del proyecto'
  };

  useEffect(() => {
    // Verificar si el archivo existe
    const validFiles = ['manual_usuario.pdf', 'memoria_tecnica.pdf'];
    if (!validFiles.includes(fileName)) {
      setError('Documento no encontrado');
      setIsLoading(false);
      return;
    }

    // Simular carga del PDF
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [fileName]);

  const handleGoBack = () => {
    navigate('/', { 
      state: { scrollTo: 'documentation' }
    });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `/docs/${fileName}`;
    link.download = fileName;
    link.click();
  };

  const currentTitle = documentTitles[fileName] || 'Documento';
  const currentDescription = documentDescriptions[fileName] || '';

  if (error) {
    return (
      <div className="pdf-viewer-error">
        <div className="container">
          <div className="error-content">
            <div className="error-icon">📄</div>
            <h1>Documento no encontrado</h1>
            <p>El documento que buscas no existe o ha sido movido.</p>
            <button onClick={handleGoBack} className="btn-primary">
              ← Volver a Documentación
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pdf-viewer">
      {/* Header */}
      <div className="pdf-header">
        <div className="container">
          <div className="pdf-nav">
            <button onClick={handleGoBack} className="back-btn">
              ← Volver a EduCode
            </button>
            
            <div className="pdf-info">
              <h1 className="pdf-title">{currentTitle}</h1>
              <p className="pdf-description">{currentDescription}</p>
            </div>
            
            <div className="pdf-actions">
              <button onClick={handleDownload} className="download-btn">
                ⬇️ Descargar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* PDF Content */}
      <div className="pdf-content">
        {isLoading ? (
          <div className="pdf-loading">
            <div className="loading-spinner"></div>
            <p>Cargando documento...</p>
          </div>
        ) : (
          <div className="pdf-container">
            <iframe
              src={`/docs/${fileName}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-width`}
              title={currentTitle}
              className="pdf-iframe"
              onLoad={() => setIsLoading(false)}
              onError={() => setError('Error al cargar el documento')}
              seamless="seamless"
              frameBorder="0"
            />
          </div>
        )}
      </div>

      {/* Footer con información adicional */}
      <div className="pdf-footer">
        <div className="container">
          <div className="footer-content">
            <p>
              <strong>EduCode</strong> - Plataforma educativa para la enseñanza de programación
            </p>
            <div className="footer-links">
              <button onClick={handleGoBack}>Inicio</button>
              <span>•</span>
              <button onClick={() => navigate('/')}>Características</button>
              <span>•</span>
              <button onClick={() => navigate('/')}>Tecnologías</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFViewer; 