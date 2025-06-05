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
    <footer className="bg-gre text-white pt-10 pb-4 px-6 mt-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10">
        {/* Left: Company Info & Contact */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-6">
            <Image
              src={company.logoSrc}
              alt={`${company.name} logo`}
              width={60}
              height={60}
              loading="lazy"
            />
            <div className="flex flex-col gap-2">
              <h2 className="text-lg font-semibold">{company.name}</h2>
              <div className="h-1 w-40 self-start bg-black"></div>
              <div className="h-1 w-40 self-end bg-red-600"></div>
              <p className="text-2xl text-right">{company.tagline}</p>
            </div>
          </div>

          <div className="mt-2 space-y-2 text-sm">
            {/* Address */}
            <p className="flex items-start gap-2">
              <MdLocationOn className="mt-1" />
              <Link
                href={contact.address.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                aria-label="Company Location"
              >
                {contact.address.lines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </Link>
            </p>

            {/* Email */}
            <p className="flex items-center gap-2">
              <MdEmail />
              <Link
                href={contact.email.link}
                className="hover:underline"
                aria-label={`Email: ${contact.email.label}`}
              >
                {contact.email.label}
              </Link>
            </p>

            {/* Phone */}
            <p className="flex items-center gap-2">
              <FiPhone />
              <Link
                href={contact.phone.link}
                className="hover:underline"
                aria-label={`Call: ${contact.phone.label}`}
              >
                {contact.phone.label}
              </Link>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-[1px] bg-gray-300" />

        {/* Right: Navigation */}
        <nav
          className="flex flex-col justify-between md:p-10"
          aria-label="Footer Navigation"
        >
          <div className="flex flex-col sm:flex-row gap-10 text-sm">
            {/* Main Nav */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">
                {navigation.headings.main}
              </h4>
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

            {/* Popular Services */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">
                {navigation.headings.popular}
              </h4>
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

            {/* Other Services */}
            <div>
              <h4 className="font-semibold mb-2 text-lg">
                {navigation.headings.others}
              </h4>
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row mt-10 items-center justify-center gap-6">
            <Link
              href="/apply-online"
              aria-label="Apply Online"
              className="relative text-sm bg-white text-green-700 px-6 py-2 rounded-lg border-2 border-white group overflow-hidden flex items-center gap-1"
            >
              {buttons.applyOnline}
              <FaChevronRight />
              <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-green-700 z-[-1]" />
            </Link>

            <Link
              href="https://wa.me/yourwhatsappnumber"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="relative text-sm bg-white text-green-700 px-6 py-2 rounded-lg border-2 border-white group overflow-hidden flex items-center gap-1"
            >
              {buttons.messageUs}
              <FaWhatsapp />
              <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-300 bg-green-700 z-[-1]" />
            </Link>
          </div>
        </nav>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-xs">
        <p>{copyright}</p>
      </div>
    </footer>
  )
}

export default Footer
