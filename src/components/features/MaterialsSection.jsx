import React from 'react';
import { motion } from 'framer-motion';

const materials = [
  { name: 'PVC', usage: 'Intérieur / Extérieur', quality: '+', description: 'Choix de couleurs important' },
  { name: 'Plexiglass', usage: 'Extérieur / Intérieur', quality: '+++', description: 'Très bonne durée de vie' },
  { name: 'Inox', usage: 'Extérieur / Intérieur', quality: '++++', description: 'Matériau moderne et durable' },
  { name: 'Aluminium', usage: 'Extérieur / Intérieur', quality: '+++', description: 'Excellente durée de vie' },
  { name: 'Laiton (cuivre)', usage: 'Extérieur / Intérieur', quality: '++++', description: 'Noblesse du métal' },
];

const MaterialsSection = () => (
  <section className="py-24 px-6 bg-premium-black">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-gold-medium font-script text-4xl md:text-5xl mb-4">Nos Matériaux</h2>
      <div className="h-1 w-24 bg-gold-dark mx-auto rounded-full"></div>
    </div>

    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {materials.map((m, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -5 }}
          className="p-6 rounded-xl border border-gold-dark/20 bg-glass text-center group"
        >
          <h3 className="text-gold-light font-serif text-xl mb-2 group-hover:text-gold-medium transition-colors">{m.name}</h3>
          <div className="text-xs text-gold-light/50 uppercase tracking-widwid mb-4">{m.usage}</div>
          <p className="text-gold-light/70 text-sm mb-4">{m.description}</p>
          <div className="inline-block px-3 py-1 rounded-full bg-gold-dark/20 border border-gold-medium/30 text-gold-medium text-xs font-bold">
            Qualité: {m.quality}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default MaterialsSection;
