'use client';

import Image from 'next/image';
import Link from 'next/link';
import { mainServiceCards } from '../data/main-services';
import { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Enhanced color schemes with smooth transitions
const cardDesigns = [
  // Green Card (Primary)
  {
    mainBg: 'bg-gradient-to-b from-gn to-emerald-700',
    iconBg: 'bg-white',
    titleColor: 'text-white',
    border: 'border-gn',
    hoverEffect: 'hover:shadow-2xl hover:scale-[1.02]',
  },
  // Red Card (Accent)
  {
    mainBg: 'bg-gradient-to-b from-rd to-rose-700',
    iconBg: 'bg-white',
    titleColor: 'text-white',
    border: 'border-rd',
    hoverEffect: 'hover:shadow-2xl  hover:scale-[1.02]',
  },
  // Black Card (Dark)
  {
    mainBg: 'bg-gradient-to-b from-gray-800 to-gray-900',
    iconBg: 'bg-white',
    titleColor: 'text-white',
    border: 'border-black',
    hoverEffect: 'hover:shadow-2xl hover:scale-[1.02]',
  }
];

const ServicesCarousel = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Initialize AOS animations
  useEffect(() => {
    AOS.init({ duration: 300, once: true });
  }, []);

  // Auto-scroll effect (pauses on hover)
  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (!isHovered && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const scrollAmount = container.clientWidth / 2;
        
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth - 10) {
          container.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
      }
    }, 3500);

    return () => clearInterval(scrollInterval);
  }, [isHovered]);

  // Manual scroll controls
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth / 2;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-10 relative overflow-hidden">
      <div className='relative'>
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 ml-4">
          Our <span className="text-gn">Popular</span> Services
        </h2>
        <button
          onClick={() => scroll('left')}
          className="hidden md:block absolute right-20 top-1/3 -translate-y-1/2 bg-gn text-white border-2 border-gn px-4 py-2 rounded-md shadow-3xl z-10 hover:bg-white hover:text-gn transition-all duration-300"
          aria-label="Scroll left"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={() => scroll('right')}
          className="hidden md:block absolute right-6 top-1/3 -translate-y-1/2 bg-gn text-white border-2 border-gn px-4 py-2 rounded-md shadow-xl z-10 hover:bg-white hover:text-gn transition-all duration-300"
          aria-label="Scroll right"
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 px-6 pt-8 pb-16"
      >
        {mainServiceCards.map((service, index) => {
          const design = cardDesigns[index % cardDesigns.length];
          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              className={`flex-shrink-0 w-40 h-40 rounded-xl ${design.border} border-2 ${design.mainBg} ${design.hoverEffect} shadow-lg transition-all duration-500 ease-in-out overflow-hidden relative group`}
            >
              {/* Icon Section (Animated on hover) */}
              <div className={`h-32 ${design.iconBg} flex items-center justify-center group-hover:p-2 p-1 transition-all duration-500 group-hover:h-3/4`}>
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    priority
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Section (Slides up on hover) */}
              <div className={`h-10 ${design.mainBg} flex flex-col justify-center items-center p-4 transition-all duration-500 group-hover:h-1/4`}>
                <h3 className={`text-xs font-bold ${design.titleColor} mb-2 text-center`}>
                  {service.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesCarousel;