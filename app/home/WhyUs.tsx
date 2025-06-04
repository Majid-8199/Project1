'use client';

import React, { useEffect } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import WhyUsCard from './WhyUsCard';
import { Features } from '../data/features';
import Link from 'next/link';

const WhyUs = () => {
  const selectedFeatures = Features.slice(0, 4);

  return (
    <div className='flex flex-col lg:flex-row items-center justify-center min-h-[100vh] gap-10 px-4 overflow-x-hidden'>

      {/* LEFT TEXT SECTION */}
      <div
        className='lg:w-[40%] xl:w-[45%] flex flex-col gap-4 p-4 md:p-10'
      >
        <p className='text-sm'>Why Choose Us?</p>
        <h1 className='text-4xl md:text-5xl font-bold'>
          <span className='text-rd'>Smart</span>, <span className='text-gn'>Fast</span>, and Reliable — That’s Our Promise
        </h1>
        <p className='text-xl md:text-2xl font-semibold'>
          Trusted by professionals, families, and businesses across the UAE.
        </p>
        {/* Link wrapper for button to navigate */}
        <Link href="/why-us">
          <button className="relative overflow-hidden text-sm bg-gn text-white px-6 py-2 w-fit rounded-lg border-2 border-white group transition-colors duration-300">
            <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
              Know More
              <FaChevronRight />
            </span>
            <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
          </button>
        </Link>
      </div>

      {/* RIGHT CARD SECTION */}
      <div
        className='flex flex-col sm:flex-row md:gap-10 justify-center w-[80%] sm:w-[90%] lg:w-[50%] xl:w-[45%]'
      >
        <div className='flex flex-col gap-2 justify-center'>
          <WhyUsCard feature={selectedFeatures[0]} />
          <div className='h-1 w-[95%] bg-rd items-center hidden sm:block'></div>
          <WhyUsCard feature={selectedFeatures[1]}/>
        </div>
        <div className='w-3 bg-gn'></div>
        <div className='flex flex-col items-center gap-2 justify-center'>
          <WhyUsCard feature={selectedFeatures[2]}/>
          <div className='h-1 w-[95%] bg-rd hidden sm:block'></div>
          <WhyUsCard feature={selectedFeatures[3]}/>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
