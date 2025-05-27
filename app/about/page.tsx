import React from 'react'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import CTAButton from '../components/CTAButton'

const About = () => {
  return (
    <>
        <HeroSection/>
        <AboutUs/>
        <OurServices/>
        <CTAButton/>
    </>
  )
}

export default About