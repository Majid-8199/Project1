'use client';
import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import OurServicesCard from '../../components/OurServicesCard';
import { mainServiceCards } from '../../data/main-services';

const OurServices = () => {
  const selectedService = mainServiceCards;
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1024) setVisibleCount(5);
      else if (width >= 768) setVisibleCount(6);
      else if (width >= 640) setVisibleCount(4);
      else setVisibleCount(3);
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  return (
    <section className="w-full bg-white py-16 px-4" aria-labelledby="our-services-heading">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">

        {/* Header Section */}
        <header className="flex flex-col gap-4" >
          <h1 id="our-services-heading" className="text-5xl font-bold text-gray-800">
            Our Services
          </h1>
          <div className="w-24 h-1 bg-rd" aria-hidden="true"></div>
          <p className="text-lg text-gray-600 max-w-3xl">
            We provide complete government support services in the Dubai and UAE — from visa applications and Emirates ID to business setup and legal documentation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              className="relative w-fit overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300"
              aria-label="View All Services"
              type="button"
            >
              <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
                View All Services
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              className="relative w-fit overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300"
              aria-label="Apply Online"
              type="button"
            >
              <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
                Apply Online
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center" role="list">
          {selectedService.slice(0, visibleCount).map((service, index) => (
            <div key={index} role="listitem" className="w-full">
              <OurServicesCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
