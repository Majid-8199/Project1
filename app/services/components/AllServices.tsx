'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Service from '@/app/interface/service';

const AllServices = ({ cards }: { cards: Service[] }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-darkGray mb-12 relative pb-4"
          data-aos="fade-up"
        >
          Our Services
          <span className="block w-24 h-1 bg-rd mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cards.map((card: Service, index: number) => (
            <Link href={`/services`} key={card.id} className="block">
              <div
                className="bg-cardBackground border border-primaryGreen rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="p-6 flex-grow flex flex-col">
                  {card.icon && (
                    <Image
                      src={card.icon}
                      alt={`${card.title} Icon`}
                      width={120}
                      height={120}
                      className="mb-4"
                    />
                  )}
                  <h3 className="text-2xl font-semibold text-darkGray mb-3">
                    {card.title}
                  </h3>
                  <p className="text-mediumGray mb-6 flex-grow">
                    {card.summary}
                  </p>
                  <div className="inline-block pb-1 text-gn transition-colors duration-300">
                    <p className="flex items-center text-sm gap-1 pl-1">
                      Know More <FaChevronRight />
                    </p>
                    <span className="absolute left-0 bottom-0 w-0 h-1 bg-gn transition-all duration-500 group-hover:w-full"></span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
