import React, { useState } from "react";
import { Search } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Change this if your API route is different
  const API_BASE = import.meta.env.VITE_APP_SERVER || "";
  const CONTACT_API = `${API_BASE}/api/v1/contact-form/submit`;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error as user starts typing
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else {
      const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = "Please enter a valid email.";
      }
    }

    if (formData.phone.trim()) {
      const phoneDigits = formData.phone.replace(/\D/g, "");
      if (phoneDigits.length < 10) {
        newErrors.phone = "Please enter a valid phone number.";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      alert("Please fix the highlighted fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch(CONTACT_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phoneNo: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit");
      }

      alert("Thank you! Your message has been sent.");

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full font-poppins xl:px-16 md:px-10 px-5">
      <div className="w-full flex flex-col gap-y-10 gap-x-14 mt-12">
        <div className="w-full grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 ">
          <div className="w-full md:h-[200px] h-[160px] border border-[#F8A813] md:p-8 p-4 rounded-[20px] bg-white drop-shadow-sm drop-shadow-[#00000040] ">
            <div className="flex gap-x-2 items-center ">
              <img
                src="/assets/Globe.svg"
                className="w-[34px] h-[34px] "
              />
              <p className="font-semibold md:text-[22px] text-[18px] font-montserrat text-[#F8A813] ">
                Website
              </p>
            </div>

            <p className="font-normal text-[16px] mt-4 text-black ">
              www.AshSchoolNursing.com
            </p>
          </div>

          <div className="w-full md:h-[200px] h-[160px] border border-[#F8A813] md:p-8 p-4 rounded-[20px] bg-white drop-shadow-sm drop-shadow-[#00000040] ">
            <div className="flex gap-x-2 items-center ">
              <img
                src="/assets/phone.svg"
                className="w-[26px] h-[26px] "
              />
              <p className="font-semibold text-[22px] font-montserrat text-[#F8A813] ">
                Phone No.
              </p>
            </div>

            <a
              href="tel:+919427073676"
              className="font-normal text-[16px] mt-14 text-black "
            >
              9427073676
            </a>
          </div>

          <div className="w-full md:h-[200px] h-[160px] border border-[#F8A813] md:p-8 p-4 rounded-[20px] bg-white drop-shadow-sm drop-shadow-[#00000040] ">
            <div className="flex gap-x-2 items-center ">
              <img
                src="/assets/Mail.svg"
                className="w-[34px] h-[34px] "
              />
              <p className="font-semibold text-[22px] font-montserrat text-[#F8A813] ">
                Email
              </p>
            </div>

            <a
              href="mailto:sspatel71@yahoo.in"
              className="font-normal text-[16px] mt-14 text-black "
            >
              sspatel71@yahoo.in
            </a>
          </div>

          <div className="w-full md:h-[200px] h-[180px] border border-[#F8A813] md:p-8 p-4 rounded-[20px] bg-white drop-shadow-sm drop-shadow-[#00000040] ">
            <div className="flex gap-x-2 items-center ">
              <img
                src="/assets/location.svg"
                className="w-[34px] h-[34px] "
              />
              <p className="font-semibold text-[22px] font-montserrat text-[#F8A813] ">
                Location
              </p>
            </div>

            <p className="font-normal text-[16px] mt-4 text-black ">
              Ash Education Trust, Vijapur, Amrut Vidyadham,
              <br />
              <br />
              Visnagar Road,Vijapur-382870.
            </p>
          </div>
        </div>

        {/* CONTACT FORM */}
        <form
          className="w-full flex flex-col border border-[#2A4767] rounded-[50px] bg-white md:p-14 p-5 "
          onSubmit={handleSubmit}
          noValidate
        >
          <p className="font-extrabold text-[#005478] md:text-[40px] text-[34px] font-montserrat ">
            <b className="text-[#F8A813] font-extrabold ">
              Reach
            </b>{" "}
            &amp; Get In Touch With Us!
          </p>

          <div className="w-full flex gap-x-5 mt-10 ">
            <div className="w-[50%] flex flex-col">
              <input
                name="name"
                placeholder="Your Name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="w-full h-[50px] rounded-[40px] bg-[#FCFCFC] drop-shadow-sm drop-shadow-gray-500 
                placeholder:font-normal placeholder:text-[20px] placeholder:text-[#707070CC] px-4 "
              />
              {errors.name && (
                <p className="text-red-600 text-xs mt-2">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="w-[50%] flex flex-col">
              <input
                name="email"
                placeholder="Your Email Id"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[50px] rounded-[40px] bg-[#FCFCFC] drop-shadow-sm drop-shadow-gray-500 
                placeholder:font-normal placeholder:text-[20px] placeholder:text-[#707070CC] px-4 "
              />
              {errors.email && (
                <p className="text-red-600 text-xs mt-2">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="w-[50%] flex flex-col mt-10">
            <input
              name="phone"
              placeholder="Your Phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              className="w-full h-[50px] rounded-[40px] bg-[#FCFCFC] drop-shadow-sm drop-shadow-gray-500 
              placeholder:font-normal placeholder:text-[20px] placeholder:text-[#707070CC] px-4 "
            />
            {errors.phone && (
              <p className="text-red-600 text-xs mt-2">
                {errors.phone}
              </p>
            )}
          </div>

          <div className="w-full flex flex-col mt-10">
            <textarea
              name="message"
              placeholder="Enter Message"
              value={formData.message}
              onChange={handleChange}
              className="w-[100%] h-[200px] rounded-[40px] bg-[#FCFCFC] drop-shadow-sm drop-shadow-gray-500 
              placeholder:font-normal placeholder:text-[20px] placeholder:text-[#707070CC] py-4 px-6 "
            />
            {errors.message && (
              <p className="text-red-600 text-xs mt-2">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-[50px] text-[20px] font-medium text-white bg-[#F8A813] rounded-[50px] mt-10 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      <div className="flex gap-x-10 items-center mt-20">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-amber-300 to-amber-400 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-amber-400 [mask-image:linear-gradient(to-right,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>

        <p className="font-bold md:text-[32px] text-[28px] font-montserrat text-[#F8A813] whitespace-nowrap ">
          Find Us On Map
        </p>

        <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-amber-400 to-amber-300 relative">
          <div className="absolute inset-0 bg-gradient-to-l from-transparent to-amber-400 [mask-image:linear-gradient(to-left,transparent,black)] [clip-path:polygon(0%_50%,100%_0%,100%_100%,0%_50%)]"></div>
        </div>
      </div>
      <p className="xl:w-[70%] w-[95%] mx-auto font-normal md:text-[24px] text-[20px] text-[#2A4767] text-center mt-5">
        Our nurturing environment encourages every student to think
        creatively, learn enthusiastically, and grow confidently.
      </p>

      <div className="w-full h-[600px] rounded-[15px] relative ">
        <div className="absolute right-5 top-10">
          <input
            placeholder="Search"
            className="w-[198px] h-[35px] pl-4 rounded-[20px] bg-[#2A4767] border border-white placeholder:text-[10px] placeholder:text-white placeholder:font-semibold "
          />

          <div className="w-[25px] h-[25px] bg-white rounded-full flex justify-center items-center absolute top-[5px] right-[6px]">
            <Search color="#005478" size={12} />
          </div>
        </div>

        <div className="w-full h-full rounded-[15px] mt-14">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9913402003813!2d72.7456116!3d23.568754499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395db50d792682cf%3A0xfa3922f46f979977!2sAsh%20Secondary%20School%20%26%20S.U.Patel%20U.M.Shala!5e0!3m2!1sen!2sin!4v1762492268167!5m2!1sen!2sin"
            width="100%"
            height="100%"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
