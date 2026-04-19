import React from 'react';
import { services } from '../../data/services';
import ServiceCard from '../ui/ServiceCard';

const Services = () => (
  <section className="py-24 px-6 bg-premium-black">
    <div className="max-w-7xl mx-auto text-center mb-16">
      <h2 className="text-gold-medium font-script text-4xl md:text-5xl mb-4">Nos Services</h2>
      <div className="h-1 w-24 bg-gold-dark mx-auto rounded-full"></div>
    </div>
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((s, i) => (
        <ServiceCard key={i} icon={s.icon} title={s.title} description={s.description} slug={s.slug} />
      ))}
    </div>
  </section>
);

export default Services;
