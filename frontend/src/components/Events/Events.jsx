import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";

const Events = () => {

  return (
    <div className="w-full  font-poppins xl:px-16 md:px-10 px-5">


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

      
     
    </div>
  );
};

export default Events;
