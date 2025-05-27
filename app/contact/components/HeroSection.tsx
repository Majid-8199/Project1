import Image from "next/image";
import { heroContent } from "../../data/aboutpage/heroContent";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] bg-black text-white">
      <Image src={heroContent.image} alt="Dubai Skyline" fill className="opacity-30"/>
      <div className="absolute inset-0 flex items-center justify-center text-center px-6">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold">{heroContent.title}</h1>
          <p className="mt-4 text-lg md:text-2xl">{heroContent.subtitle}</p>
        </div>
      </div>
    </section>
  );
}
