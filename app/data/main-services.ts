// app/data/main-services.ts

import { Service, MainServicesPageData, SubServiceDetail, FAQ, ContentBlock, ContentHeading, ContentHeadingWithList } from '../interfaces/services';

export const mainServicesPageData: MainServicesPageData = {
  hero: {
    title: "Your Trusted Partner for Government Services in the UAE",
    tagline: "Simplifying Visas, Residency, and Official Documentation",
    description: "Navigating the complexities of UAE government services can be daunting. We are here to provide expert, efficient, and hassle-free solutions for individuals and businesses across all Emirates.",
    imageUrl: "/services/hero-main.jpg", // A generic hero image for the main services page
    imageAlt: "People collaborating with documents"
  },
  mainServiceCards: [
    {
      id: "amer-services",
      slug: "amer-services",
      title: "Amer Services",
      icon: "/icons/amer-logo.svg", // Placeholder for Amer logo icon
      summary: "Your trusted gateway to all Dubai government visa services.",
      linkText: "Know More"
    },
    {
      id: "family-visa-services",
      slug: "family-visa-services",
      title: "Family Visa Services",
      icon: "/icons/family-visa-logo.svg", // Placeholder for Family Visa icon
      summary: "Reunite with loved ones easily — from sponsorship approvals to residency.",
      linkText: "Know More"
    },
    {
      id: "golden-visa-services",
      slug: "golden-visa-services",
      title: "Golden Visa Services",
      icon: "/icons/golden-visa-logo.svg", // Placeholder for Golden Visa icon
      summary: "Secure a 10-year UAE residency — now open to more professionals.",
      linkText: "Know More"
    },
    {
      id: "tasheel-services",
      slug: "tasheel-services",
      title: "Tas-heel Services",
      icon: "/icons/tasheel-logo.svg", // Placeholder for Tas-heel icon
      summary: "All your MOHRE and labor-related paperwork handled with expertise.",
      linkText: "Know More"
    },
    {
      id: "emirates-id",
      slug: "emirates-id",
      title: "Emirates ID",
      icon: "/icons/emirates-id-logo.svg", // Placeholder for Emirates ID icon
      summary: "Quick and hassle-free Emirates ID renewals, replacements, and new applications.",
      linkText: "Know More"
    },
    {
      id: "medical-services",
      slug: "medical-services",
      title: "Medical Services",
      icon: "/icons/medical-services-logo.svg", // Placeholder for Medical Services icon
      summary: "DHA & MOH medical fitness services for employment, residency, and renewal.",
      linkText: "Know More"
    }
  ]
};


