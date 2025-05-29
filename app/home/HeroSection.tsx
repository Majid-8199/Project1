'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { heroSlidesContent } from '../data/home';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scrollToIndex = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.scrollTo({
        left: index * sliderRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? heroSlidesContent.length - 1 : currentIndex - 1;
    scrollToIndex(newIndex);
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 400);
  };

  const handleNext = () => {
    const newIndex = currentIndex === heroSlidesContent.length - 1 ? 0 : currentIndex + 1;
    scrollToIndex(newIndex);
    setTimeout(() => {
      setCurrentIndex(newIndex);
    }, 400);
  };

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = currentIndex === heroSlidesContent.length - 1 ? 0 : currentIndex + 1;
      scrollToIndex(newIndex);
      setTimeout(() => {
        setCurrentIndex(newIndex);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  // Sync currentIndex when user scrolls manually
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const index = Math.round(slider.scrollLeft / slider.clientWidth);
      if (index !== currentIndex) setCurrentIndex(index);
    };

    slider.addEventListener('scroll', handleScroll);
    return () => slider.removeEventListener('scroll', handleScroll);
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Scrollable slider wrapper */}
      <div
        ref={sliderRef}
        className="flex h-full overflow-x-auto scroll-snap-x scroll-smooth no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {heroSlidesContent.map((slide, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center min-w-full h-full"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Image src={slide.src} alt="" fill className="object-cover" priority />
            <div className="absolute inset-0 bg-black opacity-50 z-[1]" />

            {/* Slide Content */}
            <div className="absolute flex flex-col justify-center gap-3 text-white z-[2] md:w-[80%] lg:w-[60%] px-5 leading-relaxed md:px-6">
              <h1
                className={`text-4xl sm:text-6xl font-bold transition-opacity duration-700 ${
                  currentIndex === index ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                }`}
              >
                {slide.heading}
              </h1>
              <p
                className={`text-xl transition-opacity duration-700 delay-200 ${
                  currentIndex === index ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                }`}
              >
                {slide.subheading}
              </p>
              <div
                className={`flex flex-col md:flex-row md:items-center justify-start gap-2 transition-opacity duration-700 delay-500 ${
                  currentIndex === index ? 'opacity-100 animate-fadeInUp' : 'opacity-0'
                }`}
              >
                {slide.buttons.map((btn, i) => (
                  <button
                    key={i}
                    className="relative overflow-hidden text-xs bg-white text-gn border-2 border-gn px-4 py-2 rounded-lg group transition-colors duration-300 w-fit"
                  >
                    <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                      {btn.label}
                      {btn.icon && <btn.icon />}
                    </span>
                    <span className="absolute left-0 top-0 w-0 h-full bg-gn z-0 transition-all duration-300 group-hover:w-full" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute hidden md:block top-1/2 left-4 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute hidden md:block top-1/2 right-4 z-10 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default HeroSection;
