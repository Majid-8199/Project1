// interfaces/services.ts

export interface ContentParagraph {
  paragraph: string;
}

export interface ContentHeading {
  heading: string;
  paragraph?: string; // Optional paragraph for headings that also have a paragraph
}

export interface ContentHeadingWithList {
  heading: string;
  paragraph?: string; // Optional paragraph for headings that also have a paragraph
  list: Array<{
    text: string;
    description?: string; // Description is optional as some lists might just have text
  }>;
}

// Define the type for a single content block
export type ContentBlock = ContentParagraph | ContentHeading | ContentHeadingWithList;

export interface FAQ {
  question: string;
  answer: string;
}

// Interfaces for Services
export interface SubServiceDetail {
  slug: string; // e.g., 'entry-permit', 'residential-visa'
  title: string; // e.g., 'Entry Permit'
  image: string; // Image for the sub-service (e.g., '/services/sub-amer-entry.jpg')
  summary: string; // Short description
  heroText?: string; // Text specifically for the SubService Hero
  serviceTypes?: Array<{ // For pages like 'Residential Visa' with 'New', 'Renew', 'Cancel'
    type: string; // 'New Residency Visa'
    description: string;
  }>;
  content: ContentBlock[]; // Use the unified content block structure
  faqs: FAQ[];
}

export interface Service {
  id: string;
  slug: string; // e.g., 'amer-services'
  title: string; // e.g., 'Amer Services'
  icon?: string; // Icon for the main service card (e.g., '/icons/amer.svg')
  imageUrl: string; // Hero image for the main service page
  imageAlt: string;
  heroExcerpt: string; // Longer description for the main service page hero
  summary: string; // Short summary for the MainServices section card
  description: string; // Main description for the Service page
  subServices: SubServiceDetail[]; // Array of sub-services
  faqs: FAQ[]; // FAQs for the main service category
}

// Data structure for the main services page
export interface MainServiceCard {
  id: string;
  slug: string;
  title: string;
  icon: string; // Icon for the card
  summary: string; // Brief description
  linkText: string; // e.g., "Know More"
}

// Structure for the main services page (page.tsx)
export interface MainServicesPageData {
  hero: {
    title: string;
    tagline: string;
    description: string;
    imageUrl: string;
    imageAlt: string;
  };
  mainServiceCards: MainServiceCard[];
}