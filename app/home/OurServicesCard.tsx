import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { MainServiceCard } from '../interfaces/services'; // Import the MainServiceCard interface

// Define the props type for OurServicesCard using MainServiceCard
const OurServicesCard = ({ service }: { service: MainServiceCard }) => {
  return (
    // The link href is constructed using the service's slug, assuming a base path of /services/
    <Link href={`/services/${service.slug}`} className="flex flex-col justify-between gap-4 p-4 w-full max-w-[240px] h-[290px] border-2 rounded-2xl border-gn">
      
      {/* Header Section: Displays the service icon and title */}
      <div className='flex items-center gap-4'>
        {/* Use service.icon for the image source */}
        <Image src={service.icon} height={40} width={40} alt={service.title} className='shrink-0' />
        <h6 className="text-xl font-bold text-gray-800">{service.title}</h6>
      </div>
      
      {/* Body Section: Displays the service summary and a "Know More" link */}
      <div className='flex flex-col justify-between h-[140px]'>
        <p className="text-sm text-gray-600">{service.summary}</p>
        <p className='flex items-center gap-1 text-gn text-xs w-fit mt-2'>
          {/* Use service.linkText for the link text, with a fallback to "Know More" */}
          {service.linkText} <FaChevronRight />
        </p>
      </div>
    </Link>
  );
}

export default OurServicesCard;