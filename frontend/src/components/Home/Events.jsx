import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Events = () => {

    const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div className="w-full font-poppins xl:px-16 md:px-10 px-5">
      <div className="flex gap-x-10 items-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-amber-400 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-400 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>

        <p className="font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] whitespace-nowrap ">
          Events
        </p>

        <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-300 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-400 [mask-image:linear-gradient(to-left,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>
      </div>
      <p className="xl:w-[70%] w-[95%] mx-auto font-normal md:text-[24px] text-[20px] text-[#2A4767] text-center mt-5">
        Our nurturing environment encourages every student to think creatively,
        learn enthusiastically, and grow confidently.
      </p>

      <div className="w-full grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-20">

         <div className="w-full h-fit rounded-[30px] bg-white drop-shadow-lg drop-shadow-[#00000040] p-5 ">

           <div className="w-fit border-b border-b-[#F8A813]  ">
            <p className="font-medium text-[24px] text-black ">Navratri Celebration</p>
            </div>
            <p className="font-medium text-[20px] text-[#F8A813] mt-1 ">02/10/2024</p>

            <div className="w-full h-[298px] rounded-[20px] mt-2 ">
                <img src="/assets/img1.png" loading='lazy' className="w-full h-full rounded-[30px] object-cover "/>
            </div>

            <div className="w-full flex gap-x-3 mt-3 ">
                <div className="img w-[50%] h-[120px]  ">
                   <img src="/assets/img1.png" loading='lazy' className="w-full h-full object-cover rounded-[20px] "/>
                </div>

                <div className="img w-[50%] h-[120px]  ">
                   <img src="/assets/img1.png" loading='lazy' className="w-full h-full object-cover rounded-[20px] "/>
                </div>

                <div className="w-[50%] h-[120px] bg-[#F8A813] flex justify-center items-center rounded-[20px]">
                  <ArrowRight color="white" size={40}/>
                </div>

            </div>

        </div>

        <div className="w-full h-fit rounded-[30px] bg-white drop-shadow-lg drop-shadow-[#00000040] p-5 ">

           <div className="w-fit border-b border-b-[#F8A813]  ">
            <p className="font-medium text-[24px] text-black ">Navratri Celebration</p>
            </div>
            <p className="font-medium text-[20px] text-[#F8A813] mt-1 ">02/10/2024</p>

            <div className="w-full h-[298px] rounded-[20px] mt-2 ">
                <img src="/assets/img1.png" loading='lazy' className="w-full h-full rounded-[30px] object-cover "/>
            </div>

            <div className="w-full flex gap-x-3 mt-3 ">
                <div className="img w-[50%] h-[120px]  ">
                   <img src="/assets/img1.png" loading='lazy' className="w-full h-full object-cover rounded-[20px] "/>
                </div>

                <div className="img w-[50%] h-[120px]  ">
                   <img src="/assets/img1.png" loading='lazy' className="w-full h-full object-cover rounded-[20px] "/>
                </div>

                <div className="w-[50%] h-[120px] bg-[#F8A813] flex justify-center items-center rounded-[20px]">
                  <ArrowRight color="white" size={40}/>
                </div>

            </div>

        </div>

         <div className="w-full h-fit rounded-[30px] bg-white drop-shadow-lg drop-shadow-[#00000040] p-5 ">

           <div className="w-fit border-b border-b-[#F8A813]  ">
            <p className="font-medium text-[24px] text-black ">Navratri Celebration</p>
            </div>
            <p className="font-medium text-[20px] text-[#F8A813] mt-1 ">02/10/2024</p>

            <div className="w-full h-[298px] rounded-[20px] mt-2 ">
                <img src="/assets/img1.png" loading='lazy' className="w-full h-full rounded-[30px] object-cover "/>
            </div>

            <div className="w-full flex gap-x-3 mt-3 ">
                <div className="img w-[50%] h-[120px]  ">
                   <img src="/assets/img1.png" loading='lazy' className="w-full h-full object-cover rounded-[20px] "/>
                </div>

                <div className="img w-[50%] h-[120px]  ">
                   <img src="/assets/img1.png" loading='lazy' className="w-full h-full object-cover rounded-[20px] "/>
                </div>

                <div className="w-[50%] h-[120px] bg-[#F8A813] flex justify-center items-center rounded-[20px]">
                  <ArrowRight color="white" size={40}/>
                </div>

            </div>

        </div>

      </div>

      
      <Link to="/events" onClick={()=>handleLinkClick()} className="w-fit md:h-[50px] h-[45px] bg-[#F8A813] rounded-[50px] text-white font-semibold md:text-[20px] text-[16px] flex justify-center items-center gap-x-4 mx-auto mt-12 px-8">
        See More 
      </Link>
    </div>
  );
};

export default Events;
