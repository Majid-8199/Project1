import React from 'react'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'

export const metadata = {
  title: 'About Us - Your Company Name',
  description: 'Learn about Your Company Name, our mission, vision, and values.',
  openGraph: {
    title: 'About Us - Your Company Name',
    description: 'Learn about Your Company Name, our mission, vision, and values.',
    url: 'https://yourdomain.com/about',
    siteName: 'Your Company Name',
    images: [
      {
        url: 'https://yourdomain.com/images/about-og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'About Us Image',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - Your Company Name',
    description: 'Learn about Your Company Name, our mission, vision, and values.',
    images: ['https://yourdomain.com/images/about-og-image.jpg'],
    creator: '@YourTwitterHandle',
  },
  alternates: {
    canonical: '/about',
  },
}

const About = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
    </>
  )
}

export default About
