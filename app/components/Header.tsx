'use client';

import React, { useEffect, useState } from 'react';
import { FaBars, FaChevronDown, FaChevronRight, FaSearch, FaTimes } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import Link from 'next/link';
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'auto';
  }, [isMobileMenuOpen]);

  const services = [
    {
      title: 'Amer Services',
      sub: ['Entry Permit', 'Residency Visa', 'Family Visa', 'Visit Visa', 'Golden Visa', 'Status Change', 'Data Modification'],
    },
    {
      title: 'Tas-heel Services',
      sub: ['Work Permit', 'Labour Card', 'Employment Contract', 'Sponsorship Transfer'],
    },
    { title: 'Emirates ID' },
    { title: 'Medical Services' },
    { title: 'Document and Legal Services' },
    {
      title: 'Business Setup Services',
      sub: ['Company Registration', 'Trade License', 'MOA', 'PRO', 'DED'],
    },
    { title: 'Police and RTA Services' },
  ];

  return (
    <div className="h-[62px] sticky top-0 z-[100] bg-white">
      <div className="w-full h-[60px] px-2 lg:px-5 xl:px-10 flex items-center justify-between">
        <Link href="/" className="flex items-center justify-center gap-2">
          <Image src="/LogoandName.webp" alt="Logo" width={220} height={40} className="w-[150px] xs:w-[170px] sm:w-[220px]" />
        </Link>

        <ul className="hidden md:flex text-sm items-center gap-4 lg:gap-10 xl:gap-16 relative z-50">
          <li className="relative group cursor-pointer flex items-center">
            <Link href="/" className="inline-block pb-1 transition-colors duration-300 hover:text-gre">
              Home
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gre transition-all duration-500 group-hover:w-full" />
            </Link>
          </li>
          <li className="relative group cursor-pointer flex items-center">
            <Link href="/about" className="inline-block pb-1 transition-colors duration-300 hover:text-gre">
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gre transition-all duration-500 group-hover:w-full" />
            </Link>
          </li>

          <li
            className="relative group cursor-pointer"
            onMouseEnter={() => {
              setIsDropdownOpen(true);
              setShowSearchBar(false);
              setIsHoveringDropdown(true);
            }}
            onMouseLeave={() => {
              setIsDropdownOpen(false);
              setActiveSubMenu(null);
              setIsHoveringDropdown(false);
            }}
          >
            <Link
              href="/services"
              className={`flex items-center pb-1 transition-colors duration-300 ${isHoveringDropdown ? 'text-gre gap-4' : 'gap-4'}`}
              aria-expanded={isDropdownOpen}
            >
              <span>Services</span>
              <FaChevronDown size={12} className="ml-1 mt-[2px]" />
            </Link>
            {isDropdownOpen && (
              <ul className="absolute top-4 -left-14 pt-5 mt-2 bg-white text-black shadow-lg py-2 w-56 z-50">
                {services.map((service) => (
                  <li
                    key={service.title}
                    className="relative px-4 py-2 hover:bg-gray-100 flex justify-between items-center"
                    onMouseEnter={() => service.sub && setActiveSubMenu(service.title)}
                    onMouseLeave={() => setActiveSubMenu(null)}
                    tabIndex={0}
                  >
                    <span className={`${activeSubMenu === service.title ? 'text-green-600 font-semibold' : ''}`}>
                      {service.title}
                    </span>
                    {service.sub && <FaChevronRight size={10} />}
                    {activeSubMenu === service.title && service.sub && (
                      <ul className="absolute left-full top-0 bg-white shadow-lg w-56">
                        {service.sub.map((item) => (
                          <li key={item} className="px-4 py-2 hover:bg-gray-100">
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

          <li className="relative group cursor-pointer flex items-center">
            <Link href="/blogs" className="inline-block pb-1 transition-colors duration-300 hover:text-gre">
              Blogs
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gre transition-all duration-500 group-hover:w-full" />
            </Link>
          </li>
          <li className="relative group cursor-pointer flex items-center">
            <Link href="/contact" className="inline-block pb-1 transition-colors duration-300 hover:text-gre">
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gre transition-all duration-500 group-hover:w-full" />
            </Link>
          </li>
        </ul>

        {/* Right side buttons */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <button
            aria-label="Toggle Search Bar"
            className="relative pb-2 py-2 text-xs text-gre px-2 group transition-colors duration-300"
            onClick={() => {
              setShowSearchBar((prev) => !prev);
              setIsMobileMenuOpen(false);
            }}
          >
            <FaSearch size={14} className="text-black group-hover:text-gre" />
          </button>
          <Link href="/apply-online">
            <div className="cursor-pointer relative overflow-hidden text-xs text-gre border-2 border-gre px-2 xs:px-4 py-2 rounded-lg group transition-colors duration-300">
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Apply Online</span>
              <span className="absolute left-0 top-0 w-0 h-full bg-gre z-0 transition-all duration-300 group-hover:w-full" />
            </div>
          </Link>

          <div
            className="md:hidden cursor-pointer"
            aria-label="Open mobile menu"
            onClick={() => {
              setIsMobileMenuOpen(true);
              setShowSearchBar(false);
            }}
          >
            <FaBars />
          </div>
        </div>
      </div>

      {/* Gradient divider */}
      <div
        className="w-full h-[2px]"
        style={{ background: 'linear-gradient(to right, #FFFFFF 0%, #059669 50%, #EB1D26 100%)' }}
      />

      {/* Search Bar */}
      {showSearchBar && (
        <div className="bg-black bg-opacity-50 w-full px-4 py-4 animate-slide-down">
          <div className="relative w-[80%] lg:max-w-2xl flex items-center bg-white rounded-full mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gre"
              autoFocus
            />
            <button
              aria-label="Submit search"
              className="absolute right-10 bg-gre text-white rounded-full px-3 py-2"
              onClick={() => setShowSearchBar(false)}
            >
              <FaSearch size={14} />
            </button>
            <button
              aria-label="Close search"
              className="absolute right-2"
              onClick={() => setShowSearchBar(false)}
            >
              <IoMdClose size={20} className="text-black" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          className="fixed right-0 top-0 w-64 h-full bg-white shadow-lg z-[1000] overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile menu"
        >
          <div className="flex w-full justify-end items-center px-4 py-3 border-b">
            <FaTimes
              className="cursor-pointer"
              aria-label="Close mobile menu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
          <ul className="flex flex-col px-4 py-2 gap-4 text-sm">
            <li>
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
            </li>

            <li>
              <div className="flex justify-between items-center pb-1">
                <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium">
                  Services
                </Link>
                <button
                  aria-expanded={isDropdownOpen}
                  aria-controls="mobile-services-submenu"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsDropdownOpen(!isDropdownOpen);
                  }}
                  className="ml-2 focus:outline-none"
                  aria-label="Toggle services submenu"
                >
                  <FaChevronDown size={16} className={`transform transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
              </div>
              {isDropdownOpen && (
                <ul
                  id="mobile-services-submenu"
                  className="pl-4 flex flex-col gap-2"
                >
                  {services.map((service) => (
                    <li key={service.title}>
                      {service.sub ? (
                        <MobileSubMenu
                          service={service}
                          closeMenu={() => setIsMobileMenuOpen(false)}
                        />
                      ) : (
                        <Link
                          href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {service.title}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>

            <li>
              <Link href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>
                Blogs
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

interface MobileSubMenuProps {
  service: {
    title: string;
    sub?: string[];
  };
  closeMenu: () => void;
}

const MobileSubMenu: React.FC<MobileSubMenuProps> = ({ service, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!service.sub) {
    return (
      <Link
        href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        onClick={closeMenu}
      >
        {service.title}
      </Link>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <span>{service.title}</span>
        <FaChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
      </div>
      {isOpen && (
        <ul className="pl-4 flex flex-col gap-2 mt-1">
          {service.sub.map((subItem) => (
            <li key={subItem}>
              <Link href={`/services/${subItem.toLowerCase().replace(/\s+/g, '-')}`} onClick={closeMenu}>
                {subItem}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;