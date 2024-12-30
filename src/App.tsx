import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Benefits from './components/Benefits';
import About from './components/About';
import Contact from './components/Contact';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Benefits />
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <CTA />
    </div>
  );
}

export default App;