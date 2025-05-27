import Image from 'next/image';
import React from 'react';

type Feature = {
  img: string;
  heading: string;
  description: string;
};

const WhyUsCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="flex flex-col p-4 h-[250px]">
      <div className='flex items-center justify-center'>
              <Image src={feature.img} height={100} width={100} alt={feature.heading} />
      </div>
      <h6 className="text-lg font-bold mt-2">{feature.heading}</h6>
      <p className="text-sm">{feature.description}</p>
    </div>
  );
};

export default WhyUsCard;
