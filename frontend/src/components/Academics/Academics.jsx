import React from 'react'
import Events from '../Home/Events'
import FAQs from '../Home/FAQs'
import ContactUs from '../Home/ContactUs'
import ProgramShowcase from './ProgramShowcase.jsx'

const Academics = () => {
  return (
    <>
       <div className="relative bg-white h-fit py-40 flex flex-col justify-between">
      <div className="container mx-auto xl:px-16 md:px-10 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[#F8A813] lg:text-[48px] md:text-[34px] text-[28px] font-semibold font-montserrat ">Academics</h2>
        </div>
        <div className="md:w-1/2 text-[#2A4767] lg:text-[28px] md:text-[24px] text-[20px] font-medium font-poppins leading-relaxed text-center md:text-left">
          <p>
            College of Education B.Ed Vijapur was established with the belief that quality
            teacher training and strong moral values are the foundation of a better
            education system and society.
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

<div className='py-20 xl:px-16 md:px-10 px-5'>

          <div className="flex gap-x-10 items-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-amber-400 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-400 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>

        <p className="font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] whitespace-nowrap ">
          Academic Programs
        </p>

        <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-300 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-400 [mask-image:linear-gradient(to-left,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>
      </div>

       <p className="xl:w-[70%] w-[95%] mx-auto font-normal md:text-[24px] text-[20px] text-[#2A4767] text-center mt-5">
       Our academic environment encourages every student-teacher to think creatively, learn enthusiastically, and grow into confident future educators.
      </p>

          <div className="min-h-screen grid place-items-center ">
      <ProgramShowcase
        image="/assets/img1.png" // or keep default
        programsLeft={["Program 1", "Program 2", "Program 3"]}
        programsRight={["Program 4", "Program 5", "Program 6"]}
      />
    </div>



</div>

    <div className="my-20 ">
        <Events />
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

export default Academics