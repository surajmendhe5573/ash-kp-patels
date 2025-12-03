import React, { useState } from 'react'
import { Hamburger, Menu, Search, X } from "lucide-react"
import { href, Link, useLocation } from "react-router-dom"

const Navbar = () => {

  const [openNav, setOpenNav] = useState(false)


const location = useLocation(); // ✅ get current path

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/trust-body", label: "Trust Body" },
    { href: "/academics", label: "Academics" },
    { href: "/gallery", label: "Gallery" },
    { href: "/career", label: "Career" },
    { href: "/events", label: "Events" },
    { href: "/admission", label: "Admission" },
    { href: "/contact-us", label: "Contact Us" },
  ];


  return (
    <div className='w-full font-poppins '>

     <div className='w-full xl:block hidden '>
      <div className='w-full h-[55px] bg-[#2A4767] flex justify-between items-center px-16'>
           
           <div className='flex  items-center gap-x-5'>

           
              <img src="/assets/google.svg" loading='lazy'/>
              <img src="/assets/fb.svg" loading='lazy'/>
              <img src="/assets/insta.svg" loading='lazy'/>
            
             </div>

              <div className='flex  items-center gap-x-5'>
              <div className='relative'>

                <input placeholder='Search' className='w-[198px] h-[35px] pl-4 rounded-[20px] border border-white placeholder:text-[10px] placeholder:text-white placeholder:font-semibold '/>
                
                <div className='w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center absolute top-[5px] right-[6px]'>
                  <Search color='#005478' size={12} />
                </div>
               

              </div>

               <Link to="/alumni">
              <button className='w-[150px] h-[35px] rounded-[35px] bg-[#F8A813] cursor-pointer font-medium text-[16px] text-white '>Alumni</button>
              </Link>
              </div>
           
      </div>

      <div className='w-full h-[90px] border-t border-b border-[#2A4767]  flex justify-between items-center px-16 '>

        <img src="/assets/logo.svg" className='h-[85px] ' />

        <div className='flex gap-x-10 items-center font-medium text-[16px] text-black '>

          {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={` py-2 transition-all whitespace-nowrap ${
                    active
                      ? " text-[#F8A813] border-b-[4px] border-b-[#F8A813] "
                      : "text-[#2A4767] hover:text-[#F8A813]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

        </div>

      </div>
     </div>

     <div className='w-full block xl:hidden relative'>

        <div className='w-full h-fit py-3 bg-[#2A4767] flex justify-center items-center gap-x-5 px-5'>
            

           
              <img src="/assets/google.svg" className='w-[25px] h-[25px] '/>
              <img src="/assets/fb.svg" className='w-[25px] h-[25px] '/>
              <img src="/assets/insta.svg" className='w-[25px] h-[25px] '/>
            
            
        </div>

        <div className='border-b border-[#2A4767] w-full h-[70px] flex justify-between items-center px-5'>
          
           <Menu  color='#005478' onClick={()=>setOpenNav(true)}/>

           <img src="/assets/logo2.svg" className='h-[68px] '/>

           <div className='w-[25px] h-[25px] bg-[#F8A813] rounded-full flex justify-center items-center '>
              <Search color='white' size={14}/>
           </div>
        </div>

       {openNav && <div className='w-full h-screen overflow-y-scroll scrolll bg-[#2A4767] fixed z-50 top-0 left-0 p-5 font-montserrat'>

        <X color='white' className='text-start mt-5' onClick={()=>setOpenNav(false)}/>

        {navLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href} onClick={()=>setOpenNav(false)}> 
                     <div className='border-b border-[#FFFFFF80] pb-2 '>
          <div className={` w-full h-[54px] rounded-[10px] flex items-center px-4 ${active ? "bg-[#243A53]" : "bg-transparent"} mt-8  `}>
            <p className='font-medium text-[16px] text-white '>{link.label}</p>
          </div>
        </div>
                  
                </Link>
              );
            })}

             <Link to="/alumni">
             <button className='w-full h-[40px] mt-5 rounded-[35px] bg-[#F8A813] font-medium text-[16px] text-white '>Alumni</button>
             </Link>
        </div> }
       

     </div>

    </div>
  )
}

export default Navbar