import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa6'

const CTAButton = () => {
  return (
    <div 
    className='text-white p-10 flex flex-col gap-2 my-40'
    style={{
    background: 'linear-gradient(to left, #FFFFFF 0%, #11AB5D 50%, #FF0000 100%)',
    }}>
        <h2 className='text-xl'>Need Assistance? Let&#39;s Connect!</h2>
        <h1 className='text-4xl  font-bold w-[50%]'>Whether you have a question, need guidance, or want to get started — we&apos;re here for you.</h1> 
        <p>Reach out today and experience stress-free government services.</p>   
        <div className="flex items-center justify-start gap-2">
            <button className="relative overflow-hidden text-xs bg-white text-gn border-2 border-gn px-4 py-2 rounded-lg group transition-colors duration-300" >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1 font-bold">
                    Contact Us
                    <FaChevronRight />
                </span>
                <span className="absolute left-0 top-0 w-0 h-full bg-gn z-0 transition-all duration-300 group-hover:w-full" />
            </button>
            <button className="relative overflow-hidden text-xs bg-white text-gn border-2 border-gn px-4 py-2 rounded-lg group transition-colors duration-300" >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center gap-1 font-bold">
                    Message Us
                    <FaWhatsapp />
                </span>
                <span className="absolute left-0 top-0 w-0 h-full bg-gn z-0 transition-all duration-300 group-hover:w-full" />
            </button>
        </div>  
    </div>
  )
}

export default CTAButton