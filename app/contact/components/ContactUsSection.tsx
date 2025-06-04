'use client';

import Link from 'next/link';
import React, { useState, FormEvent, ChangeEvent } from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6';
import { contactContent } from '../../data/contacts';
import { MdLocationOn } from 'react-icons/md';

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
        {/* Left Section */}
        <div className="bg-gre text-white p-8 relative">
          <h2 className="text-base text-black font-bold border-b-[3px] w-fit border-black uppercase tracking-widest mb-8">
            {contactContent.visitUs.heading.split(' ')[0]}{' '}
            <span className="text-rd">{contactContent.visitUs.heading.split(' ')[1]}</span>
          </h2>

          <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row items-center xs:items-start md:items-center lg:items-start justify-between w-full'>
            <div className='flex flex-col items-start justify-center'>
              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">{contactContent.visitUs.officeAddress.title}</h3>
                <p className="flex items-start gap-2">
                  <MdLocationOn className="mt-1" />
                  <Link
                    href={contactContent.visitUs.officeAddress.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {contactContent.visitUs.officeAddress.lines.map((line, idx) => (
                      <React.Fragment key={idx}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </Link>
                </p>
              </div>

              <div className="mb-10">
                <h3 className="text-xl font-bold mb-4">{contactContent.visitUs.officeTiming.title}</h3>
                <p className="text-sm leading-relaxed">
                  {contactContent.visitUs.officeTiming.lines.map((line, i) => (
                    <span key={i}>{line}<br /></span>
                  ))}
                </p>
              </div>
            </div>

            <div className="relative h-60 w-60 rounded-lg overflow-hidden mb-10 shadow-lg border-2 border-green-500">
              <iframe
                src={contactContent.visitUs.mapEmbedUrl}
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
            <h3 className="text-base border-b-[3px] w-fit border-black font-bold text-black uppercase tracking-widest">
              {contactContent.contactUs.heading.split(' ')[0]}{' '}
              <span className="text-rd">{contactContent.contactUs.heading.split(' ')[1]}</span>
            </h3>

            <div className='flex flex-col md:flex-row lg:flex-col xl:flex-row gap-10 xl:gap-0 items-center xs:items-start lg:items-start justify-between'>
              <div className='flex flex-col items-start justify-center gap-4'>
                <Link href={contactContent.contactUs.email.link} className="flex items-center gap-4 text-white text-lg hover:underline group">
                  <FaEnvelope />
                  {contactContent.contactUs.email.label}
                </Link>
                <Link href={contactContent.contactUs.phone.link} className="flex items-center text-white text-lg hover:underline group gap-4">
                  <FaPhone />
                  {contactContent.contactUs.phone.label}
                </Link>
              </div>
              <button className="relative overflow-hidden text-xs bg-white text-gre border-2 border-white px-8 py-4 rounded-lg group transition-colors duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-4 font-bold text-lg">
                  {contactContent.contactUs.whatsapp}
                  <FaWhatsapp size={24} />
                </span>
                <span className="absolute left-0 top-0 w-0 h-full bg-gre z-0 transition-all duration-300 group-hover:w-full" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8 bg-gray-50 flex flex-col justify-center">
          <h3 className="text font-bold border-b-[3px] border-rd w-fit uppercase tracking-widest mb-8 text-center lg:text-left">
            <span className='text-rd'>{contactContent.messageForm.heading.split(' / ')[0]}</span> / <span className='text-gre'>{contactContent.messageForm.heading.split(' / ')[1]}</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="fullName"
                id="contactFullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder={contactContent.messageForm.inputs.fullName}
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base"
              />
            </div>
            <div>
              <input
                type="tel"
                name="mobileNumber"
                id="contactMobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                placeholder={contactContent.messageForm.inputs.mobileNumber}
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                id="contactEmail"
                value={formData.email}
                onChange={handleChange}
                placeholder={contactContent.messageForm.inputs.email}
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base"
              />
            </div>
            <div>
              <textarea
                name="message"
                id="contactMessage"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder={contactContent.messageForm.inputs.message}
                required
                className="block w-full border border-gray-300 rounded-lg shadow-sm py-2 px-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-green-600 focus:border-green-600 text-base resize-y"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center py-4 px-8 border border-transparent rounded-lg shadow-lg text-lg font-bold text-white bg-gre hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600 transition-colors duration-300 transform hover:-translate-y-0.5"
              >
                {contactContent.messageForm.inputs.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
