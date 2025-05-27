// components/AllSubServicesSection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SubServiceDetail } from '../../../interfaces/services';

interface AllSubServicesProps {
  subServices: SubServiceDetail[];
  serviceSlug: string; // The slug of the parent service (e.g., 'amer-services')
}

const AllSubServicesSection: React.FC<AllSubServicesProps> = ({ subServices, serviceSlug }) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-darkGray mb-12 relative pb-4">
          Our Sub-Services
          <span className="block w-24 h-1 bg-primaryRed mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subServices.map((subService) => (
            <Link href={`/services/${serviceSlug}/${subService.slug}`} key={subService.slug} className="block">
              <div className="bg-darkCardBg text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={subService.image}
                    alt={subService.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 rounded-t-lg"></div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-2xl font-semibold mb-3">
                    {subService.title}
                  </h3>
                  <p className="text-mediumGray mb-6 flex-grow">
                    {subService.summary}
                  </p>
                  <span className="text-primaryGreen font-medium hover:text-lightGray transition-colors duration-200 flex items-center">
                    Get Started
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

export default AllSubServicesSection;