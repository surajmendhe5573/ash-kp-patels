import React, { useCallback, useState } from 'react'
import {ChevronDown} from "lucide-react"

const FAQs = () => {

  const [selected, setSelected] = useState("General")

  const tabs = ["General", "Admission", "Courses", "Career", "Notice"]

  const faqs = [
  {
    q: "How to Apply for a Certain Course?",
    a: "Pruthatek develops intelligent software solutions across healthcare, commerce, finance, and education sectors. We provide six specialized products designed to transform business operations and drive measurable growth for organizations of all sizes."
  },
  {
    q: "What documents are required?",
    a: "You generally need your latest marksheet, valid ID, and passport-sized photo. Some courses may need additional prerequisites."
  },
  {
    q: "Is there a scholarship option?",
    a: "Yes. Need-based and merit scholarships open every quarter. Keep scanned proofs ready; results are announced within two weeks."
  }
];

const [openIndex, setOpenIndex] = useState(null); // single-open
  // For multi-open, change to: const [openIndex, setOpenIndex] = useState([]);
  const handleToggle = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
        <div className="w-full font-poppins xl:px-16 md:px-10 px-5">
      <div className="flex gap-x-10 items-center">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-amber-400 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-400 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>

        <p className="font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] whitespace-nowrap ">
          FAQs
        </p>

        <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-300 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-400 [mask-image:linear-gradient(to-left,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>
      </div>
      <p className="xl:w-[70%] w-[95%] mx-auto font-normal md:text-[24px] text-[20px] text-[#2A4767] text-center mt-5">
        Our nurturing environment encourages every student to think creatively,
        learn enthusiastically, and grow confidently.
      </p>

     <div className='w-full  mt-24'>

        <div className='w-full flex gap-x-8 min-w-[300px] overflow-x-scroll scrolll '>

          {tabs.map((tab,index)=>{
            return (
               <div onClick={()=>setSelected(tab)} className={`w-fit h-[50px] px-20 rounded-[50px] cursor-pointer ${selected === tab ? "bg-[#F8A813] text-white " : "border border-[#F8A813] text-[#F8A813]" } 
            flex justify-center items-center font-bold text-[20px] font-montserrat  `}>
                {tab}
            </div>
            )
          })}
        </div>


        <div className='md:w-[90%] w-full flex flex-col gap-y-5 mt-10 mx-auto '>

{faqs.map((item, i) => (
        <AccordionItem
          key={i}
          idx={i}
          open={openIndex === i}
          onToggle={handleToggle}
          q={item.q}
          a={item.a}
        />
      ))}

        </div>

     </div>


    </div>
  )
}

export default FAQs

const AccordionItem = ({ idx, open, onToggle, q, a }) => {
  const handleKey = useCallback((e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onToggle(idx);
    }
  }, [idx, onToggle]);

  return (
    <div className="w-full ">
      {/* Header */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => onToggle(idx)}
        onKeyDown={handleKey}
        className="w-full flex justify-between items-center border-b border-[#2A4767] py-2 px-3 cursor-pointer select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F8A813]/60"
      >
        <p className="font-semibold font-inter text-[#F8A813] md:text-[24px] text-[18px]">
          {q}
        </p>
        <ChevronDown
          className={`transition-transform duration-300 shrink-0 ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Animated body (smooth slide) */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="w-full border-l-2 border-[#F8A813] px-3 mt-2">
            <p className="font-normal md:text-[20px] text-[16px] font-inter text-[#2A4767]">
              {a}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
