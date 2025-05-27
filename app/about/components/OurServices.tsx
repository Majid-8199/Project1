'use client';
import React from 'react'
import { FaChevronRight } from 'react-icons/fa';
import OurServicesCard from './OurServicesCard';
import {mainServicesPageData} from '../../data/main-services';

const OurServices = () => {
  const selectedService = mainServicesPageData.mainServiceCards;
  return (
    <section className='w-full bg-white py-16 px-4'>
      <div className='max-w-6xl mx-auto flex flex-col gap-10'>
        
        {/* Header Section */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-5xl font-bold text-gray-800'>Our Services</h1>
          <div className='w-24 h-1 bg-rd'></div>
          <p className='text-lg text-gray-600 max-w-3xl'>
            We provide complete government support services in the Dubai and UAE — from visa applications and Emirates ID to business setup and legal documentation.
          </p>
          <div className='flex gap-4 pt-4'>
            <button className="relative overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300" >
              <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
                View All Services
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
            <button className="relative overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300" >
              <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
                Apply Online
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center'>
          {selectedService.map((service, index) => (
            <OurServicesCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurServices;
