// components/AllMainServicesSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MainServiceCard } from '../../interfaces/services';

interface AllMainServicesProps {
  cards: MainServiceCard[];
}

const AllServices: React.FC<AllMainServicesProps> = ({ cards }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-darkGray mb-12 relative pb-4">
          Our Services
          <span className="block w-24 h-1 bg-primaryRed mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card) => (
            <Link href={`/services/${card.slug}`} key={card.id} className="block">
              <div className="bg-cardBackground border border-primaryGreen rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <div className="p-6 flex-grow flex flex-col items-center text-center">
                  {card.icon && (
                    <Image src={card.icon} alt={`${card.title} Icon`} width={60} height={60} className="mb-4" />
                  )}
                  <h3 className="text-2xl font-semibold text-darkGray mb-3">
                    {card.title}
                  </h3>
                  <p className="text-mediumGray mb-6 flex-grow">
                    {card.summary}
                  </p>
                  <span className="text-primaryGreen font-medium hover:text-darkGreen transition-colors duration-200 flex items-center">
                    {card.linkText}
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                  </span>
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