'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import OurServicesCard from '../components/OurServicesCard';
import { mainServiceCards } from '../data/main-services';
import Service from '../interface/service';

const OurServices = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const selectedService = mainServiceCards;

  const getRandomItems = (array: Service[], count: number | undefined) => {
    return [...array]
      .sort(() => 0.5 - Math.random()) // Shuffle copy of array
      .slice(0, count);                // Take first N items
  };

  const randomServices = getRandomItems(selectedService, visibleCount);

  // Responsive card count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1280) setVisibleCount(5);       // xl
      else if (width >= 1024) setVisibleCount(4);  // lg
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  return (
    <section className='w-full bg-black bg-opacity-90 py-16 px-4 overflow-x-hidden'>
      <div className='max-w-6xl mx-auto flex flex-col gap-10'>
        
        {/* Header Section */}
        <div className='text-center flex flex-col gap-4'>
          <h1 className='text-5xl font-bold text-white'>Our Services</h1>
          <div className='w-24 h-1 bg-rd mx-auto'></div>
          <p className='text-lg text-white max-w-3xl mx-auto'>
            We provide complete government support services in the Dubai and UAE — from visa applications and Emirates ID to business setup and legal documentation.
          </p>
          <div className='flex flex-wrap justify-start xs:justify-center gap-4 pt-4'>
            <button className="relative overflow-hidden text-sm bg-white text-gn px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                View All Services
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-4 h-full bg-gn z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
            <button className="relative overflow-hidden text-sm bg-white text-gn px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                Apply Online
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-4 h-full bg-gn z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {randomServices.map((service, index) => (
            <div
              key={service.id}
              className="w-full"
            >
              <OurServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
