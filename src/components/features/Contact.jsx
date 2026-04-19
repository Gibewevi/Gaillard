import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => (
  <section id="contact" className="py-24 px-6 bg-premium-black">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-script text-gold-medium mb-8">Contactez-nous</h2>
        <div className="space-y-6 text-gold-light/80">
          <div className="flex items-start space-x-4">
            <MapPin className="text-gold-medium shrink-0" />
            <span>64 rue de la Colombette, 31000 Toulouse</span>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="text-gold-medium shrink-0" />
            <span>Tél. : 05 61 63 99 62</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="text-gold-medium shrink-0" />
            <span>Email: contact@gaillard-gravure.fr</span>
          </div>
        </div>
      </div>
      <div className="glass p-8 rounded-2xl border border-gold-dark/30">
         <p className="text-gold-light text-center italic mb-4">Nous restons à votre disposition pour tous vos projets.</p>
         <button className="w-full py-3 bg-gradient-to-r from-gold-dark to-gold-medium text-premium-black font-bold rounded-lg hover:brightness-110 transition-all uppercase tracking-widest">Demander un Devis</button>
      </div>
    </div>
  </section>
);

export default Contact;
