import Image from 'next/image'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa'

const AboutUs = () => {
  return (
    <section className="bg-white min-h-[80vh] flex items-center px-4 xl:mx-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 order-2">
          <h1 className="text-5xl font-bold leading-tight">
            <span className="text-rd">Fast.</span>{' '}
            <span className="text-gn">Simple.</span>
          </h1>
          <h2 className="text-3xl font-semibold text-black">
            Government Services Simplified.
          </h2>
          <div className="border-t-4 border-gn w-20 my-4"></div>
          <p className="text-gray-700 text-lg lg:text-sm leading-relaxed">
            We assist individuals and businesses with a full range of UAE government services — from visa applications and Emirates ID to labour contracts, medical typing, and PRO services. Whether you&apos;re applying for a Golden Visa, setting up a business, or resolving legal paperwork, our team ensures smooth, error-free processing — every step of the way.
          </p>
          <button className="relative overflow-hidden text-sm bg-gn text-white px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300" >
            <span className="relative z-10 group-hover:text-gn transition-colors duration-300 flex items-center gap-1">
              Know More
              <FaChevronRight />
            </span>
            <span className="absolute left-0 top-0 w-0 h-full bg-white z-0 border-2 rounded-lg border-gn transition-all duration-300 group-hover:w-full" />
          </button>
        </div>

        {/* IMAGE */}
        <div className="mt-20 lg:mt-0 rounded-2xl overflow-hidden shadow-lg order-1 relative h-[400px]">
          <Image
            src="/homepage/about.jpg"
            alt="Government services"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>

  )
}

export default AboutUs