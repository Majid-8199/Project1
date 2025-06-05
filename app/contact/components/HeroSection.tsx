import Image from "next/image";
import { heroContent } from "../../data/contacts";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-black text-white overflow-hidden">
      <Image
        src={heroContent.image}
        alt="Dubai Skyline"
        fill
        className="opacity-30 object-cover object-center"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center md:text-center lg:text-start lg:w-[80%] lg:mx-auto px-6">
        <div className="animate-fadeInUp"> {/* Animation applied here */}
          <h1 className="text-3xl xs:text-4xl sm:text-6xl lg:text-7xl font-bold">
            {heroContent.title}
          </h1>
          <p className="mt-4 text-lg sm:text-2xl lg:text-3xl">
            {heroContent.subtitle}
          </p>
        </div>
      </div>
    </section>
  );
}
