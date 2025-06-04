import Image from 'next/image';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Service from '@/app/interface/service';

const AllServices = ({ cards }: { cards: Service[] }) => {

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2
          className="text-4xl font-bold text-center text-darkGray mb-12 relative pb-4"
        >
          Our Services
          <span className="block w-24 h-1 bg-rd mx-auto mt-2"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {cards.map((card: Service) => (
            <Link
              href={`/services/${card.slug ?? card.id}`} // assuming slug or id is available
              key={card.id}
              className="block"
              aria-label={`Know more about ${card.title} service`}
            >
              <div
                className="bg-cardBackground relative border border-primaryGreen rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer h-full flex flex-col"
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
                  <p className="text-mediumGray mb-6 flex-grow">{card.summary}</p>
                  <div className="inline-block pb-1 text-gre transition-colors duration-300">
                    <p className="flex items-center text-sm gap-1 pl-1">
                      Know More <FaChevronRight />
                    </p>
                  </div>
                </div>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-gre transition-all duration-500 group-hover:w-full"></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllServices;
