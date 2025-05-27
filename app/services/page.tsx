// pages/services/index.tsx (or app/services/page.tsx)
import React from 'react';
import HeroSection from './components/HeroSection';
import AllServices from './components/AllServices';
import { mainServicesPageData } from '../data/main-services'; // Your data source

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-lightGray min-h-screen">
      <HeroSection hero={mainServicesPageData.hero} />
      <AllServices cards={mainServicesPageData.mainServiceCards} />
      {/* Potentially add a general FAQ section here */}
    </div>
  );
};

export default ServicesPage;