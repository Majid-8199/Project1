// components/MainServicesHeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { MainServicesPageData } from '../../interfaces/services';

interface MainServicesHeroProps {
  hero: MainServicesPageData['hero'];
}

const HeroSection: React.FC<MainServicesHeroProps> = ({ hero }) => {
  return (
    <section className="relative bg-gradient-to-r from-primaryGreen to-darkGreen text-white py-20 md:py-32">
      <Image
        src={hero.imageUrl}
        alt={hero.imageAlt}
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-20 z-0"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          {hero.title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-6 opacity-90 animate-fade-in delay-200">
          {hero.tagline}
        </p>
        <p className="text-lg max-w-3xl mx-auto opacity-80 animate-fade-in delay-400">
          {hero.description}
        </p>
      </div>
    </section>
  );
};

export default HeroSection;