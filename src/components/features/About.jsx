import React from 'react';
import { History } from 'lucide-react';

const About = () => (
  <section id="propos" className="py-24 px-6 bg-premium-midnight">
    <div className="max-w-4xl mx-auto text-center">
      <History className="mx-auo text-gold-medium" size={40} />
      <h2 className="text-4xl font-script text-gold-medium mb-8">Notre Histoire</h2>
      <p className="text-gold-light/80 text-lg leading-relaxed font-serif italic">
        Depuis 1981, Gaillard Gravure s'impose à Toulouse comme le maître de la gravure. 
        Alliant savoir-faire traditionnel et technologies modernes, nous transformons vos idées en réalités durables sur tous types de supports.
      </p>
    </div>
  </section>
);

export default About;
