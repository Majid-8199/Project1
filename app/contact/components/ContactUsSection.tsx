'use client'

import Link from 'next/link';
import { useState, FormEvent, ChangeEvent } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FaEnvelope, FaPhone } from 'react-icons/fa6';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobileNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you'd send this data to an API endpoint
    console.log('Contact form submitted:', formData);
    alert('Message Sent! We will get back to you soon.');
    setFormData({
      fullName: '',
      mobileNumber: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className="bg-white text-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Left Section - Contact Info & Map */}
        <div className="bg-gn text-white p-8  relative">
          <h2 className="text-base text-black font-bold border-b-[3px] w-fit border-black uppercase tracking-widest mb-8">
            Visit <span className='text-rd'>Us</span>
          </h2>
          <div className='flex items-center justify-between w-full'>
            <div className='flex flex-col items-start justify-center'>
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Office Address:</h3>
                <p className="text-sm leading-relaxed">
                  Office 504, Al Attar Business Center <br />
                  Al Barsha 1, Sheikh Zayed Road <br />
                  Dubai, United Arab Emirates <br />
                  P.O. Box 123456
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">Office Timing:</h3>
                <p className="text-sm leading-relaxed">
                  Sunday – Thursday: 9 AM to 6 PM <br />
                  Friday: 9 AM to 12 PM <br />
                  Saturday: Closed
                </p>
              </div>
            </div>

            <div className="relative h-60 w-60 rounded-lg overflow-hidden mb-10 shadow-lg border-2 border-green-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.5678070966956!2d55.20147981498661!3d25.110599683935293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43503b53f62b%3A0xc3f8f01c4e7f6d1!2sAl%20Attar%20Business%20Center!5e0!3m2!1sen!2sae!4v1678901234567!5m2!1sen!2sae" // Replace with your actual map embed URL
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
              ></iframe>
            </div>
          </div>
          <div className="space-y-6 mb-10">
            <h3 className="text-base border-b-[3px] w-fit border-black font-bold text-black uppercase tracking-widest">Contact <span className='text-rd'>Us</span></h3>
            <div className='flex items-center justify-between'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <Link href="mailto:info@amerandtasheel.ae" className="flex items-center gap-4 text-white text-lg hover:underline group">
                  <FaEnvelope/>
                  info@amerandtasheel.ae
                </Link>
                <Link href="tel:+971501234567" className="flex items-center text-white text-lg hover:underline group gap-4">
                  <FaPhone/>
                  +971 50 123 4567
                </Link>
              </div>
              <button className="relative overflow-hidden text-xs bg-white text-gn border-2 border-white px-8 py-4 rounded-lg group transition-colors duration-300" >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-4 font-bold text-lg">
                    Message Us
                    <FaWhatsapp size={24}/>
                </span>
                <span className="absolute left-0 top-0 w-0 h-full bg-gn z-0 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section - Message Form */}
        <div className="p-8 bg-gray-50 flex flex-col justify-center">
          <h3 className="text font-bold border-b-[3px] border-rd w-fit uppercase tracking-widest mb-8 text-center lg:text-left">
            <span className='text-rd'>Message</span> / <span className='text-gn'>Enquiry</span>
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="fullName"
                id="contactFullName"
                value={formData.fullName}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base"
                placeholder="Enter Full Name"
                required
              />
            </div>
            <div>
              <input
                type="tel"
                name="mobileNumber"
                id="contactMobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base"
                placeholder="Enter Mobile Number"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="contactEmail"
                value={formData.email}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                id="contactMessage"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base resize-y"
                placeholder="Write your message or inquiry here..."
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-4 px-8 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-gn hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-colors duration-300 transform hover:-translate-y-0.5"
              >
                Submit Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;