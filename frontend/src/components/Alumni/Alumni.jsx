import React from 'react'
import FAQs from '../Home/FAQs'
import ContactUs from '../Home/ContactUs'


const Alumni = () => {
  return (
    <>
       <div className="relative bg-white h-fit py-40 flex flex-col justify-between">
      <div className="container mx-auto xl:px-16 md:px-10 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[#F8A813] lg:text-[48px] md:text-[34px] text-[28px] font-semibold font-montserrat ">Alumni</h2>
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

    <div className='w-full xl:px-16 md:px-10 px-5 py-20'>

      <p className='font-semibold md:text-[36px] text-[26px] font-montserrat text-[#F8A813] text-center'>Ash Education Alumni Network A Lifelong Community</p>
      <p className='font-normal md:text-[24px] text-[20px] font-poppins text-[#2A4767] text-center mt-10 '>The Ash Education Alumni Network is a vibrant, ever-growing family of students who have walked the halls of our institutions and carried their learnings into the world. Our alumni represent the values of integrity, excellence, and service — making significant contributions across industries, academia, and social causes.</p>
      <p className='font-normal md:text-[24px] text-[20px] font-poppins text-[#2A4767] text-center mt-10 '>As an alumnus, you remain an integral part of our journey. This platform is designed to reconnect you with classmates, mentors, and your alma mater. Whether you're here to network professionally, give back to the next generation, or simply revisit cherished memories, the Ash Education Alumni Network ensures you're never far from home. Join us in strengthening the legacy, sharing your success stories, and inspiring future leaders.</p>
    
    <div className='w-full flex justify-center'>
      <button className='w-fit px-14 mt-14 h-[50px] rounded-[50px] bg-[#F8A813] text-white font-semibold text-[20px] font-poppins '>Join Now</button>
    </div>


    <div className='w-full rounded-[50px] bg-white drop-shadow-md drop-shadow-[#00000040] py-14 my-50'>

      <div className='w-full flex flex-col items-center '>
      <p className='font-extrabold text-[34px] font-inter text-[#F8A813] '>Alumni <b className='text-[#2A4767]'>Event</b></p>
      <p className='font-medium text-[24px] font-poppins text-[#2A4767] mt-6'>Coming Soon!</p>    

      <div className="w-[90%] h-[2px] bg-gradient-to-r mt-20 from-transparent via-amber-300 to-amber-100 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-100 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>  
      </div>

      <div className='w-full flex flex-col items-center mt-20'>
      <p className='font-extrabold text-[34px] font-inter text-[#F8A813] text-center '>Alumni <b className='text-[#2A4767]'>News & Updates</b></p>
      <p className='font-medium text-[24px] font-poppins text-[#2A4767] mt-6'>Coming Soon!</p>    

      <div className="w-[90%] h-[2px] bg-gradient-to-r mt-20 from-transparent via-amber-300 to-amber-100 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-100 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>  
      </div>

      <div className='w-full flex flex-col items-center mt-20'>
      <p className='font-extrabold text-[34px] font-inter text-[#F8A813] '>Donations</p>
      <button className='w-fit px-14 h-[50px] rounded-[50px] bg-[#F8A813] text-white font-semibold text-[20px] mt-4 '>Donate Now</button>
      </div>

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

export default Alumni