'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import { getServiceBySlug, getSubServiceBySlugs } from '@/app/data/main-services';
import Link from 'next/link';
import Head from 'next/head';
import SubServiceHeroSection from './components/HeroSection';
import Breadcrumbs from './components/Breadcrumbs';
import SubServiceDetails from './components/Detials';
import SubServiceSidebar from './components/Sidebar';
import ServiceFaqs from '../components/ServiceFaqs';

const SubServicePage: React.FC = () => {
  const params = useParams();
  const serviceSlug = params.serviceSlug as string;
  const subServiceSlug = params.subServiceSlug as string;

  const parentService = getServiceBySlug(serviceSlug);
  const subService = getSubServiceBySlugs(serviceSlug, subServiceSlug);

  if (!parentService || !subService) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-500">Service Detail Not Found</h1>
        <p className="mt-4 text-mediumGray">The specific service detail you are looking for does not exist.</p>
        <Link href="/services" className="text-primaryGreen mt-4 inline-block hover:underline">
          Back to Services
        </Link>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: 'Services', path: '/services' },
    { name: parentService.title, path: `/services/${parentService.slug}` },
    { name: subService.title, path: `/services/${parentService.slug}/${subService.slug}` },
  ];

  return (
    <div className="bg-lightGray min-h-screen">
      <Head>
        <title>{subService.title} - {parentService.title} - Your Company Name</title>
        <meta name="description" content={subService.summary} />
      </Head>
      <SubServiceHeroSection subService={subService} />
      <Breadcrumbs items={breadcrumbItems} />

      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <SubServiceDetails subService={subService} />
        </div>
        <div className="lg:col-span-1">
          <SubServiceSidebar
            currentSubServiceSlug={subService.slug}
            parentServiceSlug={parentService.slug}
            subServices={parentService.subServices}
          />
        </div>
      </div>

      <ServiceFaqs faqs={subService.faqs} />
    </div>
  );
};

export default SubServicePage;
