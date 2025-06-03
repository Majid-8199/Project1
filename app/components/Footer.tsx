'use client'

import React from 'react'
import Image from 'next/image'
import { FaChevronRight, FaWhatsapp } from 'react-icons/fa'
import { MdEmail, MdLocationOn } from 'react-icons/md'
import { FiPhone } from 'react-icons/fi'
import Link from 'next/link'
import { footerContent } from '../data/footer'

const Footer = () => {
  const { company, contact, navigation, buttons, copyright } =
    footerContent

  return (
    <footer className="bg-gre text-white pt-10 pb-2 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Side - Logo and Contact */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-10">
            <Image
              src={company.logoSrc}
              alt={`${company.name} logo`}
              width={60}
              height={60}
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold self-start">
                {company.name}
              </h2>
              <div className="h-1 w-36 xs:w-48 lg:w-56 bg-black self-end"></div>
              <div className="h-1 w-36 xs:w-48 lg:w-56 bg-red-600 self-start"></div>
              <p className="text-2xl self-end">{company.tagline}</p>
            </div>
          </div>

          <div className="mt-2 space-y-1">
            <p className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              <Link
                href={contact.address.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {contact.address.lines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <MdEmail />
              <Link href={contact.email.link} className="hover:underline">
                {contact.email.label}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <FiPhone />
              <Link href={contact.phone.link} className="hover:underline">
                {contact.phone.label}
              </Link>
            </p>
          </div>
        </div>

        <div className="h-[2px] lg:w-[1px] lg:h-auto bg-gray-300"></div>

        {/* Navigation Links */}
        <nav className="flex flex-col justify-between md:p-10" aria-label="Footer navigation">
          <div className="flex flex-col sm:flex-row gap-10 text-sm">
            <div>
              <h4 className="font-semibold mb-2 text-lg">Navigation</h4>
              <ul className="space-y-1 text-gray-300">
                {navigation.main.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Popular Services</h4>
              <ul className="space-y-1 text-gray-300">
                {navigation.popular.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2 text-lg">Other Services</h4>
              <ul className="space-y-1 text-gray-300">
                {navigation.others.map((item, index) => (
                  <li key={index}>
                    <Link href={item.link} className="hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row mt-10 sm:items-center justify-center gap-10">
            <Link
              href="/apply-online"
              aria-label="Apply Online"
              className="relative w-fit overflow-hidden text-sm bg-white text-gre px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300 flex items-center gap-1"
            >
              {buttons.applyOnline}
              <FaChevronRight />
              <span className="absolute left-0 top-0 w-0 h-full bg-gre z-0 transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Message Us on WhatsApp"
              className="relative w-fit overflow-hidden text-sm bg-white text-gre px-6 py-2 rounded-lg border-2 border-white group transition-colors duration-300 flex items-center gap-1"
            >
              {buttons.messageUs}
              <FaWhatsapp />
              <span className="absolute left-0 top-0 w-0 h-full bg-gre z-0 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
        </nav>
      </div>

      <div className="h-[1px] lg:w-[1px] bg-gray-300 mt-10"></div>

      {/* Bottom */}
      <div className="mt-10 flex flex-col justify-center items-center gap-4">
        <p className="text-xs text-white mt-4">{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
