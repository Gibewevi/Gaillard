import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { services } from '../../data/services';
import ImageCarousel from '../ui/ImageCarousel';

const PLACEHOLDER_IMAGES = [
  'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1605932557585-2c1d02b2699e?q=80&w=1000&auto=format&fit=crop',
];

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = services.find(s => s.slug === slug);

  if (!service) return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-premium-black text-gold-light">
      <p>Service non trouvé.</p>
      <button onClick={() => navigate('/')} className="ml-4 underline">Retour à l'accueil</button>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-premium-black text-gold-light"
    >
      {/* Hero / Image Section */}
      <div className="relative h-[50vh] md:h-[60vh] w-full">
        <ImageCarousel images={PLACEHOLDER_IMAGES} />
        <div className="absolute inset-0 bg-gradient-to-t from-premium-black via-transparent to-transparent" />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center text-gold-medium mb-8 hover:gap-2 transition-all group/back"
        >
          <ArrowLeft size={20} className="mr-2 group-hover/back:-translate-x-1 transition-transform" />
          <span>Retour aux services</span>
        </button>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
             <service.icon size={48} className="text-gold-medium" />
             <h1 className="text-4xl md:text-5xl font-serif text-gold-light">{service.title}</h1>
          </div>

          <p className="text-2xl text-gold-light/80 mb-8 italic border-l-4 border-gold-medium pl-6">
            {service.description}
          </p>
          
          <div className="h-px bg-gradient-to-r from-gold-medium/50 to-transparent mb-12" />

          <div className="prose prose-invert max-w-none">
            <p className="text-gold-light/70 leading-relaxed text-xl whitespace-pre-wrap">
              {service.details}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
