import React from 'react';
import { Menu } from 'lucide-react';

const Header = () => (
  <header className="glass sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
    <div className="text-gold-medium font-script text-2xl tracking-wider">Gaillard Gravure</div>
    <nav className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gold-light/80">
      <a href="#accueil" className="hover:text-gold-medium transition-colors">Accueil</a>
      <a href="#propos" className="hover:text-gold-medium transition-colors">À propos</a>
      <a href="#contact" className="hover:text-gold-medium transition-colors">Contact</a>
    </nav>
    <Menu className="md:hidden text-gold-medium" />
  </header>
);

export default Header;
