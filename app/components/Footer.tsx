'use client'

import React from 'react'
import Image from 'next/image'
import { FaChevronRight, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gn text-white pt-10 pb-2 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Side - Logo and Contact */}
        <div className="flex flex-col gap-4">
          <div className='flex items-center gap-10'>
            <Image src="/logo.svg" alt="Logo" width={60} height={60} />
            <div className='flex flex-col gap-2'>
              <h2 className="text-lg font-semibold self-start">Amer and Tas-heel Service Assistance</h2>
              <div className='h-1 w-36 xs:w-48 lg:w-56 bg-black self-end'></div>
              <div className='h-1 w-36 xs:w-48 lg:w-56 bg-red-600 self-start'></div>
              <p className="text-2xl self-end">مساعدة في خدمات آمر و تسهيل</p>
            </div>
          </div>

          <div className="mt-2 space-y-1">
            <p className="flex items-start gap-2"><MdLocationOn className="mt-1" />
              Office 504, Al Attar Business Center<br />
              Al Barsha 1, Sheikh Zayed Road<br />
              Dubai, United Arab Emirates<br />
              P.O. Box 123456
            </p>
            <p className="flex items-center gap-2"><MdEmail /> info@amerandtasheel.ae</p>
            <p className="flex items-center gap-2"><FiPhone /> +971 50 123 4567</p>
          </div>
        </div>

        <div className='h-[2px] lg:w-[1px] lg:h-auto bg-gray-300'></div>

        {/* Navigation Links */}
        <div className='flex flex-col justify-between p-10'>
          <div className="flex flex-col sm:flex-row gap-10 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-lg">Navigation</h4>
              <ul className="space-y-1 text-gray-300">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/about" className="hover:text-white">About</Link></li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li><Link href="/blogs" className="hover:text-white">Blogs</Link></li>
                <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Popular Services</h4>
              <ul className="space-y-1 text-gray-300">
                <li><Link href="/amer-services" className="hover:text-white">Amer Services</Link></li>
                <li><Link href="/tasheel-services" className="hover:text-white">Tas-heel Services</Link></li>
                <li><Link href="/emirates-id" className="hover:text-white">Emirates ID</Link></li>
                <li><Link href="/medical-services" className="hover:text-white">Medical Services</Link></li>
                <li><Link href="/business-services" className="hover:text-white">Business Related Services</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Other Services</h4>
              <ul className="space-y-1 text-gray-300">
                <li><Link href="/legal-services" className="hover:text-white">Document and Legal Services</Link></li>
                <li><Link href="/dubai-police" className="hover:text-white">Dubai Police Online Services</Link></li>
                <li><Link href="/rta-services" className="hover:text-white">RTA Online Services</Link></li>
                <li><Link href="/mofaic" className="hover:text-white">MOFAIC Services</Link></li>
                <li><Link href="/icp" className="hover:text-white">Federal Authority for Identity and Citizenship (ICP)</Link></li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row mt-10 items-center justify-center gap-10'>
            <button className="relative overflow-hidden text-sm bg-white text-gn px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300" >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                Apply Online
                <FaChevronRight />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-gn z-0 transition-all duration-300 group-hover:w-full" />
            </button>
            <button className="relative overflow-hidden text-sm bg-white text-gn  px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300" >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                Message Us              
                <FaWhatsapp />
              </span>
              <span className="absolute left-0 top-0 w-0 h-full bg-gn z-0 transition-all duration-300 group-hover:w-full" />
            </button>
          </div>
        </div>
      </div>
      
      <div className='h-[1px] lg:w-[1px] bg-gray-300'></div>

      {/*Bottom */}
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <p className="text-xs text-white mt-4">
          © 2025 Amer and Tas-heel Services Assistance. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
