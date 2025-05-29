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
    url: "https://goo.gl/maps/your-location-url",
  },
  {
    icon: FaLinkedinIn,
    url: "https://linkedin.com/in/your-profile",
  },
  {
    icon: FaWhatsapp,
    url: "https://wa.me/yourNumber",
  },
  {
    icon: FaEnvelope,
    url: "mailto:example@example.com",
    text: "example@example.com",
  },
  {
    icon: FaPhoneAlt,
    url: "tel:+1234567890",
    text: "+1 234 567 890",
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
        'Office 504, Al Attar Business Center',
        'Al Barsha 1, Sheikh Zayed Road',
        'Dubai, United Arab Emirates',
        'P.O. Box 123456',
      ],
      link: "https://www.google.com/maps?q=Office+504,+Al+Attar+Business+Center,+Al+Barsha+1,+Sheikh+Zayed+Road,+Dubai,+United+Arab+Emirates"
    },
    officeTiming: {
      title: 'Office Timing:',
      lines: [
        'Sunday – Thursday: 9 AM to 6 PM',
        'Friday: 9 AM to 12 PM',
        'Saturday: Closed',
      ]
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5678070966956!2d55.20147981498661!3d25.110599683935293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43503b53f62b%3A0xc3f8f01c4e7f6d1!2sAl%20Attar%20Business%20Center!5e0!3m2!1sen!2sae!4v1678901234567!5m2!1sen!2sae',
  },
  contactUs: {
    heading: 'Contact Us',
    email: {
      label: 'info@amerandtasheel.ae',
      link: 'mailto:info@amerandtasheel.ae'
    },
    phone: {
      label: '+971 50 123 4567',
      link: 'tel:+971501234567'
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
