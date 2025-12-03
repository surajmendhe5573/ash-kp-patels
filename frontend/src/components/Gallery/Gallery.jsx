import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { ArrowLeft, ArrowRight,  } from "lucide-react";
import FAQs from '../Home/FAQs'
import ContactUs from '../Home/ContactUs'

const Gallery = () => {

   const pagRef = useRef(null);
    const prevRef = useRef(null);
    const nextRef = useRef(null);

  return (
    <>
       <div className="relative bg-white h-fit py-40 flex flex-col justify-between">
      <div className="container mx-auto xl:px-16 md:px-10 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-[#F8A813] lg:text-[48px] md:text-[34px] text-[28px] font-semibold font-montserrat ">Gallery</h2>
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


    <div className="w-full font-poppins py-20 ">
      
        <p className="font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] text-center ">
          Diwali Festival Celebration
        </p>

      <p className="xl:w-[70%] w-[95%] mx-auto font-normal md:text-[24px] text-[20px] text-[#2A4767] text-center mt-5">
        Our nurturing environment encourages every student to think creatively,
        learn enthusiastically, and grow confidently.
      </p>


      <div className="w-full relative">

<div className="absolute top-0 left-0 h-full w-24 z-20 pointer-events-none bg-gradient-to-r from-white via-white/60 to-transparent"></div>
  <div className="absolute top-0 right-0 h-full w-24 z-20 pointer-events-none bg-gradient-to-l from-white via-white/60 to-transparent"></div>
         <div className="absolute z-30 -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <button
                  ref={prevRef}
                  className=""
                >
                  <ArrowLeft size={18} color="#1E1E1E"/>
                </button>
        
                <div ref={pagRef} className="flex gap-2"></div>
        
                <button
                  ref={nextRef}
                  className=""
                >
                  <ArrowRight size={18} color="#1E1E1E" />
                </button>
              </div>

       <Swiper
        loop={true}
         modules={[Navigation, A11y, Pagination, Autoplay]}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.params.pagination.el = pagRef.current;
                  swiper.params.pagination.clickable = true;
                }}
                pagination={{ el: pagRef.current, clickable: true }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={25}
                       breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
           1512: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
                className="mySwiper w-full mt-20"
      >
        <SwiperSlide className="w-full ">
          <img src="/assets/event1.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event2.jpg"  loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event3.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event1.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event2.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event3.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>

      </Swiper>
      <style>{`
        .swiper-pagination-bullet {
          background-color: #D9D9D9 !important;       
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #2A4767 !important;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
      </div>


    </div>

    <div className="w-full font-poppins py-20 ">
      
        <p className="font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] text-center ">
          Diwali Festival Celebration
        </p>

      <p className="xl:w-[70%] w-[95%] mx-auto font-normal md:text-[24px] text-[20px] text-[#2A4767] text-center mt-5">
        Our nurturing environment encourages every student to think creatively,
        learn enthusiastically, and grow confidently.
      </p>


      <div className="w-full relative">

<div className="absolute top-0 left-0 h-full w-24 z-20 pointer-events-none bg-gradient-to-r from-white via-white/60 to-transparent"></div>
  <div className="absolute top-0 right-0 h-full w-24 z-20 pointer-events-none bg-gradient-to-l from-white via-white/60 to-transparent"></div>
         <div className="absolute z-30 -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
                <button
                  ref={prevRef}
                  className=""
                >
                  <ArrowLeft size={18} color="#1E1E1E"/>
                </button>
        
                <div ref={pagRef} className="flex gap-2"></div>
        
                <button
                  ref={nextRef}
                  className=""
                >
                  <ArrowRight size={18} color="#1E1E1E" />
                </button>
              </div>

       <Swiper
        loop={true}
         modules={[Navigation, A11y, Pagination, Autoplay]}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.params.pagination.el = pagRef.current;
                  swiper.params.pagination.clickable = true;
                }}
                pagination={{ el: pagRef.current, clickable: true }}
                navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                slidesPerView={1}
                spaceBetween={25}
                       breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
           1512: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
                className="mySwiper w-full mt-20"
      >
        <SwiperSlide className="w-full ">
          <img src="/assets/event1.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event2.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event3.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event1.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event2.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>
         <SwiperSlide className="w-full ">
          <img src="/assets/event3.jpg" loading='lazy' className="w-full h-[400px] rounded-[45px] object-cover "/>
        </SwiperSlide>

      </Swiper>
      <style>{`
        .swiper-pagination-bullet {
          background-color: #D9D9D9 !important;       
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #2A4767 !important;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
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

export default Gallery