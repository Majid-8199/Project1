import HeroSection from './home/HeroSection';
import AboutUs from './home/AboutUs';
import OurServices from './home/OurServices';
import WhyChooseUs from './home/WhyUs';
import BlogHighlights from './home/Blogs';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <OurServices />
      <WhyChooseUs />
      <BlogHighlights />
    </>
  );
}
