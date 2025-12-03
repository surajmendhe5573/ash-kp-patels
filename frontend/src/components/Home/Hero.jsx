import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/effect-fade';
import { ArrowLeft, ArrowRight,  } from "lucide-react";
import {Link} from "react-router-dom"

const Hero = () => {
  const pagRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

    const imgs = ["/assets/img1.png", "/assets/img2.jpg", "/assets/img3.jpg"]

  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <div className="relative w-full xl:px-16 md:px-10 px-5 mt-10">
      {/* Pagination + Arrows on top center */}
      <div className="absolute z-30 bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <button
          ref={prevRef}
          className=""
        >
          <ArrowLeft size={18} color="white"/>
        </button>

        <div ref={pagRef} className="flex gap-2"></div>

        <button
          ref={nextRef}
          className=""
        >
          <ArrowRight size={18} color="white" />
        </button>
      </div>

      <Swiper
        modules={[Navigation, A11y, Pagination, Autoplay, EffectFade]}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.params.pagination.el = pagRef.current;
          swiper.params.pagination.clickable = true;
        }}
        pagination={{ el: pagRef.current, clickable: true }}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        effect={'fade'}
        slidesPerView={1}
        spaceBetween={25}
        className="mySwiper w-full"
      >
        {imgs.map((i) => (
          <SwiperSlide
            
            className="xl:h-[900px] h-[600px] rounded-[20px] relative"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[#00000080] rounded-[20px] flex flex-col justify-center items-center">
              <p className="font-extrabold md:text-[44px] text-[20px] text-white font-montserrat text-center ">Nurturing Young Minds for a Brighter Tomorrow</p>
              <p className="font-medium md:text-[24px] text-[12px] text-white font-poppins mt-3 text-center ">At B.ED Vijaypur, We believe every child is unique and capable of greatness.</p>
              <Link to="/academics" onClick={()=>handleLinkClick()}>
              <button className="w-fit md:h-[50px] h-[35px] rounded-[50px] cursor-pointer bg-[#FF5500] px-10 text-white md:text-[20px] text-[12px] font-montserrat font-bold mt-5 ">Explore Academics</button>
              </Link>
            </div>
            <img
              src={i}
              alt=""
              className="block w-full xl:h-[900px] h-[600px] object-cover  rounded-[20px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles for pink dots */}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #ffffff !important;       
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #F8A813 !important;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </div>
  );
};

export default Hero;
