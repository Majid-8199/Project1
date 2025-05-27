// components/ServiceHeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { Service } from '../../../interfaces/services';

interface ServiceHeroProps {
  service: Service;
}

const ServiceHeroSection: React.FC<ServiceHeroProps> = ({ service }) => {
  return (
    <section className="relative bg-gradient-to-r from-primaryGreen to-darkGreen text-white py-20 md:py-32">
      <Image
        src={service.imageUrl}
        alt={service.imageAlt}
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-20 z-0"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          {service.title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 opacity-90 animate-fade-in delay-200">
          {service.heroExcerpt}
        </p>
        <p className="text-lg max-w-3xl mx-auto opacity-80 animate-fade-in delay-400">
          {service.description}
        </p>
        {/* Optional: Add a main CTA here if applicable */}
      </div>
    </section>
  );
};

export default ServiceHeroSection;