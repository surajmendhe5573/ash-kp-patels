import React from "react";
import FAQs from "../Home/FAQs";
import ContactUs from "../Home/ContactUs";
import { ArrowRight, Eye, Download } from "lucide-react";
import AdmissionTimeline from "./Timeline2";
import {Link} from "react-router-dom"

const Admission = () => {
  const steps = [
    {
      id: "01",
      title: "Application Form Submission",
      desc: "Fill out the online application or visit our campus office.",
    },
    {
      id: "02",
      title: "Document Verification",
      desc: "Fill out the online application or visit our campus office.",
    },
    {
      id: "03",
      title: "Admission Payment",
      desc: "Fill out the online application or visit our campus office.",
    },
    {
      id: "04",
      title: "Admission Confirmation",
      desc: "Fill out the online application or visit our campus office.",
    },
  ];

  const timelineSteps = [
    {
      number: "01",
      title: "Application Form Submission",
      description:
        "Fill out the online application or visit our campus office.",
    },
    {
      number: "02",
      title: "Document Verification",
      description:
        "Fill out the online application or visit our campus office.",
    },
    {
      number: "03",
      title: "Admission Payment",
      description:
        "Fill out the online application or visit our campus office.",
    },
    {
      number: "04",
      title: "Admission Confirmation",
      description:
        "Fill out the online application or visit our campus office.",
    },
  ];

  const Step = ({ step, position }) => {
    const { number, title, description } = step;

    // Common components
    const NumberCircle = () => (
      <div className="w-10 h-10 rounded-full border-2 border-[#F8A813] flex items-center justify-center bg-white font-medium text-[#F8A813]">
        {number}
      </div>
    );

    const ContentBox = () => (
      <div className=" w-64">
        <div className="w-fit px-5 h-[44px] rounded-[36px] bg-white drop-shadow-md drop-shadow-gray-400 flex justify-center items-center">
          <h3 className="font-medium text-[20px] whitespace-nowrap text-[#F8A813]">
            {title}
          </h3>
        </div>

        <p className="text-[18px] font-normal text-[#2A4767] mt-2 text-center ">
          {description}
        </p>
      </div>
    );

    const VerticalLine = () => <div className="w-px h-16 bg-[#F8A813] my-2" />;

    return (
      <div className="relative h-80">
        {/* Main dot on the timeline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full  border border-[#F8A813] bg-[#FFB8B2] flex items-center justify-center z-10">
          {/* <div className="w-3 h-3 bg-orange-400 rounded-full" /> */}
        </div>

        {/* Content for steps on the TOP */}
        {position === "top" && (
          <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 mb-8 flex flex-col items-center">
            <ContentBox />
            <VerticalLine />
            <NumberCircle />
          </div>
        )}

        {/* Content for steps on the BOTTOM */}
        {position === "bottom" && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 mt-8 flex flex-col items-center">
            <NumberCircle />
            <VerticalLine />
            <ContentBox />
          </div>
        )}
      </div>
    );
  };

          const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (
    <>
      <div className="relative bg-white h-fit py-40 flex flex-col justify-between">
        <div className="container mx-auto xl:px-16 md:px-10 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-[#F8A813] lg:text-[48px] md:text-[34px] text-[28px] font-semibold font-montserrat ">
              Admission
            </h2>
          </div>
          <div className="md:w-1/2 text-[#2A4767] lg:text-[28px] md:text-[24px] text-[20px] font-medium font-poppins leading-relaxed text-center md:text-left">
            <p>
              College of Education B.Ed Vijapur was established with the belief
              that quality teacher training and strong moral values are the
              foundation of a better education system and society.
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

      <section className="w-full  mt-20">
        <p className="font-semibold md:text-[34px] text-[24px] font-montserrat text-[#F8A813] text-center ">
          Admission Process
        </p>
        <p className="font-normal md:text-[24px] text-[18px] font-poppins text-[#2A4767] text-center mt-4 ">
          Follow This Basic Steps to Begin your Nursing Journey To Us
        </p>

        <div className="lg:flex hidden items-center justify-center min-h-screen bg-white ">
          <div className="w-full px-4">
            <div className="relative">
              {/* The dashed horizontal line */}
              <div className="absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-300" />

              {/* Grid container for the steps */}
              <div className="relative grid grid-cols-4">
                {timelineSteps.map((step, index) => (
                  <Step
                    key={step.number}
                    step={step}
                    position={index % 2 === 0 ? "bottom" : "top"}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="block lg:hidden ">
          <AdmissionTimeline/>
        </div>

      <Link to="/admission-form" onClick={()=>handleLinkClick()} className="w-full flex justify-center">
        <button className="w-fit h-[50px] rounded-[50px] bg-[#F8A813] text-white font-medium text-[20px] font-poppins px-14 mx-auto ">Start Now</button>
      </Link>
      </section>

      <div className="my-40 ">
        <FAQs />
      </div>

      <div className="mt-40 mb-10 ">
        <ContactUs />
      </div>
    </>
  );
};

export default Admission;
