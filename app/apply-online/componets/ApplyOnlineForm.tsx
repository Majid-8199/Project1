'use client'

import Image from 'next/image';

const ApplyOnlineForm = () => {

  return (
    <section className='flex items-center justify-center h-[800px] m-20'>
      <div className="relative p-16 flex flex-col justify-center text-black h-full w-[45%] rounded-3xl">
        <Image
            src="/homepage/about.jpg" // Ensure this image exists in public/images
            alt="Person filling out application form"
            layout="fill"
            objectFit="cover"
            className="absolute opacity-90 rounded-3xl"
          />
        <div className='absolute z-10'>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 leading-relaxed">
          <span className="text-red-600 block">Start Your Application</span>
          <span className="text-green-600 block">Fast, Secure, &</span>
          <span className="text-black">Hassle-Free.</span>
        </h2>
        <p className="text-3xl font-bold text-white">
          Choose your service, submit your details, and our dedicated team will get back to you promptly. Your seamless experience begins here.
        </p>
        </div>
      </div>
      <div className='w-[40%]'>
        <p className='text-rd text-lg font-bold border-b-[3px] border-rd w-fit ml-10'>Apply <span className='text-gn'>Online</span></p>
        <iframe className='w-full h-[700px]' src="https://amer.zeyora.app/crm/forms/wtl/3250cfa540aeb609361b36cfb97d5b71"></iframe>
      </div>
    </section>
  );
};

export default ApplyOnlineForm;