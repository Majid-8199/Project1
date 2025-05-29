// pages/services/index.tsx (or app/services/page.tsx)
import React from 'react';
import HeroSection from './components/HeroSection';
import AllServices from './components/AllServices';
import { heroSection, mainServiceCards } from '../data/main-services'; // Your data source
import CTAButton from '../components/CTAButton';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-lightGray min-h-screen">
      <HeroSection hero={heroSection} />
      <AllServices cards={mainServiceCards} />
      <CTAButton/>
    </div>
  );
};

export default ServicesPage;