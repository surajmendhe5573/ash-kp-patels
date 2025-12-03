import React from 'react'
import FAQs from '../Home/FAQs'
import ContactUs from '../Home/ContactUs'

const TrustBody = () => {
  return (
    <>
       <div className="relative bg-white h-fit py-40 flex flex-col justify-between">
      <div className="container mx-auto xl:px-16 md:px-10 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[#F8A813] lg:text-[48px] md:text-[34px] text-[28px] font-semibold font-montserrat ">Trust Body</h2>
        </div>
        <div className="md:w-1/2 text-[#2A4767] lg:text-[28px] md:text-[24px] text-[20px] font-medium font-poppins leading-relaxed text-center md:text-left">
          <p>
           College of Education B.Ed Vijapur was established with the belief that quality teacher training and strong moral values are the foundation of a better education system and society.
          </p>
        </div>
      </div>

      {/* The curved bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 100C300 0 1140 0 1440 100"
            fill="white"
            stroke="#000" // Tailwind gray-400 for the stroke
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>

    <div className='w-full py-20 '>
        <p className='font-semibold text-[34px] font-montserrat text-[#F8A813] text-center '>Our Faculty</p>

        <div className='w-full flex flex-row flex-wrap xl:px-16 md:px-10 px-5 mt-20 lg:gap-20 gap-10 justify-center '>

         {[1, 2, 3].map((i) => (   <div className='lg:w-[400px] md:w-[300px] w-full h-[400px] relative '>

               <div className='w-full h-full absolute bg-gradient-to-b from-transparent pb-3 to-black/70 top-0 left-0 rounded-[40px] flex flex-col items-center justify-end '>
                  <p className='font-bold xl:text-[35px] md:text-[26px] text-[22px] font-montserrat text-white '>Girishbhai Patel</p>
                  <p className='font-semibold xl:text-[30px] md:text-[22px] font-poppins text-white '>Vice President</p>
               </div>
               <img src="/assets/faculty.png" loading='lazy' className='w-full h-full rounded-[40px] object-cover '/>
            </div>  ))}

        </div>
        
    </div>   

      <div className="my-40 ">
        <FAQs />
      </div>

      <div className="mt-40 mb-10 ">
        <ContactUs />
      </div>
    </>
  )
}

export default TrustBody