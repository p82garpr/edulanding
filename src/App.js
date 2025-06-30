import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import TechStack from './components/TechStack';
import UserTypes from './components/UserTypes';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ProductShowcase />
      <Features />
      <UserTypes />
      <TechStack />
      <About />
      <Footer />
    </div>
  );
}

export default App;
