import React from 'react';
import { motion } from 'framer-motion';
import { Award, Gem, MapPin, Gift, Mail, Phone, Menu, ChevronRight, Calendar, Settings, Layers, ShieldCheck, Contact2, Info, History } from 'lucide-react';

const services = [
  { title: "Plaques Professionnelles", description: "Une présentation élégante et durable.", icon: ShieldCheck },
  { title: "Gravure Bijoux", description: "Précision artisanale sur métals précieux.", icon: Gem },
  { title: "Signalétique", description: "Solutions personnalisées pour vos locaux.", icon: MapPin },
  { title: "Personnalisation", description: "Rendez vos objets uniques avec notre gravure.", icon: Gift },
  { title: "Evénements", description: "Gravure sur supports événementiels.", icon: Calendar },
  { title: "Gravure Industrielle", description: "Séries et gravures de précision industrielle.", icon: Settings },
  { title: "Timbre à sec", description: "Cachets et sceaux d'élégance.", icon: Layers },
  { title: "Tampons", description: "Solutions professionnelles pour entreprises.", icon: Award }
];

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

const Services = () => (
  <section className="py-24 px-6 bg-premium-black">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-gold-medium font-script text-4xl md:text-5xl mb-4">Nos Services</h2>
      <div className="h-1 w-24 bg-gold-dark mx-auto rounded-full"></div>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((s, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -10 }}
          className="glass p-8 rounded-xl border border-gold-dark/20 text-center group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-gold-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <s.icon size={48} className="mx-auto mb-6 text-gold-medium group-hover:scale-110 transition-transform" />
          <h3 className="text-xl font-serif text-gold-light mb-3">{s.title}</h3>
          <p className="text-gold-light/60 text-sm leading-relaxed">{s.description}</p>
        </motion.div>
      ))}
    </div>
  </section>
);

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

const Footer = () => (
  <footer className="py-12 px-6 border-t border-gold-dark/20 text-center text-gold-light/40 text-sm">
    <p>© {new Date().getFullYear()} Gaillard Gravure. Tous droits réservés.</p>
  </footer>
);

const LandingPage = () => (
  <div className="bg-premium-black min-h-screen selection:bg-gold-medium selection:text-premium-black">
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default LandingPage;