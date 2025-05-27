'use client'
// components/ServiceFaqs.tsx
import React, { useState } from 'react';
import { FAQ } from '../../../interfaces/services';

interface ServiceFaqsProps {
  faqs: FAQ[];
}

const ServiceFaqs: React.FC<ServiceFaqsProps> = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 bg-lightGray">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-4xl font-bold text-center text-darkGray mb-12 relative pb-4">
          Frequently Asked Questions
          <span className="block w-24 h-1 bg-primaryRed mx-auto mt-2"></span>
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full text-left p-6 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-darkGray">{faq.question}</span>
                <span className="text-primaryGreen">
                  {openIndex === index ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path></svg>
                  )}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-mediumGray">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceFaqs;