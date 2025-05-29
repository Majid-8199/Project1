import { FaChevronRight, FaWhatsapp } from 'react-icons/fa';

export const heroSlidesContent = [
  {
    src: '/home/Hero1.jpg',
    heading: 'Your One-Stop Destination for All Government Services.',
    subheading: 'From visa applications to labor contracts, get all your government services handled hassle-free.',
    buttons: [
      {
        label: 'Apply Online',
        variant: 'primary',
      },
      {
        label: 'Contact Us via Whatsapp',
        variant: 'whatsapp',
        icon: FaWhatsapp,
      },
    ],
  },
  {
    src: '/home/Hero2.jpg',
    heading: 'Everything Explained. Everything Done Right.',
    subheading: 'We walk you through every process, ensuring your forms and documents are handled with precision and care.',
    buttons: [
      {
        label: 'Our Services',
        variant: 'primary',
        icon: FaChevronRight,
      },
      {
        label: 'Contact Us',
        variant: 'whatsapp',
        icon: FaChevronRight,
      }
    ],
  },
  {
    src: '/home/Hero3.jpg',
    heading: 'Official Dubai & UAE Services, Delivered with Pride.',
    subheading: 'We handle the paperwork — you focus on your future. Trusted for visas, labor, Emirates ID & more.',
    buttons: [
      {
        label: 'Amer Services',
        variant: 'primary',
        icon: FaChevronRight,
      },
      {
        label: 'Tas-heel Services',
        variant: 'whatsapp',
        icon: FaChevronRight,
      },
      {
        label: 'Other Services',
        variant: 'whatsapp',
        icon: FaChevronRight,
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
    src: "/home/about.jpg",
    alt: "Government services"
  }
};
