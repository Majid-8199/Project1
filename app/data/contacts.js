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

// // Before: import { ..., FaGlobe } from 'react-icons/fa';
// // Add specific icons from react-icons/fa to match what you use in HeaderContacts
// import {
//   FaMapMarkerAlt,
//   FaWhatsapp,
//   FaLinkedinIn,
//   FaPhoneAlt,
//   FaEnvelope,
//   FaGlobe,
// } from 'react-icons/fa';

// export const contactInfo = (lang) => [
//   {
//     icon: FaMapMarkerAlt,
//     url: "https://maps.app.goo.gl/YourActualGoogleMapsLinkHere", // Replace with actual Google Maps link
//     text: { en: "Location", ar: "الموقع" },
//     ariaLabel: { en: "Our Location on Map", ar: "موقعنا على الخريطة" },
//   },
//   {
//     icon: FaLinkedinIn,
//     url: "https://www.linkedin.com/company/amer-tasheel-services", // Replace with actual LinkedIn profile
//     text: { en: "LinkedIn", ar: "لينكد إن" },
//     ariaLabel: { en: "Amer and Tasheel Services LinkedIn Profile", ar: "ملف شركة عامر وتسهيل للخدمات على لينكد إن" },
//   },
//   {
//     icon: FaWhatsapp,
//     url: "https://wa.me/+971563032309",
//     text: { en: "WhatsApp", ar: "واتساب" },
//     ariaLabel: { en: "Message us on WhatsApp", ar: "راسلنا على واتساب" },
//   },
//   {
//     icon: FaEnvelope,
//     url: "mailto:amerandtasheel@gmail.com",
//     text: { en: "Email", ar: "البريد الإلكتروني" },
//     ariaLabel: { en: "Email Amer and Tasheel Services", ar: "البريد الإلكتروني لخدمات عامر وتسهيل" },
//   },
//   {
//     icon: FaPhoneAlt,
//     url: "tel:+971563032309",
//     text: { en: "+971 563032309", ar: "+٩٧١ ٥٦ ٣٠٣ ٢٣٠٩" }, // Localize numbers if preferred
//     ariaLabel: { en: "Call Amer and Tasheel Services", ar: "اتصل بخدمات عامر وتسهيل" },
//   },
//   // The separator and language toggle should be handled outside the map for better control
//   // { text: "|", className: "mx-1" }, // Removed from here
//   // {
//   //   icon: FaGlobe,
//   //   text: { en: "العربية", ar: "English" }, // This will be the language toggle
//   //   id: "language-toggle", // Add a unique ID for the language toggle
//   // },
// ];

// // Note: For the actual language toggle in the header,
// // you'll likely want a separate component or logic
// // that manages the `lang` state and then renders the `FaGlobe` icon
// // with the appropriate text (e.g., "العربية" when in English, "English" when in Arabic).
