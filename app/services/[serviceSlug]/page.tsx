// app/services/[serviceSlug]/page.tsx

import { getServiceBySlug, allServices } from '@/app/data/main-services';
import ServiceHeroSection from './components/HeroSection';
import AllSubServicesSection from './components/AllSubServices';
import ServiceFaqs from './components/ServiceFaqs';
import { notFound } from 'next/navigation';

interface Props {
  params: {
    serviceSlug: string;
  };
}

export function generateStaticParams() {
  return allServices.map((service) => ({
    serviceSlug: service.slug,
  }));
}

export default function ServicePage({ params }: Props) {
  const service = getServiceBySlug(params.serviceSlug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-lightGray min-h-screen">
      <ServiceHeroSection service={service} />
      <AllSubServicesSection subServices={service.subServices} serviceSlug={service.slug} />
      <ServiceFaqs faqs={service.faqs} />
    </div>
  );
}
