import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass p-8 rounded-xl border border-gold-dark/20 text-center group relative overflow-hidden"
  >
    <div className="absolute inset-0 bg-gradient-to-tr from-gold-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <Icon size={48} className="mx-auto mb-6 text-gold-medium group-hover:scale-110 transition-transform" />
    <h3 className="text-xl font-serif text-gold-light mb-3">{title}</h3>
    <p className="text-gold-light/60 text-sm leading-relaxed">{description}</p>
  </motion.div>
);

export default ServiceCard;
