import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
        const handleLinkClick = () => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  };
  return (

    <>
    <div className='w-full h-fit py-10 xl:px-16 md:px-10 px-5  bg-[#2A4767] font-manrope flex flex-row flex-wrap justify-between gap-20 '>

        <div className='flex flex-col gap-y-5'>

            <p className='font-semibold text-[26px] text-[#FAFAFA] underline font-montserrat'>Quick Links</p>

            <div className='flex flex-col gap-y-3 font-normal text-[16px] text-[#DADADA99] ml-5 '>

               <Link to="/" onClick={()=>handleLinkClick()}> <li>Home</li></Link>
                <Link to="/about-us" onClick={()=>handleLinkClick()}><li>About Us</li></Link>
                <Link to="/trust-body" onClick={()=>handleLinkClick()}><li>Trust Body</li></Link>
                <Link to="/academics" onClick={()=>handleLinkClick()}><li>Academics</li></Link>
                <Link to="/events" onClick={()=>handleLinkClick()}><li>Events</li></Link>
                <Link to="/gallery" onClick={()=>handleLinkClick()}><li>Gallery</li></Link>
                <Link to="/career" onClick={()=>handleLinkClick()}><li>Career</li></Link>
                <Link to="/contact-us" onClick={()=>handleLinkClick()}><li>Contact Us</li></Link>
            </div>

        </div>

        <div className='flex flex-col gap-y-5'>

            <p className='font-semibold text-[26px] font-montserrat text-[#FAFAFA] underline '>About Us</p>

            <div className='flex flex-col gap-y-3 font-normal text-[16px] text-[#DADADA99] ml-5 '>

                <Link to="/about-trust" onClick={()=>handleLinkClick()}><li>About Trust</li></Link>
                <li>History</li>
            </div>

        </div>

        <div className='flex flex-col gap-y-5'>

            <p className='font-semibold text-[26px] font-montserrat text-[#FAFAFA] underline '>Student Corner</p>

            <div className='flex flex-col gap-y-3 font-normal text-[16px] text-[#DADADA99] ml-5 '>

                <Link to="/admission-form" onClick={()=>handleLinkClick()}> <li>Admission Form</li></Link>
                <li>Syllabus</li>
                <li>NSS</li>
                <li>Scope</li>
                <li>Sports</li>
                <li>CWDC</li>
                <li>Computer Training</li>
                <li>Medical Facilities</li>
                <li>Library</li>
                <li>Scholarship</li>
            </div>

        </div>

        <div className='flex flex-col gap-y-5'>

            <p className='font-semibold text-[26px] font-montserrat text-[#FAFAFA] underline '>Contact Us</p>

            <div className='flex flex-col gap-y-3 font-normal text-[16px] text-[#DADADA99] '>

                <p className='font-semibold text-[18px] text-[#FF5500] '>Address</p>
                <p>Ash Education Trust, Vijapur, Amrut Vidyadham,<br></br>
Visnagar Road,Vijapur-382870.</p>

              <div className='flex flex-col gap-y-1 '>
                <a href="mailto:sspatel71@yahoo.in"><b className='font-semibold text-[18px] text-[#FF5500] '>Email:</b> sspatel71@yahoo.in</a>
                <a href="tel:+91 9427073676"><b className='font-semibold text-[18px] text-[#FF5500] '>Phone:</b> 9427073676 / 9427019977</a>

              </div>

            </div>

        </div>

    </div>

    <div className='w-full md:h-[58px] h-fit bg-[#F8A813] flex md:flex-row flex-col items-center justify-between  xl:px-16 md:px-10 px-5 gap-y-2 py-3 font-manrope'>
        <p className='font-medium md:text-[16px] text-[14px] text-[#2A4767]  '>Copyright © 2025 revered by Ash Education Trust Vijapur</p>
        <p className='font-medium md:text-[16px] text-[14px] text-[#2A4767]  '>Designed & Developed By <a href="https://pruthatek.com/" className='underline'>PRUTHATEK</a></p>
        <p className='font-medium md:text-[16px] text-[14px] text-[#2A4767]  '>Privacy Policy | Terms & Conditions</p>
    </div>
    </>
  )
}

export default Footer