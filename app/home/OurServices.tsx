'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurServicesCard from '../components/OurServicesCard';
import { mainServiceCards } from '../data/main-services';

const OurServices = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const selectedService = mainServiceCards;

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // Responsive card count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(5);        // xl
      else if (width >= 768) setVisibleCount(3); 
      else if (width >= 640) setVisibleCount(4);   // lg
      else setVisibleCount(3);                      // sm, md
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  return (
    <section className='w-full bg-white py-16 px-4 overflow-x-hidden'>
      <div className='max-w-6xl mx-auto flex flex-col gap-10'>
        
        {/* Header Section */}
        <div className='text-center flex flex-col gap-4' data-aos="fade-up">
          <h1 className='text-5xl font-bold text-gray-800'>Our Services</h1>
          <div className='w-24 h-1 bg-rd mx-auto'></div>
          <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
            We provide complete government support services in the Dubai and UAE — from visa applications and Emirates ID to business setup and legal documentation.
          </p>
          <div className='flex flex-wrap justify-start xs:justify-center gap-4 pt-4'>
            <button className="relative overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
                View All Services
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
            <button className="relative overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
                Apply Online
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center">
          {selectedService.slice(0, visibleCount).map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
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
