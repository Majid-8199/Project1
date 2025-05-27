import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';

const contactInfo = [
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

export default contactInfo;
