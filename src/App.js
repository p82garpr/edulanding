import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import AIDemoInteractive from './components/AIDemoInteractive';
import Features from './components/Features';
import TechStack from './components/TechStack';
import UserTypes from './components/UserTypes';
import Documentation from './components/Documentation';
import About from './components/About';
import Footer from './components/Footer';
import PDFViewer from './components/PDFViewer';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

// Componente para manejar el scroll automático
const ScrollToSection = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return null;
};

// Componente principal de la landing page
const LandingPage = () => {
  return (
    <div className="App">
      <ScrollToSection />
      <Header />
      <Analytics />
      <SpeedInsights />
      <Hero />
      <ProductShowcase />
      <AIDemoInteractive />
      <Features />
      <UserTypes />
      <TechStack />
      <Documentation />
      <About />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/documentation/docs/:fileName" element={<PDFViewer />} />
      </Routes>
    </Router>
  );
}

export default App;
