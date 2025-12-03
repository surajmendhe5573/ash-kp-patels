import React from 'react'
import Events from '../Home/Events'
import FAQs from '../Home/FAQs'
import ContactUs from '../Home/ContactUs'

const About = () => {
  return (
    <>
       <div className="relative bg-white h-fit py-40 flex flex-col justify-between">
      <div className="container mx-auto xl:px-16 md:px-10 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[#F8A813] lg:text-[48px] md:text-[34px] text-[28px] font-semibold font-montserrat ">About the School</h2>
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

    <div className='w-full py-20 '>
        <p className='font-normal lg:text-[28px] md:text-[24px] text-[20px] font-poppins text-[#2A4767] w-[80%] mx-auto '>Our institution focuses on preparing skilled, confident, value-based teachers who can inspire young minds and contribute positively to the education system.
We provide modern learning facilities, experienced faculty, practical exposure in schools, and character-building activities that shape student-teachers into responsible educators.</p>

    </div>

    <div className='w-full flex lg:flex-row flex-col gap-18 justify-center items-center xl:px-16 md:px-10 px-5 mt-20'>

        <div className='lg:w-[40%] w-full h-[500px] '>
            <img src="/assets/img1.png" loading='lazy' className='w-full h-full object-cover rounded-[20px] border-9 border-[#2A4767] '/>
        </div>

        <div className='lg:w-[60%] w-full '>
            <p className='font-extrabold md:text-[40px] text-[30px] text-[#F8A813] font-montserrat '>Principal's Message</p>
            <p className='font-medium md:text-[24px] text-[20px] text-[#2A4767]  font-poppins my-5'>Dear Students and Parents, <br></br><b className='font-medium italic '>Education is a journey of change, learning, and growth. At Maniba Arts College of Education, our goal is to develop professional teachers who are knowledgeable, confident, and committed to moral values.</b></p>
        
        <div className='w-full h-[1px] bg-[#2A4767] '></div>

                    <div className=' w-full flex flex-col gap-y-8 items-end mt-8'>

                <div className='w-full flex gap-x-5  '>
                     <div className='xl:w-[80px] xl:h-[80px] w-[50px] h-[50px] border border-[#2A4767] bg-white shrink-0 rounded-full flex justify-center items-center '>
                       <img src="/assets/Books.svg" className='xl:w-[54px] xl:h-[54px] w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-medium text-[24px] text-[#2A4767] font-poppins  '>Personality development, communication skills & leadership training</p>                 
                </div>

                <div className='w-full flex gap-x-5 '>
                    <div className='xl:w-[80px] xl:h-[80px] w-[50px] h-[50px] border border-[#2A4767] bg-white shrink-0 rounded-full flex justify-center items-center '>
                       <img src="/assets/Books.svg" className='xl:w-[54px] xl:h-[54px] w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-medium text-[24px] text-[#2A4767] font-poppins  '>School internships and real classroom teaching practice</p>                 
                </div>

                <div className='w-full flex gap-x-5 '>
                     <div className='xl:w-[80px] xl:h-[80px] w-[50px] h-[50px] border border-[#2A4767] bg-white shrink-0 rounded-full flex justify-center items-center '>
                       <img src="/assets/Books.svg" className='xl:w-[54px] xl:h-[54px] w-[24px] h-[24px] '/>
                    </div>
                    <p className='font-medium text-[24px] text-[#2A4767] font-poppins '>Value-based education rooted in discipline and responsibility</p>             
                </div>

            </div>
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

export default About