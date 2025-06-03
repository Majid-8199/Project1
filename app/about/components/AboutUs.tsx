'use client';

import Image from 'next/image';
import { aboutUsContent } from '../../data/about';

const AboutUs = () => {
  const { header, missionVision, values, gallery, tagline } = aboutUsContent;

  return (
    <section className="bg-white text-black py-16 sm:px-6 lg:px-8 overflow-hidden" aria-labelledby="about-us-heading">
      <div className="w-full mx-auto px-4 md:px-10">

        {/* Header and Core Mission Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-20 min-h-[100vh]">

          {/* Text Content */}
          <div className="lg:pr-8 lg:w-[50%]">
            <h2 id="about-us-heading" className="text-4xl font-extrabold text-gn sm:text-5xl lg:text-6xl mb-6">
              {header.title}
            </h2>
            <div className="bg-rd h-1 w-40" aria-hidden="true"></div>
            <p className="mt-4 text-gray-800 leading-relaxed">
              {header.subtitle}
            </p>
            <h3 className="text-4xl md:text-6xl font-extrabold text-rd mt-12 mb-4">
              {missionVision.title}
            </h3>
            <div className="bg-gn h-1 w-40" aria-hidden="true"></div>
            <p className="leading-relaxed mt-4 text-gray-800">
              {missionVision.text}
            </p>
          </div>

          {/* Image Grid */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-fr h-[450px] w-full lg:w-[50%]" aria-label="About us gallery">
            {gallery.images.slice(0, 5).map((img, i) => (
              <div
                key={i}
                className={`relative rounded-lg overflow-hidden shadow-xl w-full h-full transform hover:scale-105 transition-transform duration-300 ${i === 2 ? 'md:col-span-2 row-span-1 self-center' : 'col-span-1 row-span-1'}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us? Section */}
        <div className="bg-gray-100 py-16 px-6" aria-labelledby="why-choose-us-heading">
          <div className="md:text-center mb-12">
            <h3 id="why-choose-us-heading" className="text-xl md:text-3xl font-bold text-black mb-4">
              {values.title}
            </h3>
            <p className="text-3xl md:text-5xl font-extrabold lg:text-7xl mb-4">
              <span className="text-emerald-600">{values.promiseHighlight.split(',')[0]}</span>,{' '}
              <span className="text-red-600">{values.promiseHighlight.split(',')[1]}</span>, and{' '}
              <span className="text-emerald-600">{values.promiseHighlight.split(',')[2]}</span>
              <span className="text-black block text-3xl sm:text-5xl mt-4">{values.promiseText}</span>
            </p>
            <p className="text-base md:text-xl text-gray-700">
              {values.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 group"
              >
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  {item.img && (
                    <Image
                      src={item.img}
                      alt={item.heading}
                      width={64}
                      height={64}
                      loading="lazy"
                    />
                  )}
                </div>
                <h4 className="text-xl font-semibold text-black mb-2">{item.heading}</h4>
                <p className="text-gray-600 text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="md:text-center mt-20 md:w-[60%] md:mx-auto">
            <p className="text-xs sm:text-base md:text-xl italic font-medium text-gray-800">
              {tagline}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
