import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';

export const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    url: "https://maps.app.goo.gl/XHmfD5bZUDTNKSbZA",
  },
  {
    icon: FaLinkedinIn,
    url: "https://www.linkedin.com/",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/+971563032309",
  },
  {
    icon: FaEnvelope,
    url: "mailto:amerandtasheel@gmail.com",
    text: "amerandtasheel@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    url: "tel:+9710563032309",
    text: "+971 563032309",
  },
  {
    text: "|"
  },
  {
    icon: FaGlobe,
    text: "العربية",
  },
];

export const heroContent = {
  title: "We’re Here to Help — Reach Out Anytime",
  subtitle: "Have questions or need help with a service? Our team is here to assist you — online, by phone, or in person.",
  image: "/contact/Hero.svg",
};

export const contactContent = {
  visitUs: {
    heading: 'Visit Us',
    officeAddress: {
      title: 'Office Address:',
      lines: [
        'Al Rolla Rd, Al Raffa,',
        'Bur Dubai, Dubai',
        'United Arab Emirates'
      ],
      link: "https://maps.app.goo.gl/XHmfD5bZUDTNKSbZA"
    },
    officeTiming: {
      title: 'Office Timing:',
      lines: [
        'Sunday – Thursday: 9 AM to 6 PM',
        'Friday: 9 AM to 12 PM',
        'Saturday: Closed',
      ]
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.3997089888203!2d55.28494337521355!3d25.25713607767238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f439d5c463977%3A0x9ec8bd258056919!2sAmer%20And%20Tasheel%20services!5e0!3m2!1sen!2sbh!4v1748918957656!5m2!1sen!2sbh',
  },
  contactUs: {
    heading: 'Contact Us',
    email: {
      label: 'amerandtasheel@gmail.com',
      link: 'mailto:amerandtasheel@gmail.com'
    },
    phone: {
      label: '+971 56 303 2309',
      link: 'tel:+971563032309'
    },
    whatsapp: 'Message Us'
  },
  messageForm: {
    heading: 'Message / Enquiry',
    inputs: {
      fullName: 'Enter Full Name',
      mobileNumber: 'Enter Mobile Number',
      email: 'Enter Email',
      message: 'Write your message or inquiry here...',
      submit: 'Submit Message'
    }
  }
};
