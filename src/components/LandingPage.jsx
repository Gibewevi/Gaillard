import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Hero from './features/Hero';
import Services from './features/Services';
import About from './features/About';
import Contact from './features/Contact';
import MaterialsSection from './features/MaterialsSection';
import { AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  return (
    <div className="bg-premium-black min-h-screen selection:bg-gold-medium selection:text-premium-black">
      <Header />
    
      <main>
        <Hero />
        <Services />
        <MaterialsSection />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
