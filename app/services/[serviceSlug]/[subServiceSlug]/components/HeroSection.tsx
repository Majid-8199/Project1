// components/SubServiceHeroSection.tsx
import React from 'react';
import Image from 'next/image';
import { SubServiceDetail } from '../../../../interfaces/services';

interface SubServiceHeroProps {
  subService: SubServiceDetail;
}

const SubServiceHeroSection: React.FC<SubServiceHeroProps> = ({ subService }) => {
  return (
    <section className="relative bg-gradient-to-r from-primaryGreen to-darkGreen text-white py-20 md:py-32">
      <Image
        src={subService.image} // Using the specific image for the sub-service
        alt={subService.title}
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-20 z-0"
      />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
          {subService.title}
        </h1>
        {subService.heroText && ( // Render hero text if available
          <p className="text-xl md:text-2xl font-light mb-6 opacity-90 animate-fade-in delay-200">
            {subService.heroText}
          </p>
        )}
        <p className="text-lg max-w-3xl mx-auto opacity-80 animate-fade-in delay-400">
          {subService.summary}
        </p>
        {/* Optional: Add an "Apply Online" or "Contact Us" button */}
        <button className="mt-8 px-8 py-4 bg-white text-primaryGreen font-bold rounded-full shadow-lg hover:bg-lightGray hover:text-darkGreen transition-all duration-300 transform hover:scale-105">
          Apply Online
        </button>
      </div>
    </section>
  );
};

export default SubServiceHeroSection;