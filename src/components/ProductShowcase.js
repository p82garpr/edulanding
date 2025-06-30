import React, { useState, useEffect } from 'react';
import './ProductShowcase.css';

const ProductShowcase = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const technologies = [
    { name: 'Flutter', logo: '/logos/flutter.png', category: 'Frontend' },
    { name: 'Dart', logo: '/logos/dart.png', category: 'Language' },
    { name: 'FastAPI', logo: '/logos/fastapi.png', category: 'Backend' },
    { name: 'Python', logo: '/logos/python.png', category: 'Language' },
    { name: 'PostgreSQL', logo: '/logos/postgresql.png', category: 'Database' },
    { name: 'Uvicorn', logo: '/logos/uvicorn.png', category: 'Server' },
    { name: 'Hugging Face', logo: '/logos/huggingface.png', category: 'AI' },
    { name: 'Ollama', logo: '/logos/ollama.png', category: 'AI' },
    { name: 'Gemini', logo: '/logos/gemini.png', category: 'AI' },
    { name: 'ChatGPT', logo: '/logos/chatgpt.png', category: 'AI' },
    { name: 'Qwen', logo: '/logos/qwen.png', category: 'AI' },
    { name: 'Gemma', logo: '/logos/gemma.png', category: 'AI' },
    { name: 'DeepSeek', logo: '/logos/deppseek.png', category: 'AI' },
    { name: 'Azure OCR', logo: '/logos/azureocr.png', category: 'AI' }
  ];

  const screenshots = [
    { id: 1, src: '/app_screenshot/iniciar_sesion.png', alt: 'Pantalla principal' },
    { id: 2, src: '/app_screenshot/en1.png', alt: 'Realizar entrega 1' },
    { id: 3, src: '/app_screenshot/en2.png', alt: 'Fotografiamos la entrega' },
    { id: 4, src: '/app_screenshot/en3.png', alt: 'Procesamos la iamgen con el OCR' },
    { id: 6, src: '/app_screenshot/en5.png', alt: 'Enviamos la solucion' },
    { id: 7, src: '/app_screenshot/en6.png', alt: 'La I.A. evalúa la solución' },
    { id: 8, src: '/app_screenshot/crearAct2.png', alt: 'Crear actividad como profesor' },
    { id: 9, src: '/app_screenshot/forgot3.png', alt: 'Recuperar contraseña' }
  ];

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % screenshots.length);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval);
  }, [isAutoPlaying, screenshots.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setIsAutoPlaying(false);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsAutoPlaying(true);
  };

  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentSlide + i) % screenshots.length;
      visible.push({
        ...screenshots[index],
        position: i
      });
    }
    return visible;
  };

  return (
    <section id="product-showcase" className="product-showcase">
      <div className="container">
        
        {/* Video Demo Section */}
        <div className="demo-section animate-fadeInUp">
          <div className="section-header">
            <h2>Demostración en Vivo</h2>
            <p>Ve cómo funciona EduCode.AI en acción</p>
          </div>
          
          <div className="video-container">
            <iframe
              className="demo-video"
              src="https://www.youtube.com/embed/NemfmxIH1x4"
              title="EduCode.AI - Demostración"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Technology Stack Section */}
        <div className="tech-section animate-fadeInUp">
          <div className="section-header">
            <h2>Stack Tecnológico</h2>
            <p>Tecnologías de vanguardia que impulsan la solución creada</p>
          </div>
          
          <div className="tech-categories">
            {['Frontend', 'Backend', 'AI', 'Database'].map(category => (
              <div key={category} className="tech-category">
                <h3 className="category-title">{category}</h3>
                <div className="tech-grid">
                  {technologies
                    .filter(tech => tech.category === category || 
                           (category === 'Backend' && ['Language', 'Server'].includes(tech.category)))
                    .map((tech, index) => (
                      <div 
                        key={tech.name} 
                        className="tech-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="tech-logo">
                          <img src={tech.logo} alt={tech.name} />
                        </div>
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots Carousel Section */}
        <div className="carousel-section animate-fadeInUp">
          <div className="section-header">
            <h2>Capturas de la Aplicación</h2>
            <p>Explora la interfaz y funcionalidades de la aplicación móvil</p>
          </div>
          
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <button 
                className="carousel-nav carousel-nav-prev" 
                onClick={prevSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                &#8249;
              </button>
              
              <div className="carousel-track">
                {getVisibleSlides().map((screenshot) => (
                  <div 
                    key={`${screenshot.id}-${screenshot.position}`}
                    className={`carousel-slide ${screenshot.position === 1 ? 'active' : ''}`}
                    style={{ 
                      transform: `translateX(${(screenshot.position - 1) * 100}%) scale(${screenshot.position === 1 ? 1 : 0.8})`,
                      zIndex: screenshot.position === 1 ? 3 : 2,
                      opacity: screenshot.position === 1 ? 1 : 0.6
                    }}
                    onClick={() => screenshot.position === 1 && openModal(screenshot)}
                  >
                    <div className="slide-container">
                      <img 
                        src={screenshot.src} 
                        alt={screenshot.alt}
                        className="slide-image"
                      />
                      {screenshot.position === 1 && (
                        <div className="slide-overlay">
                          <span className="view-text">Ver en grande</span>
                        </div>
                      )}
                    </div>
                    <p className="slide-caption">{screenshot.alt}</p>
                  </div>
                ))}
              </div>
              
              <button 
                className="carousel-nav carousel-nav-next" 
                onClick={nextSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                &#8250;
              </button>
            </div>
            
            {/* Indicators */}
            <div className="carousel-indicators">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                />
              ))}
            </div>
            
            {/* Auto-play control */}
            <button 
              className="play-pause-btn"
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            >
              {isAutoPlaying ? '⏸️' : '▶️'}
            </button>
          </div>
        </div>

        {/* Modal for enlarged images */}
        {selectedImage && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>&times;</button>
              <img 
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="modal-image"
              />
              <p className="modal-caption">{selectedImage.alt}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase; 