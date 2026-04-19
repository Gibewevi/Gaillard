import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <section id="accueil" className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-premium-midnight">
    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
    <motion.div 
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1.5 }}
      className="text-center z-10 px-4"
    >
      <h1 className="text-5xl md:text-7xl font-script text-gradient mb-6">Gaillard Gravure</h1>
      <p className="text-gold-light/80 text-lg md:text-xl max-w-2xl mx-auto font-serif italic">
        Professionnel de la gravure moderne et traditionnelle à Toulouse depuis 1981.
      </p>
    </motion.div>
  </section>
);

export default Hero;
