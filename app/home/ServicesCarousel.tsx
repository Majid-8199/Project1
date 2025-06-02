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
    hoverEffect: 'hover:shadow-2xl hover:border-white hover:scale-[1.02]',
  },
  // Red Card (Accent)
  {
    mainBg: 'bg-gradient-to-b from-rd to-rose-700',
    iconBg: 'bg-white',
    titleColor: 'text-white',
    border: 'border-rd',
    hoverEffect: 'hover:shadow-2xl hover:border-white hover:scale-[1.02]',
  },
  // Black Card (Dark)
  {
    mainBg: 'bg-gradient-to-b from-gray-800 to-gray-900',
    iconBg: 'bg-white',
    titleColor: 'text-white',
    border: 'border-black',
    hoverEffect: 'hover:shadow-2xl hover:border-white hover:scale-[1.02]',
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
    <section className="py-16 px-4 bg-white relative overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto md:text-center md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Our <span className="text-gn">Premium</span> Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover tailored solutions designed to elevate your experience.
        </p>
      </div>

      {/* Carousel Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 px-6 py-8"
      >
        {mainServiceCards.map((service, index) => {
          const design = cardDesigns[index % cardDesigns.length];
          return (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              data-aos="fade-right"
              data-aos-delay={index * 100}
              className={`flex-shrink-0 w-36 h-40 md:w-52 md:h-64 rounded-xl ${design.border} border-2 ${design.mainBg} ${design.hoverEffect} shadow-lg transition-all duration-500 ease-in-out overflow-hidden relative group`}
            >
              {/* Icon Section (Animated on hover) */}
              <div className={`h-2/3 ${design.iconBg} flex items-center justify-center p-4 transition-all duration-500 group-hover:h-3/5`}>
                <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Section (Slides up on hover) */}
              <div className={`h-1/3 ${design.mainBg} flex flex-col justify-center items-center p-4 transition-all duration-500 group-hover:h-2/5`}>
                <h3 className={`text-xs font-bold ${design.titleColor} mb-2 text-center`}>
                  {service.title}
                </h3>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Navigation Arrows (Only show on desktop) */}
      <button
        onClick={() => scroll('left')}
        className="hidden md:block absolute right-20 top-1/3 -translate-y-1/2 bg-gn text-white border-2 border-gn p-3 rounded-full shadow-3xl z-10 hover:bg-white hover:text-gn transition-all duration-300"
        aria-label="Scroll left"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={() => scroll('right')}
        className="hidden md:block absolute right-6 top-1/3 -translate-y-1/2 bg-gn text-white border-2 border-gn p-3 rounded-full shadow-xl z-10 hover:bg-white hover:text-gn transition-all duration-300"
        aria-label="Scroll right"
      >
        <IoIosArrowForward />
      </button>
    </section>
  );
};

export default ServicesCarousel;