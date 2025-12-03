import React from 'react'
import {Link} from "react-router-dom"

const AboutUs = () => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div className='w-full  xl:px-16 md:px-10 px-5 '>

        <div className='flex gap-x-10 items-center'>

          <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-amber-400 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-400 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
    </div>

            <p className='font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] whitespace-nowrap '>About Us</p>

  <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-300 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-400 [mask-image:linear-gradient(to-left,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
    </div>
        </div>

        <p className='font-normal md:text-[24px] text-[20px] font-poppins text-[#2A4767] mt-5 text-center '>Established in 1989, Maniba Arts College of Education has over 35 years of dedicated service in the field of teacher training and value-based education. Our institution is committed to nurturing future educators who are skilled, knowledgeable, and rooted in human values.</p>

        <div className='w-full flex xl:flex-row justify-between flex-col gap-20 mt-20'>
           
           <div className='xl:w-[50%] w-full h-[500px]  '>
              <img src="/assets/img.png" loading='lazy' className='w-full h-full object-cover rounded-[20px] '/>
           </div>

           <div className='xl:w-[50%] w-full h-[500px] flex flex-col gap-y-10  '>
             
             <div className='w-full flex gap-x-5  '>

               <div className='w-[50%] h-[200px] rounded-[20px] border-dashed border border-[#2A4767] bg-[#FFF6E5] flex flex-col justify-center items-center gap-y-1 '>
                  <p className='font-bold text-[30px] font-montserrat text-[#F8A813] '>700</p>
                  <p className='font-normal text-[20px] font-poppins text-[#2A4767] text-center '>Students Enrolled</p>
               </div>

                <div className='w-[50%] h-[200px] rounded-[20px] border-dashed border border-[#2A4767] bg-[#FFF6E5] flex flex-col justify-center items-center gap-y-1 '>
                  <p className='font-bold text-[30px] font-montserrat text-[#F8A813] '>20</p>
                  <p className='font-normal text-[20px] font-poppins text-[#2A4767] text-center'>Years of Experience</p>
               </div>

                <div className='w-[50%] h-[200px] rounded-[20px] border-dashed border border-[#2A4767] bg-[#FFF6E5] flex flex-col justify-center items-center gap-y-1 '>
                  <p className='font-bold text-[30px] font-montserrat text-[#F8A813] '>30+</p>
                  <p className='font-normal text-[20px] font-poppins text-[#2A4767] text-center'>Programs Offered</p>
               </div>

             </div>

             <div className='w-full h-[260px] rounded-[20px] '>
                <img src="/assets/img.png" loading='lazy' className='w-full h-full object-cover rounded-[20px]'/>
             </div>

           </div>

        </div>

        <p className='font-normal text-[24px] font-poppins text-[#2A4767] text-center mt-10 '>With experienced faculty, structured B.Ed curriculum, modern teaching facilities, and practical training in schools, we prepare students to become confident teachers capable of shaping young minds and strengthening the education system.</p>
    
      <Link to="/about-us" onClick={()=>handleLinkClick()} className="w-fit md:h-[50px] h-[45px] font-poppins bg-[#F8A813] rounded-[50px] text-white font-semibold md:text-[20px] text-[16px] flex justify-center items-center gap-x-4 mx-auto mt-12 px-8">
        See More 
      </Link>
    </div>
  )
}

export default AboutUs