// --- Detailed Service Data for each Main Service Category ---
export const allServices: Service[] = [
  {
    id: "amer-services",
    slug: "amer-services",
    title: "Amer Services",
    imageUrl: "/services/amer-hero.jpg", // Specific hero image for Amer Services page
    imageAlt: "Amer Services logo and documents",
    heroExcerpt: "Your trusted gateway to all Dubai government visa services. From entry permits and residency applications to status changes and visa cancellations — we manage the paperwork so you don't have to. As a government-authorized Amer center partner, we ensure all your submissions are compliant, accurate, and processed efficiently.",
    summary: "Comprehensive government service solutions in Dubai.",
    description: "Amer Centers are government-authorized service providers that streamline various immigration and residency-related transactions for individuals and businesses in Dubai. We act as your reliable partner, ensuring compliance and efficiency in every application.",
    subServices: [
      {
        slug: "entry-permit",
        title: "Entry Permit",
        image: "/services/sub-amer-entry.jpg", // Image for this specific sub-service card
        summary: "Easily apply, renew, or cancel your UAE entry permits with expert assistance.",
        heroText: "Simplify your entry into the UAE. We manage all entry permit applications, renewals, and cancellations with precision and speed.",
        content: [
          {
            heading: "What is an Entry Permit?",
            paragraph: "An entry permit is a temporary visa that allows foreign nationals to enter the UAE for various purposes, such as tourism, employment, or residence application. It's the first step towards a long-term stay."
          } as ContentHeading, // Explicit cast
          {
            heading: "Types of Entry Permits We Handle",
            list: [
              { text: "Tourist Entry Permit:", description: "For leisure and short stays." },
              { text: "Employment Entry Permit:", description: "For individuals seeking employment." },
              { text: "Residence Entry Permit:", description: "For those applying for long-term residency." },
              { text: "Mission Entry Permit:", description: "For specific business or project-related visits." }
            ]
          } as ContentHeadingWithList, // Explicit cast
          {
            heading: "Required Documents for Application",
            paragraph: "To ensure a smooth process, kindly provide the following:",
            list: [
              { text: "Applicant's Passport Copy:", description: "Minimum 6 months validity." },
              { text: "Passport-size Photograph:", description: "White background." },
              { text: "Sponsor's Documents (if applicable):", description: "Passport, Emirates ID, salary certificate/labor contract." },
              { text: "Previous Visa Copy (for renewals/cancellations):", description: "If applicable." }
            ]
          } as ContentHeadingWithList, // Explicit cast
          {
            heading: "Processing Time and Validity",
            paragraph: "Standard processing time for entry permits is typically 2-5 working days. Validity varies based on the permit type, generally 30 or 60 days from the date of issue."
          } as ContentHeading // Explicit cast
        ] as ContentBlock[], // Cast the array to ContentBlock[]
        faqs: [
          {
            question: "What's the difference between an Entry Permit and a Tourist Visa?",
            answer: "An Entry Permit is a broader term for initial entry authorization. A Tourist Visa is a specific type of entry permit for tourism purposes. Other entry permits are for employment, residence processing, etc."
          },
          {
            question: "Can I extend my entry permit?",
            answer: "Some entry permits are extendable. Our team can advise on eligibility and the process for extension."
          }
        ] as FAQ[]
      } as SubServiceDetail, // Cast the entire sub-service
      {
        slug: "residency-visa",
        title: "Residency Visa",
        image: "/services/sub-amer-residency.jpg",
        summary: "Secure long-term residency in the UAE — from first-time applications to renewals and cancellations.",
        heroText: "Your path to long-term living in the UAE starts here. We streamline all aspects of UAE Residency Visa applications, renewals, and cancellations for employees, dependents, and investors.",
        serviceTypes: [
          { type: "New Residency Visa", description: "For individuals entering the UAE for employment, investment, or sponsorship." },
          { type: "Renew Residency Visa", description: "Keep your visa active and compliant before expiry." },
          { type: "Cancel Residency Visa", description: "If you're leaving the country or switching sponsors, we'll handle it smoothly." }
        ],
        content: [
          {
            heading: "Understanding UAE Residency Visas",
            paragraph: "A UAE Residency Visa grants foreign nationals the right to live, work, and study in the UAE for an extended period, usually 1, 2, or 3 years, renewable upon expiry. It is linked to your purpose of stay, such as employment, family sponsorship, or investment."
          } as ContentHeading,
          {
            heading: "Required Documents for Residency Visa",
            list: [
              { text: "Original Entry Permit:", description: "If applicable." },
              { text: "Passport (original and copy):", description: "Minimum 6 months validity." },
              { text: "Emirates ID application form:", description: "And receipt." },
              { text: "Medical Fitness Certificate:", description: "From approved medical centers." },
              { text: "Sponsor's Documents:", description: "Passport, Emirates ID, labor contract, tenancy agreement." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Key Steps in the Process",
            paragraph: "The residency visa process typically involves several stages, including an entry permit (if entering from outside), status change, medical fitness test, Emirates ID application, and ultimately, visa stamping on your passport. We guide you through each step seamlessly."
          } as ContentHeading
        ] as ContentBlock[],
        faqs: [
          {
            question: "How long does it take to get a Residency Visa stamped?",
            answer: "Once all documents are submitted and medical fitness is cleared, stamping typically takes 5-10 working days, though express options might be available."
          },
          {
            question: "Do I need medical insurance for a Residency Visa?",
            answer: "Yes, health insurance is mandatory for all UAE residents and is a prerequisite for obtaining a residency visa."
          }
        ] as FAQ[]
      } as SubServiceDetail,
      {
        slug: "visa-cancellation",
        title: "Visa Cancellation",
        image: "/services/sub-amer-cancellation.jpg",
        summary: "Efficient processing of UAE visa cancellations for departing residents or status changes.",
        heroText: "Seamlessly manage your UAE visa cancellation. Whether you're leaving the country or transitioning to a new sponsorship, we ensure a smooth and compliant process.",
        content: [
          {
            heading: "When is Visa Cancellation Required?",
            paragraph: "Visa cancellation is necessary when an expatriate is leaving the UAE permanently, changing employment, or changing their visa status. It's a critical legal step to avoid fines and potential bans."
          } as ContentHeading,
          {
            heading: "Required Documents for Cancellation",
            list: [
              { text: "Original Passport:", description: "For stamping cancellation." },
              { text: "Original Emirates ID:", description: "Will be collected." },
              { text: "Labor Card (if applicable):", description: "For employment visas." },
              { text: "No Objection Certificate (NOC):", description: "From employer/sponsor (if applicable)." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Cancellation Process Steps",
            paragraph: "The process involves applying for cancellation through the relevant authority, clearing any outstanding dues, and ensuring proper exit from the country. For employment visas, this often follows end-of-service benefits settlement."
          } as ContentHeading
        ] as ContentBlock[],
        faqs: [
          {
            question: "What happens if I don't cancel my visa?",
            answer: "Not canceling your visa can lead to overstay fines, entry bans, and legal complications in the future."
          },
          {
            question: "How long does visa cancellation take?",
            answer: "The process can often be completed within 1-3 working days, depending on the visa type and the authority involved."
          }
        ] as FAQ[]
      } as SubServiceDetail
    ] as SubServiceDetail[],
    faqs: [
      {
        question: "What is Amer Services?",
        answer: "Amer Centers are authorized service centers by the GDRFA (General Directorate of Residency and Foreigners Affairs) in Dubai, providing streamlined government services related to visas, residency, and other official documents."
      },
      {
        "question": "Why should I use Amer Services?",
        "answer": "Using an Amer Center ensures that your applications are processed accurately, efficiently, and in compliance with the latest government regulations, saving you time and preventing errors."
      }
    ] as FAQ[]
  } as Service, // Cast the entire service object
  {
    id: "family-visa-services",
    slug: "family-visa-services",
    title: "Family Visa Services",
    imageUrl: "/services/family-visa-hero.jpg",
    imageAlt: "Happy family walking on Dubai beach",
    heroExcerpt: "Reunite with your loved ones in the UAE easily and efficiently. We guide you through every step of the family sponsorship process, from initial approvals to Emirates ID and residency finalization.",
    summary: "Comprehensive support for family reunification visas in the UAE.",
    description: "We understand the importance of family. Our dedicated Family Visa Services are designed to make the process of sponsoring your spouse, children, and parents to live with you in the UAE as smooth and stress-free as possible, ensuring all legal requirements are met.",
    subServices: [
      {
        slug: "spouse-children-sponsorship",
        title: "Spouse & Children Sponsorship",
        image: "/services/sub-family-spouse.jpg",
        summary: "Sponsor your spouse and children for UAE residency with ease.",
        heroText: "Bring your immediate family to live with you in the UAE. We facilitate the sponsorship of your spouse and children, handling all documentation and procedures.",
        content: [
          {
            heading: "Eligibility for Sponsoring Spouse and Children",
            paragraph: "Male residents earning a minimum salary of AED 4,000 (or AED 3,000 with accommodation) can sponsor their wife and children. Female residents can sponsor their family under specific conditions, often requiring a higher salary and special approval."
          } as ContentHeading,
          {
            heading: "Key Required Documents",
            list: [
              { text: "Sponsor's passport and Emirates ID copy:", description: "Valid copies." },
              { text: "Attested Marriage Certificate:", description: "For spouse sponsorship." },
              { text: "Attested Birth Certificates:", description: "For child sponsorship." },
              { text: "Labor contract or salary certificate:", description: "Stating minimum salary." },
              { text: "Tenancy contract (Ejari):", description: "Proof of accommodation." },
              { text: "Medical Fitness Certificate:", description: "For family members." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Process Flow",
            paragraph: "The process involves applying for an entry permit for family members, undergoing medical fitness tests, applying for Emirates ID, and finally, getting the residence visa stamped on their passports. We assist at every stage."
          } as ContentHeading
        ] as ContentBlock[],
        faqs: [
          {
            question: "Is there an age limit for sponsoring children?",
            answer: "Male children can generally be sponsored until they are 25 years old. Unmarried daughters have no age limit."
          },
          {
            question: "Do I need to attest my marriage certificate?",
            answer: "Yes, all foreign documents, including marriage and birth certificates, must be attested by the UAE Ministry of Foreign Affairs and International Cooperation (MOFAIC) after being attested in your home country."
          }
        ] as FAQ[]
      } as SubServiceDetail,
      {
        slug: "parents-sponsorship",
        title: "Parents Sponsorship",
        image: "/services/sub-family-parents.jpg",
        summary: "Sponsor your parents to live with you in the UAE.",
        heroText: "Provide your parents with the comfort of living close. We simplify the process of sponsoring your parents for UAE residency.",
        content: [
          {
            heading: "Eligibility for Sponsoring Parents",
            paragraph: "You must earn a minimum monthly salary of AED 20,000 (or AED 19,000 with housing allowance) to sponsor both parents. You must also prove that you are their sole provider and they have no other means of support."
          } as ContentHeading,
          {
            heading: "Required Documents",
            list: [
              { text: "Sponsor's passport and Emirates ID copy:", description: "Valid copies." },
              { text: "Parents' passports and photos:", description: "And copies." },
              { text: "Attested birth certificate:", description: "Of the sponsor (to prove parentage)." },
              { text: "Affidavit from embassy/consulate:", description: "Stating sponsor is sole provider." },
              { text: "Proof of accommodation (Ejari):", description: "Sufficient space." },
              { text: "Medical Fitness Certificate:", description: "For parents." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Medical Insurance for Parents",
            paragraph: "It is mandatory to provide health insurance for your sponsored parents that meets the required coverage levels set by the local health authority."
          } as ContentHeading
        ] as ContentBlock[],
        faqs: [
          {
            question: "Can I sponsor only one parent?",
            answer: "Usually, you must sponsor both parents simultaneously. If one parent has passed away or they are divorced, you can provide proof of this to sponsor a single parent."
          },
          {
            question: "Is a medical check-up required for parents?",
            answer: "Yes, parents must undergo a medical fitness test as part of the visa application process."
          }
        ] as FAQ[]
      } as SubServiceDetail,
      {
        slug: "siblings-sponsorship",
        title: "Siblings & Other Relatives Sponsorship",
        image: "/services/sub-family-siblings.jpg",
        summary: "Assistance with sponsoring siblings and other relatives under specific conditions.",
        heroText: "We offer guidance and support for sponsoring siblings and other eligible relatives, navigating the specific requirements for such cases.",
        content: [
          {
            heading: "Sponsoring Siblings and Other Relatives",
            paragraph: "Sponsoring siblings and other relatives (e.g., in-laws) is generally more restrictive and often requires special approvals or specific circumstances, such as them being unable to work or having no other family support in their home country. Specific conditions and higher salary requirements usually apply."
          } as ContentHeading,
          {
            heading: "Common Required Documents",
            list: [
              { text: "Sponsor's documents:", description: "Passport, Emirates ID, salary certificate." },
              { text: "Sponsored relative's documents:", description: "Passport, photo, proof of relationship." },
              { text: "Proof of dependency:", description: "Documents showing the relative is fully dependent on the sponsor." },
              { text: "No Objection Certificate (NOC):", description: "From relevant authorities if applicable." }
            ]
          } as ContentHeadingWithList,
          {
            heading: "Consultation is Key",
            paragraph: "Due to the conditional nature of these sponsorships, a direct consultation with our experts is highly recommended to assess eligibility and gather precise requirements."
          } as ContentHeading
        ] as ContentBlock[],
        faqs: [
          {
            question: "Is it difficult to sponsor a sibling?",
            answer: "Yes, sponsoring siblings is generally more complex than immediate family members (spouse/children) and requires special consideration and often higher salary criteria."
          },
          {
            question: "What if my relative is already in the UAE?",
            answer: "If your relative is already in the UAE on a visit visa, a status change might be possible depending on their current visa type and your eligibility for sponsorship."
          }
        ] as FAQ[]
      } as SubServiceDetail
    ] as SubServiceDetail[], // Cast array of SubServiceDetail
    faqs: [
      {
        question: "What is the minimum salary to sponsor family?",
        answer: "The minimum salary requirement varies based on the family member being sponsored. For spouse/children, it's typically AED 4,000 (or AED 3,000 + accommodation). For parents, it's AED 20,000."
      },
      {
        question: "Do sponsored family members also need health insurance?",
        answer: "Yes, providing valid health insurance for all sponsored family members is a mandatory requirement for their residency visa."
      }
    ] as FAQ[]
  } as Service // Cast the entire Service object
  // You would add the data for Golden Visa, Tas-heel, Emirates ID, Medical Services here,
  // ensuring their subServices' content arrays are also correctly typed as ContentBlock[]
];

// Helper to find a specific service by slug
export const getServiceBySlug = (slug: string): Service | undefined => {
  return allServices.find(service => service.slug === slug);
};

// Helper to find a specific sub-service by main service slug and sub-service slug
export const getSubServiceBySlugs = (serviceSlug: string, subServiceSlug: string): SubServiceDetail | undefined => {
  const service = allServices.find(s => s.slug === serviceSlug);
  if (service) {
    return service.subServices.find(ss => ss.slug === subServiceSlug);
  }
  return undefined;
};