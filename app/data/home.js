import { FaChevronRight, FaWhatsapp } from 'react-icons/fa';

export const heroSlidesContent = [
  {
    src: '/home/Hero1.webp',
    heading: 'Your One-Stop Destination for All Government Services.',
    subheading: 'From visa applications to labor contracts, get all your government services handled hassle-free.',
    buttons: [
      {
        label: 'Apply Online',
        variant: 'primary',
        link: '/apply-online'
      },
      {
        label: 'Contact Us via Whatsapp',
        variant: 'whatsapp',
        icon: FaWhatsapp,
        link: 'https://wa.me/+971563032309'
      },
    ],
  },
  {
    src: '/home/Hero4.webp',
    heading: 'Popular Visas Made Simple: Golden, Family & Tourist.',
    subheading: 'Apply for the UAE’s most sought-after visas with confidence and expert support from our team.',
    buttons: [
      {
        label: 'Golden Visa',
        variant: 'primary',
        icon: FaChevronRight,
        link: '/services/amer-services/golden-visa'
      },
      {
        label: 'Family Visa',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services/amer-services/family-visa'
      },
      {
        label: 'Tourist Visa',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services/amer-services/tourist-visa'
      }
    ],
  },
  {
    src: '/home/Hero3.webp',
    heading: 'Official Dubai & UAE Services, Delivered with Pride.',
    subheading: 'We handle the paperwork — you focus on your future. Trusted for visas, labor, Emirates ID & more.',
    buttons: [
      {
        label: 'Amer Services',
        variant: 'primary',
        icon: FaChevronRight,
        link: '/services/amer-services'
      },
      {
        label: 'Tas-heel Services',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services/tasheel-services'
      },
      {
        label: 'Other Services',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/services'
      }
    ],
  },
  {
    src: '/home/Hero2.webp',
    heading: 'Everything Explained. Everything Done Right.',
    subheading: 'We walk you through every process, ensuring your forms and documents are handled with precision and care.',
    buttons: [
      {
        label: 'Our Services',
        variant: 'primary',
        icon: FaChevronRight,
        link: '/services'
      },
      {
        label: 'Contact Us',
        variant: 'whatsapp',
        icon: FaChevronRight,
        link: '/contact'
      }
    ],
  },
];

export const aboutUsContent = {
  heading: {
    title: "Fast.",
    highlight: "Simple.",
    subtitle: "Government Services Simplified."
  },
  description: `We assist individuals and businesses with a full range of UAE government services — from visa applications and Emirates ID to labour contracts, medical typing, and PRO services. Whether you're applying for a Golden Visa, setting up a business, or resolving legal paperwork, our team ensures smooth, error-free processing — every step of the way.`,
  buttonText: "Know More",
  image: {
    src: "/home/about.webp",
    alt: "Government services"
  }
};
