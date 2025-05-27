import { FaChevronRight, FaWhatsapp } from 'react-icons/fa';

export const heroSlides = [
  {
    src: '/homepage/Hero1.jpg',
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
    src: '/homepage/Hero2.jpg',
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
    src: '/homepage/Hero3.jpg',
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
