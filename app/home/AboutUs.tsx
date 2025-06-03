'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { aboutUsContent } from '../data/home';

const AboutUs = () => {
  const { heading, description, buttonText, image } = aboutUsContent;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section className="bg-white mb-20 flex items-center px-4 xl:mx-20 overflow-x-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div
          className="space-y-6 order-2"
          data-aos="fade-left"
        >
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-rd">{heading.title}</span>{' '}
            <span className="text-gn">{heading.highlight}</span>
          </h1>
          <h2 className="text-3xl font-semibold text-black">{heading.subtitle}</h2>
          <div className="border-t-4 border-gn w-20 my-4"></div>
          <p className="text-gray-700 text-lg lg:text-sm leading-relaxed">{description}</p>

          <button className="relative overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300">
            <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
              {buttonText}
              <FaChevronRight />
            </span>
            <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        {/* IMAGE */}
        <div
          className="md:mt-20 lg:mt-0 rounded-2xl overflow-hidden shadow-lg order-1 relative h-[400px]"
          data-aos="fade-right"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
