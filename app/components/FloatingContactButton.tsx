import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa6';

export default function FloatingContactButton() {
  return (
    <Link
      href="https://wa.me/+971563032309"
      className="fixed bottom-6 right-6 z-[9999] bg-gre hover:bg-emerald-700 text-white p-4 rounded-full shadow-lg transition duration-300"
      aria-label="Call Us"
    >
      <FaWhatsapp className="text-xl" />
    </Link>
  );
}


