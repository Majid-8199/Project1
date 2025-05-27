// components/AboutUs.js
import Image from 'next/image';
import { aboutUsContent } from '../../data/aboutpage/aboutUsContent';

const AboutUs = () => {
  const { header, missionVision, values, gallery, tagline } = aboutUsContent;

  return (
    <section className="bg-white text-black py-16 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full mx-auto px-10">
        {/* Header and Core Mission Section */}
        <div className="flex items-center justify-center lg:grid-cols-2 gap-12 mb-20  m-h-[100vh]">
          {/* Text Content */}
          <div className="lg:pr-8 w-[50%]">
            <h2 className="text-4xl font-extrabold text-gn sm:text-5xl lg:text-6xl mb-6">
              {header.title}
            </h2>
            <div className='bg-rd h-1 w-40'></div>
            <p className="mt-4 text-gray-800 leading-relaxed">
              {header.subtitle}
            </p>
            <h3 className="text-6xl font-extrabold text-rd mt-12 mb-4">
              {missionVision.title}
            </h3>
            <div className='bg-gn h-1 w-40'></div>
            <p className="leading-relaxed mt-4 text-gray-800">
              {missionVision.text}
            </p>
          </div>

          {/* Image Grid from Screenshot 2025-05-26 135012.png inspiration */}
          <div className="relative grid grid-cols-2 gap-4 auto-rows-fr h-[450px] w-[50%]">
            {/* Using a dynamic grid and relative positioning for a more fluid feel */}
            {gallery.images[0] && (
              <div className="relative rounded-lg overflow-hidden shadow-xl col-span-1 row-span-1 self-end w-full h-full transform hover:scale-105 transition-transform duration-300">
                <Image src={gallery.images[0].src} alt={gallery.images[0].alt} layout="fill" objectFit="cover" />
              </div>
            )}
             {gallery.images[1] && (
              <div className="relative rounded-lg overflow-hidden shadow-xl col-span-1 row-span-1 self-start w-full h-full transform hover:scale-105 transition-transform duration-300">
                <Image src={gallery.images[1].src} alt={gallery.images[1].alt} layout="fill" objectFit="cover" />
              </div>
            )}
            {gallery.images[2] && (
              <div className="relative rounded-lg overflow-hidden shadow-xl col-span-2 row-span-1 self-center w-full h-full transform hover:scale-105 transition-transform duration-300">
                <Image src={gallery.images[2].src} alt={gallery.images[2].alt} layout="fill" objectFit="cover" />
              </div>
            )}
             {gallery.images[3] && (
              <div className="relative rounded-lg overflow-hidden shadow-xl col-span-1 row-span-1 self-end w-full h-full transform hover:scale-105 transition-transform duration-300">
                <Image src={gallery.images[3].src} alt={gallery.images[3].alt} layout="fill" objectFit="cover" />
              </div>
            )}
            {gallery.images[4] && (
              <div className="relative rounded-lg overflow-hidden shadow-xl col-span-1 row-span-1 self-start w-full h-full transform hover:scale-105 transition-transform duration-300">
                <Image src={gallery.images[4].src} alt={gallery.images[4].alt} layout="fill" objectFit="cover" />
              </div>
            )}
          </div>
        </div>

        {/* Why Choose Us? Section (inspired by Screenshot 2025-05-26 135037.png) */}
        <div className="bg-gray-100 py-16 px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              {values.title}
            </h3>
            <p className="text-5xl font-extrabold sm:text-6xl lg:text-7xl mb-4">
              <span className="text-green-600">{values.promiseHighlight.split(',')[0]}</span>,{' '}
              <span className="text-red-600">{values.promiseHighlight.split(',')[1]}</span>, and{' '}
              <span className="text-green-600">{values.promiseHighlight.split(',')[2]}</span>
              <span className="text-black block text-4xl sm:text-5xl mt-4">{values.promiseText}</span>
            </p>
            <p className="text-xl text-gray-700">
              {values.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.items.map((item, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 group">
                <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                  {item.icon && (
                    <Image
                      src={item.icon}
                      alt={item.heading}
                      width={64}
                      height={64}
                      className=""
                    />
                  )}                </div>
                <h4 className="text-xl font-semibold text-black mb-2">{item.heading}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-20 w-[60%] mx-auto">
            <p className="text-xl italic font-medium text-gray-800">
              {tagline}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;