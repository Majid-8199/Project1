'use client'

import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaChevronRight, FaSearch, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { IoMdClose } from 'react-icons/io';
import Image from 'next/image';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  useEffect(() => {
  const handleScroll = () => {
    setShowSearchBar(false);
    setIsMobileMenuOpen(false);
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  const services = [
    {
      title: 'Amer Services',
      sub: [
        'Entry Permit',
        'Residency Visa',
        'Family Visa',
        'Visit Visa',
        'Golden Visa',
        'Status Change',
        'Data Modification',
      ],
    },
    {
      title: 'Tas-heel Services',
      sub: [
        'Work Permit',
        'Labour Card ',
        'Employment Contract',
        'Sponsorship Transfer',
      ],
    },
    {
      title: 'Emirates ID',
    },
    {
      title: 'Medical Services',
    },
    {
      title: 'Documaent and Legal Services',
    },
    {
      title: 'Business Setup Services',
      sub: [
        'Company Registration',
        'Trade License',
        'MOA',
        'PRO',
        'DED'
      ],
    },
    {
      title: 'Police and RTA Services',
    },
  ];

  return (
    <div className='h-[62px] sticky top-0 z-[100]'>
      <div className="w-full h-[60px] px-2 lg:px-5 xl:px-10 bg-white">
        <nav className="w-full h-full flex justify-between items-center">
          <div className='flex items-center justify-center gap-2'>
            <Image src="/LogoandName.svg" alt="" width={0} height={0} className='w-[150px] xs:w-[170px] sm:w-[220px]' />
          </div>
          <div className="flex  h-full items-center lg:justify-between gap-2 md:gap-4 lg:gap-6 lg:w-[60%]">
            {/* Desktop Menu */}
            <ul className="text-sm font- h-full items-center gap-2 md:gap-4 lg:gap-10 xl:gap-16 hidden md:flex relative z-50">
              {/* Home */}
              <li className="relative group cursor-pointer flex items-center">
                <Link href="/" className="inline-block pb-1 transition-colors duration-300 hover:text-gn">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full "></span>
                </Link>
              </li>
              {/* About */}
              <li className="relative group cursor-pointer flex items-center">
                <Link href="/about" className="inline-block pb-1 transition-colors duration-300 hover:text-gn">
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              {/* Services with Dropdown - Corrected Structure */}
              <li
                className="relative group cursor-pointer"
                onMouseEnter={() => {setIsDropdownOpen(true); setShowSearchBar(false); setIsHoveringDropdown(true);}}
                onMouseLeave={() => {
                  setIsDropdownOpen(false);
                  setActiveSubMenu(null);
                  setIsHoveringDropdown(false);
                }}
              >
                <div className={`flex items-center pb-1 transition-colors duration-300 ${isHoveringDropdown ? 'text-gn gap-4' : 'gap-4'}`}>
                  <span className="">Services</span>
                  <FaChevronDown size={12} className="ml-1 mt-[2px]" />
                </div>

                {isDropdownOpen && (
                  <ul className="absolute top-4 -left-14 pt-5 mt-2 bg-white text-black shadow-lg py-2 w-56 z-50">
                    {services.map((service) => (
                      <li
                        key={service.title}
                        className="relative px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                        onMouseEnter={() => service.sub && setActiveSubMenu(service.title)}
                        onMouseLeave={() => setActiveSubMenu(null)} // Added to clear submenu when leaving an item without sub
                      >
                        <span className={`${activeSubMenu === service.title ? 'text-green-600 font-semibold' : ''}`}>
                          {service.title}
                        </span>
                        {service.sub && <FaChevronRight size={10} />}
                        {/* Sub Menu */}
                        {activeSubMenu === service.title && service.sub && (
                          <ul className="absolute left-full top-0 bg-white shadow-lg w-56">
                            {service.sub.map((item) => (
                              <li key={item} className="px-4 py-2 hover:bg-gray-100 flex justify-between items-center">
                                <Link href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`}>{item}</Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {/* Blogs */}
              <li className="relative group cursor-pointer flex items-center">
                <Link href="/blogs" className="inline-block pb-1 transition-colors duration-300 hover:text-gn">
                  Blogs
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              {/* Contact */}
              <li className="relative group cursor-pointer flex items-center">
                <Link href="/contact" className="inline-block pb-1 transition-colors duration-300 hover:text-gn">
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>

            {/* Right-side buttons */}
            <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
              <button
                className="order-1 relative overflow-hidden pb-2 py-2 text-xs text-gn px-2 group transition-colors duration-300 md:order-2"
                onClick={() => {setShowSearchBar(prev => !prev); setIsMobileMenuOpen(false);}}
              >
                <FaSearch
                  size={14}
                  className=" md:order-1 text-black transition-colors duration-300 group-hover:text-gn"
                />
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gn transition-all duration-500 group-hover:w-full"></span>
              </button>
              <Link href="/apply-online" className='order-1 md:order-2'>
                <div className="cursor-pointer relative overflow-hidden text-xs text-gn border-2 border-gn px-2 xs:px-4 py-2 rounded-lg group transition-colors duration-300 ">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                    Apply Online
                  </span>
                  <span className="absolute left-0 top-0 w-0 h-full bg-gn z-0 transition-all duration-300 group-hover:w-full" />
                </div>
              </Link>
              <div className="md:hidden order-3" onClick={() => {setIsMobileMenuOpen(true); setShowSearchBar(false);}}>
                <FaBars />
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Gradient divider */}
      <div
        className="w-full h-[2px]"
        style={{
          background: 'linear-gradient(to right, #FFFFFF 0%, #11AB5D 50%, #FF0000 100%)',
        }}
      />

      {showSearchBar && (
        <div className="bg-black bg-opacity-50 w-full px-4 py-4 animate-slide-down">
          <div className="relative w-[80%] lg:max-w-2xl flex items-center bg-white rounded-full mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gn"
            />
            <button
                className="absolute right-2
                 pb-2 py-2 text-xs bg-gn px-2 group transition-colors duration-300 order-1 md:order-2 rounded-full"
                onClick={() => setShowSearchBar(prev => !prev)}
              >
                <FaSearch
                  size={14}
                  className="order-2 md:order-1 text-white transition-colors duration-300 "
                />
            </button>
            <button
                className="absolute -right-10
                 pb-2 py-2 text-xs px-2 group transition-colors duration-300 order-1 md:order-2 rounded-full"
                onClick={() => setShowSearchBar(prev => !prev)}
              >
                <IoMdClose
                  size={20}
                  className="order-2 md:order-1 text-white transition-colors duration-300 "
                />
            </button>
          </div>
        </div>
      )}


      {/* Mobile Sidebar Menu */}
      {isMobileMenuOpen && (
        <div className="fixed right-0 w-64 h-full bg-white shadow-lg z-[1000] transition-transform duration-300">
          <div className="flex w-full justify-end items-center px-4 py-3 border-b">
            <FaTimes className="cursor-pointer" onClick={() => setIsMobileMenuOpen(false)} />
          </div>
          <ul className="flex flex-col px-4 py-2 gap-4 text-sm">
            <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
            {/* Mobile Services with Dropdown - Corrected Structure */}
            <li className="relative group cursor-pointer">
              <div
                className={`flex justify-between items-center pb-1 ${
                  isDropdownOpen ? 'text-gn font-semibold' : ''
                }`}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span className="transition-colors duration-300">Services</span>
                <FaChevronDown size={12} className="ml-1 mt-[2px]" />
              </div>

              {isDropdownOpen && (
                <ul className=" mt-2 bg-gray-50 py-2 w-full"> {/* Adjusted for mobile */}
                  {services.map((service) => (
                    <li
                      key={service.title}
                      className="relative py-2 flex flex-col justify-between items-center"
                      onClick={() => service.sub && setActiveSubMenu(activeSubMenu === service.title ? null : service.title)} // Toggle submenu on click for mobile
                    >
                      <span className={`flex items-center justify-between px-2 w-full ${activeSubMenu === service.title ? 'text-green-600 font-semibold' : ''}`}>
                        {service.title}
                        {service.sub && <FaChevronRight size={10} />}
                      </span>
                      {/* Mobile Sub Menu */}
                      {activeSubMenu === service.title && service.sub && (
                        <ul className="mt-2 ml-4 bg-gray-100 rounded-md py-2 w-full"> {/* Adjusted for mobile */}
                          {service.sub.map((item) => (
                            <li key={item} className="py-2 whitespace-nowrap">
                              <Link href={`/services/${item.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setIsMobileMenuOpen(false)}>{item}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li><Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</Link></li>
            <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;