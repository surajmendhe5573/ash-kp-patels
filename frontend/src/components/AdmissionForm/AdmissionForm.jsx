import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import FAQs from "../Home/FAQs";
import ContactUs from "../Home/ContactUs";
import { ArrowRight, Eye, Download, ChevronDown, Check } from "lucide-react";

const API_BASE = import.meta.env.VITE_APP_SERVER || "";

/** ---------- Reusable CustomSelect (headless + accessible) ---------- */
const CustomSelect = ({
  options = [],
  value,
  onChange,
  placeholder = "Select an option",
  className = "",
  size = "md", // "sm" | "md"
}) => {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const btnRef = useRef(null);
  const listRef = useRef(null);
  const wrapRef = useRef(null);

  const height =
    size === "sm" ? "h-[40px] text-[14px]" : "md:h-[50px] h-[44px] text-[16px]";
  const pad = size === "sm" ? "px-3" : "px-4";

  const selected = options.find((o) => o.value === value);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!wrapRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    if (open && listRef.current) {
      listRef.current.focus();
      const idx = Math.max(
        0,
        options.findIndex((o) => o.value === value)
      );
      setActiveIndex(idx === -1 ? 0 : idx);
    }
  }, [open]); // eslint-disable-line

  const handleKeyDownButton = (e) => {
    if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpen(true);
    }
  };

  const handleKeyDownList = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
      btnRef.current?.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(options.length - 1, i + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = options[activeIndex];
      if (opt) {
        onChange?.(opt.value);
        setOpen(false);
        btnRef.current?.focus();
      }
    } else if (/^[a-z0-9 ]$/i.test(e.key)) {
      const idx = options.findIndex((o) =>
        o.label.toLowerCase().startsWith(e.key.toLowerCase())
      );
      if (idx >= 0) setActiveIndex(idx);
    }
  };

  return (
    <div className={`relative ${className}`} ref={wrapRef}>
      <button
        ref={btnRef}
        type="button"
        className={`w-full ${height} ${pad} rounded-[10px] bg-[#FDFDFD] border border-transparent drop-shadow-md drop-shadow-[#00000040] flex items-center justify-between text-[#2A4767]`}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((s) => !s)}
        onKeyDown={handleKeyDownButton}
      >
        <span className={`${selected ? "text-[#2A4767]" : "text-[#7A8A9A]"}`}>
          {selected ? selected.label : placeholder}
        </span>
        <ChevronDown size={18} />
      </button>

      {open && (
        <ul
          ref={listRef}
          tabIndex={0}
          role="listbox"
          aria-activedescendant={
            activeIndex >= 0 ? `opt-${activeIndex}` : undefined
          }
          onKeyDown={handleKeyDownList}
          className="absolute z-40 mt-2 max-h-64 w-full overflow-auto rounded-[12px] border border-[#F0F0F0] bg-white shadow-xl focus:outline-none"
        >
          {options.map((opt, i) => {
            const isSelected = value === opt.value;
            const active = i === activeIndex;
            return (
              <li
                id={`opt-${i}`}
                key={opt.value}
                role="option"
                aria-selected={isSelected}
                className={`flex items-center justify-between px-4 py-2 cursor-pointer ${
                  active ? "bg-[#FFF7E6]" : ""
                } ${
                  isSelected ? "text-[#2A4767] font-medium" : "text-[#2A4767]"
                }`}
                onMouseEnter={() => setActiveIndex(i)}
                onClick={() => {
                  onChange?.(opt.value);
                  setOpen(false);
                  btnRef.current?.focus();
                }}
              >
                <span>{opt.label}</span>
                {isSelected && <Check size={16} />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

/** ---------- Options (tailored) ---------- */
const CLASS_OPTIONS = [
  { label: "B.Ed — First Year", value: "bed_y1" },
  { label: "B.Ed — Second Year", value: "bed_y2" },
  { label: "D.El.Ed — First Year", value: "deled_y1" },
  { label: "D.El.Ed — Second Year", value: "deled_y2" },
];

const SECTION_OPTIONS = [
  { label: "Section A (Morning)", value: "a_morning" },
  { label: "Section B (Morning)", value: "b_morning" },
  { label: "Section C (Evening)", value: "c_evening" },
];

const NATIONALITY_RELIGION_OPTIONS = [
  { label: "Indian — Hindu", value: "indian_hindu" },
  { label: "Indian — Muslim", value: "indian_muslim" },
  { label: "Indian — Christian", value: "indian_christian" },
  { label: "Indian — Sikh", value: "indian_sikh" },
  { label: "Indian — Jain", value: "indian_jain" },
  { label: "Indian — Buddhist", value: "indian_buddhist" },
  { label: "Non-Indian — Other", value: "non_indian_other" },
];

// NOTE: match schema enum: "Male" | "Female" | "Other"
const GENDER_OPTIONS = [
  { label: "Male", value: "Male" },
  { label: "Female", value: "Female" },
  { label: "Other / Prefer not to say", value: "Other" },
];

const AlertPopup = ({ alert, onClose }) => {
  if (!alert) return null;

  const isSuccess = alert.type === "success";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl px-6 py-5 w-[90%] max-w-sm shadow-xl">
        <p
          className={`text-sm mb-4 ${
            isSuccess ? "text-green-700" : "text-red-700"
          }`}
        >
          {alert.message}
        </p>
        <button
          type="button"
          onClick={onClose}
          className={`w-full h-[40px] rounded-[20px] font-medium text-sm ${
            isSuccess ? "bg-green-600 text-white" : "bg-red-600 text-white"
          }`}
        >
          OK
        </button>
      </div>
    </div>
  );
};

const AdmissionForm = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [classApplyingFor, setClassApplyingFor] = useState("");
  const [sectionPref, setSectionPref] = useState("");
  const [residentialAddress, setResidentialAddress] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [nationReligion, setNationReligion] = useState("");
  const [gender, setGender] = useState("");

  const [profilePicture, setProfilePicture] = useState(null);
  const [birthCertificate, setBirthCertificate] = useState(null);
  const [transferCertificate, setTransferCertificate] = useState(null);
  const [reportCard, setReportCard] = useState(null);
  const [casteCertificate, setCasteCertificate] = useState(null);

  const [applicationId, setApplicationId] = useState(null);
  const [applicationLoading, setApplicationLoading] = useState(false);
  const [documentsLoading, setDocumentsLoading] = useState(false);

  const [photoPreview, setPhotoPreview] = useState(null);
  const profileInputRef = useRef(null);
  const birthInputRef = useRef(null);
  const transferInputRef = useRef(null);
  const reportInputRef = useRef(null);
  const casteInputRef = useRef(null);

  useEffect(() => {
    return () => {
      if (photoPreview) URL.revokeObjectURL(photoPreview);
    };
  }, [photoPreview]);

  const [appErrors, setAppErrors] = useState({});
  const [docErrors, setDocErrors] = useState({});
  const [alert, setAlert] = useState(null); // { type: "success" | "error", message: string }

  const clear1 = () => {
    setFullName("");
    setDateOfBirth("");
    setClassApplyingFor("");
    setSectionPref("");
    setResidentialAddress("");
    setContactNumber("");
    setEmailAddress("");
    setAadharNumber("");
    setNationReligion("");
    setGender("");
  };

const clear2 = () => {
  setProfilePicture(null);
  setBirthCertificate(null);
  setTransferCertificate(null);
  setReportCard(null);
  setCasteCertificate(null);
  setPhotoPreview(null);
  setDocErrors({}); // clear document error messages too

  if (profileInputRef.current) profileInputRef.current.value = "";
  if (birthInputRef.current) birthInputRef.current.value = "";
  if (transferInputRef.current) transferInputRef.current.value = "";
  if (reportInputRef.current) reportInputRef.current.value = "";
  if (casteInputRef.current) casteInputRef.current.value = "";
};

  const validateApplication = () => {
    const errors = {};

    if (!fullName.trim()) errors.fullName = "Full name is required";
    if (!dateOfBirth) errors.dateOfBirth = "Date of birth is required";
    if (!classApplyingFor)
      errors.classApplyingFor = "Please select class/program";
    if (!sectionPref) errors.sectionPref = "Please select section";
    if (!residentialAddress.trim())
      errors.residentialAddress = "Address is required";

    if (!contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (!/^\d{10}$/.test(contactNumber.trim())) {
      errors.contactNumber = "Enter a valid 10-digit mobile number";
    }

    if (!emailAddress.trim()) {
      errors.emailAddress = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(emailAddress.trim())) {
      errors.emailAddress = "Enter a valid email address";
    }

    if (!aadharNumber.trim()) {
      errors.aadharNumber = "Aadhar number is required";
    } else if (!/^\d{12}$/.test(aadharNumber.trim())) {
      errors.aadharNumber = "Aadhar number must be 12 digits";
    }

    if (!nationReligion)
      errors.nationReligion = "Select nationality & religion";
    if (!gender) errors.gender = "Select gender";

    setAppErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateDocuments = () => {
    const errors = {};

    if (!profilePicture) errors.profilePicture = "Profile picture is required";
    if (!birthCertificate)
      errors.birthCertificate = "Birth certificate is required";
    if (!transferCertificate)
      errors.transferCertificate = "Transfer certificate is required";
    if (!reportCard) errors.reportCard = "Report card is required";
    // caste may be optional; make required if your college needs it
    // if (!casteCertificate) errors.casteCertificate = "Caste certificate is required";

    setDocErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setAlert(null);

    if (!validateApplication()) {
      setAlert({
        type: "error",
        message: "Please fix the highlighted errors before submitting.",
      });
      return;
    }

    try {
      setApplicationLoading(true);

      const payload = {
        fullName,
        dateOfBirth, // backend will parse to Date
        classApplyingFor,
        sectionPreference: sectionPref,
        residentialAddress,
        contactNumber,
        emailAddress,
        aadharNumber,
        nationalityAndReligion: nationReligion,
        gender,
      };

      const res = await axios.post(
        `${API_BASE}/api/v1/admission-form/application`,
        payload
      );

      // assuming res.success("msg", data, ...) => { message, data }
      const createdForm = res.data?.data || res.data;

      if (!createdForm?._id) {
        throw new Error("Form ID not returned from server");
      }

      setApplicationId(createdForm._id);

      setAlert({
        type: "success",
        message:
          "Application submitted successfully. Now you can upload the documents.",
      });
      clear1();
    } catch (err) {
      console.error(err);
      setAlert({
        type: "error",
        message:
          err.response?.data?.message ||
          "Failed to submit application. Please try again.",
      });
    } finally {
      setApplicationLoading(false);
    }
  };

  const handleSubmitDocuments = async (e) => {
    e.preventDefault();
    setAlert(null);

    if (!applicationId) {
      setAlert({
        type: "error",
        message: "Please submit the application form first.",
      });
      return;
    }

    if (!validateDocuments()) {
      setAlert({
        type: "error",
        message: "Please upload all mandatory documents.",
      });
      return;
    }

    try {
      setDocumentsLoading(true);

      const formData = new FormData();
      if (profilePicture) formData.append("profilePicture", profilePicture);
      if (birthCertificate)
        formData.append("birthCertificate", birthCertificate);
      if (transferCertificate)
        formData.append("transferCertificate", transferCertificate);
      if (reportCard) formData.append("reportCard", reportCard);
      if (casteCertificate)
        formData.append("casteCertificate", casteCertificate);

      const res = await axios.post(
        `${API_BASE}/api/v1/admission-form/documents/${applicationId}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      setAlert({
        type: "success",
        message:
          res.data?.message ||
          "Documents uploaded successfully. Our team will verify them shortly.",
      });
      clear2();
    } catch (err) {
      console.error(err);
      setAlert({
        type: "error",
        message:
          err.response?.data?.message ||
          "Failed to upload documents. Please try again.",
      });
    } finally {
      setDocumentsLoading(false);
    }
  };

  const documentsDisabled = !applicationId || documentsLoading;

  return (
    <>
      <div className="relative bg-white h-fit py-40 flex flex-col justify-between">
        <div className="container mx-auto xl:px-16 md:px-10 px-5 flex flex-col md:flex-row items-center md:items-start justify-center md:justify-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-[#F8A813] lg:text-[48px] md:text-[34px] text-[28px] font-semibold font-montserrat ">
              Admission Form
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
              stroke="#000"
              strokeWidth="1"
            />
          </svg>
        </div>
      </div>

      <div className="w-full font-poppins xl:px-16 md:px-10 px-5 ">
        <p className="font-semibold md:text-[34px] text-[24px] font-montserrat text-[#F8A813] text-center mt-34">
          Admission Form
        </p>
        <p className="font-normal md:text-[24px] text-[18px] text-[#2A4767] text-center ">
          Follow This Basic Steps to Begin your Nursing Journey To Us
        </p>
        
        {/* -------------- Application Form Submission -------------- */}
        <div className="w-full h-fit lg:rounded-[50px] md:rounded-[40px] rounded-[30px] p-5 border-2 mt-14 border-[#F8A813] ">
          <div className="w-fit px-5 h-[50px] rounded-[50px] border border-[#F8A813] drop-shadow-md bg-white drop-shadow-gray-300 flex justify-center items-center ">
            <p className="text-[#F8A813] font-medium text-[18px] font-montserrat">
              Application Form Submission
            </p>
          </div>

          <form
            className="mt-10 w-full flex md:flex-row flex-col gap-y-5 md:justify-between gap-x-20 "
            onSubmit={handleSubmitApplication}
          >
            <div className="md:w-[50%] w-full flex flex-col gap-y-5">
              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Full Name
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] "
                />
                {appErrors.fullName && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.fullName}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Date of Birth
                </p>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                  className="w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] "
                />
                {appErrors.dateOfBirth && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.dateOfBirth}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Class Applying For
                </p>
                <CustomSelect
                  options={CLASS_OPTIONS}
                  value={classApplyingFor}
                  onChange={setClassApplyingFor}
                  placeholder="Select program & year"
                />
                {appErrors.classApplyingFor && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.classApplyingFor}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Section Preference
                </p>
                <CustomSelect
                  options={SECTION_OPTIONS}
                  value={sectionPref}
                  onChange={setSectionPref}
                  placeholder="Select section"
                />
                {appErrors.sectionPref && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.sectionPref}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Residential Address
                </p>
                <input
                  type="text"
                  placeholder="Enter Your Full Address"
                  value={residentialAddress}
                  onChange={(e) => setResidentialAddress(e.target.value)}
                  className="w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] "
                />
                {appErrors.residentialAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.residentialAddress}
                  </p>
                )}
              </div>
            </div>

            <div className="md:w-[50%] w-full flex flex-col gap-y-5">
              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Contact Number
                </p>
                <input
                  type="tel"
                  placeholder="Enter Your Contact Number"
                  value={contactNumber}
                  onChange={(e) => setContactNumber(e.target.value)}
                  className="w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] "
                />
                {appErrors.contactNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.contactNumber}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Email Address
                </p>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                  className="w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] "
                />
                {appErrors.emailAddress && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.emailAddress}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Aadhar Number
                </p>
                <input
                  type="text"
                  placeholder="Enter Aadhar Number"
                  value={aadharNumber}
                  onChange={(e) => setAadharNumber(e.target.value)}
                  className="w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] "
                />
                {appErrors.aadharNumber && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.aadharNumber}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Nationality & Religion
                </p>
                <CustomSelect
                  options={NATIONALITY_RELIGION_OPTIONS}
                  value={nationReligion}
                  onChange={setNationReligion}
                  placeholder="Select nationality & religion"
                />
                {appErrors.nationReligion && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.nationReligion}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Gender Selection
                </p>
                <CustomSelect
                  options={GENDER_OPTIONS}
                  value={gender}
                  onChange={setGender}
                  placeholder="Select gender"
                />
                {appErrors.gender && (
                  <p className="text-red-500 text-xs mt-1">
                    {appErrors.gender}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={applicationLoading}
                className={`w-full h-[50px] md:rounded-[50px] rounded-[40px] bg-[#2A4767] text-white font-medium md:text-[20px] text-[18px] flex justify-center items-center gap-x-3 mt-3 ${
                  applicationLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {applicationLoading ? "Submitting..." : "Submit"} <ArrowRight />
              </button>

              {applicationId && (
                <p className="text-xs text-green-700 mt-1">Step 1 completed.</p>
              )}
            </div>
          </form>
        </div>

        {/* -------------- Document Verification -------------- */}
        <div className="w-full h-fit lg:rounded-[50px] md:rounded-[40px] rounded-[30px] p-5 border-2 mt-14 border-[#F8A813] ">
          <div className="w-fit px-5 h-[50px] rounded-[50px] border border-[#F8A813] drop-shadow-md bg-white drop-shadow-gray-300 flex justify-center items-center ">
            <p className="text-[#F8A813] font-medium text-[18px] font-montserrat">
              Document Verification
            </p>
          </div>

          {!applicationId && (
            <p className="mt-4 text-sm text-[#B45309]">
              Please submit the application form first. Document upload will be
              enabled after Step 1 is completed.
            </p>
          )}

          <form
            className="mt-10  w-full flex md:flex-row flex-col gap-y-5 md:justify-between gap-x-20 "
            onSubmit={handleSubmitDocuments}
          >
            <div className="md:w-[30%] w-full flex flex-col justify-center items-center">
              <p className="font-semibold text-[24px] text-[#555555] ">
                Student Profile Picture
              </p>
              <label
                className={`w-full lg:h-[300px] h-[150px] rounded-[30px] mt-5 border border-dashed border-[#F8A813] flex flex-col justify-center items-center cursor-pointer ${
                  documentsDisabled ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                <img
                  src="/assets/upload.svg"
                  className="lg:w-[80px] lg:h-[80px] w-[50px] h-[50px]"
                  alt=""
                />
                <p className="font-semibold text-[21px] text-black ">Upload</p>
                <input
                  type="file"
                  accept="image/*"
                  name="profilePicture"
                  disabled={documentsDisabled}
                  ref={profileInputRef} // 👈 connect ref
                  className="hidden"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    setProfilePicture(file);

                    if (file) {
                      const url = URL.createObjectURL(file);
                      setPhotoPreview(url);
                    } else {
                      setPhotoPreview(null);
                    }
                  }}
                />
              </label>

              {/* Preview + remove button */}
              {photoPreview && (
                <div className="mt-4 flex flex-col items-center gap-3">
                  <img
                    src={photoPreview}
                    alt="Profile preview"
                    className="w-32 h-32 rounded-full object-cover border border-[#F8A813]"
                  />
                  <button
                    type="button"
                    className="text-sm text-red-600 underline"
                    onClick={() => {
                      setProfilePicture(null);
                      setPhotoPreview(null);
                      if (profileInputRef.current) {
                        profileInputRef.current.value = "";
                      }
                    }}
                  >
                    Remove photo
                  </button>
                </div>
              )}

              {docErrors.profilePicture && (
                <p className="text-red-500 text-xs mt-1">
                  {docErrors.profilePicture}
                </p>
              )}
            </div>

            <div className="md:w-[70%] w-full flex flex-col gap-y-5">
              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Birth Certificate (PDF/JPEG)
                </p>
                <input
                  type="file"
                  name="birthCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  disabled={documentsDisabled}
                  ref={birthInputRef}
                  onChange={(e) =>
                    setBirthCertificate(e.target.files?.[0] || null)
                  }
                  className={`w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] ${
                    documentsDisabled ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
                {docErrors.birthCertificate && (
                  <p className="text-red-500 text-xs mt-1">
                    {docErrors.birthCertificate}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Transfer Certificate
                </p>
                <input
                  type="file"
                  name="transferCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  disabled={documentsDisabled}
                  ref={transferInputRef}
                  onChange={(e) =>
                    setTransferCertificate(e.target.files?.[0] || null)
                  }
                  className={`w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] ${
                    documentsDisabled ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
                {docErrors.transferCertificate && (
                  <p className="text-red-500 text-xs mt-1">
                    {docErrors.transferCertificate}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Report Card
                </p>
                <input
                  type="file"
                  name="reportCard"
                  accept=".pdf,.jpg,.jpeg,.png"
                  disabled={documentsDisabled}
                  ref={reportInputRef}
                  onChange={(e) => setReportCard(e.target.files?.[0] || null)}
                  className={`w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] ${
                    documentsDisabled ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
                {docErrors.reportCard && (
                  <p className="text-red-500 text-xs mt-1">
                    {docErrors.reportCard}
                  </p>
                )}
              </div>

              <div>
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Caste Certificate
                </p>
                <input
                  type="file"
                  name="casteCertificate"
                  accept=".pdf,.jpg,.jpeg,.png"
                  disabled={documentsDisabled}
                  ref={casteInputRef}
                  onChange={(e) =>
                    setCasteCertificate(e.target.files?.[0] || null)
                  }
                  className={`w-full md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] ${
                    documentsDisabled ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                />
                {docErrors.casteCertificate && (
                  <p className="text-red-500 text-xs mt-1">
                    {docErrors.casteCertificate}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={documentsDisabled}
                className={`w-full h-[50px] md:rounded-[50px] rounded-[40px] bg-[#2A4767] text-white font-medium md:text-[20px] text-[18px] flex justify-center items-center gap-x-3 mt-3 ${
                  documentsDisabled ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                {documentsLoading ? "Uploading..." : "Submit"} <ArrowRight />
              </button>
            </div>
          </form>
        </div>

        {/* -------------- Admission Payment -------------- */}
        {/* This part is untouched (no backend wired yet) */}
        <div className="w-full h-fit lg:rounded-[50px] md:rounded-[40px] rounded-[30px] p-5 border-2 mt-14 border-[#F8A813] ">
          <div className="w-fit px-5 h-[50px] rounded-[50px] border border-[#F8A813] drop-shadow-md bg-white drop-shadow-gray-300 flex justify-center items-center ">
            <p className="text-[#F8A813] font-medium text-[18px] font-montserrat">
              Admission Payment
            </p>
          </div>

          <form className="my-10  w-full flex md:flex-row flex-col gap-y-5 md:justify-center gap-x-20 ">
            <div className="md:w-[50%] xl:w-[40%] w-full flex flex-col justify-center items-center gap-y-10 ">
              <div className="w-full">
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Admission Fee Amount
                </p>
                <input
                  type="text"
                  placeholder="Rs. 1,50,499"
                  className="w-full  md:h-[50px] h-[40px] mt-2 px-4 rounded-[10px] bg-[#FDFDFD] drop-shadow-md drop-shadow-[#00000040] "
                />
              </div>

              <div className="w-full">
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Payment methods
                </p>
                <div className="w-full flex flex-row flex-wrap gap-y-5 gap-x-10 ">
                  <label className="flex gap-x-3 items-center cursor-pointer">
                    <input type="radio" name="pay" />
                    <img src="/assets/upi.svg" alt="UPI" />
                  </label>

                  <label className="flex gap-x-3 items-center cursor-pointer">
                    <input type="radio" name="pay" />
                    <img src="/assets/paytm.svg" alt="Paytm" />
                  </label>

                  <label className="flex gap-x-3 items-center cursor-pointer">
                    <input type="radio" name="pay" />
                    <img src="/assets/phonepe.svg" alt="PhonePe" />
                  </label>

                  <label className="flex gap-x-3 items-center cursor-pointer">
                    <input type="radio" name="pay" />
                    <img src="/assets/gpay.svg" alt="GPay" />
                  </label>
                </div>
              </div>

              <div className="w-full">
                <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                  Fee Receipt{" "}
                </p>
                <div className="flex gap-x-5 mt-5">
                  <button
                    type="button"
                    className="w-fit h-[40px] px-5 gap-x-2 rounded-[10px] bg-[#2A4767] text-white font-medium text-[18px] flex justify-center items-center cursor-pointer "
                  >
                    View <Eye color="white" size={20} />
                  </button>
                  <button
                    type="button"
                    className="w-fit h-[40px] px-5 gap-x-2 rounded-[10px] bg-[#2A4767] text-white font-medium text-[18px] flex justify-center items-center cursor-pointer "
                  >
                    Download <Download color="white" size={20} />
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-[50%] xl:w-[40%] w-full flex flex-col gap-y-5">
              <p className="font-normal xl:text-[24px] md:text-[18px] text-[14px] text-[#2A4767] ">
                Fees Breakdown{" "}
              </p>

              <div className="w-full h-[80px] px-10 rounded-[13px] border border-[#2A4767] bg-white  drop-shadow-md drop-shadow-[#00000040] flex flex-col justify-center  ">
                <li className="font-normal text-[22px] text-[#2A4767] ">
                  Registration Fees
                </li>
                <p className="text-[#25272980] text-[18px] font-normal  ">
                  1,00,000 Rs
                </p>
              </div>

              <div className="w-full h-[80px] px-10 rounded-[13px] border border-[#2A4767] bg-white  drop-shadow-md drop-shadow-[#00000040] flex flex-col justify-center  ">
                <li className="font-normal text-[22px] text-[#2A4767] ">
                  Tuition Fees
                </li>
                <p className="text-[#25272980] text-[18px] font-normal  ">
                  1,00,000 Rs
                </p>
              </div>

              <div className="w-full h-[80px] px-10 rounded-[13px] border border-[#2A4767] bg-white  drop-shadow-md drop-shadow-[#00000040] flex flex-col justify-center  ">
                <li className="font-normal text-[22px] text-[#2A4767] ">
                  Security Deposit
                </li>
                <p className="text-[#25272980] text-[18px] font-normal  ">
                  1,00,000 Rs
                </p>
              </div>

              <div className="w-full h-[80px] px-10 rounded-[13px] border border-[#2A4767] bg-white  drop-shadow-md drop-shadow-[#00000040] flex flex-col justify-center  ">
                <li className="font-normal text-[22px] text-[#2A4767] ">
                  Other Charges
                </li>
                <p className="text-[#25272980] text-[18px] font-normal  ">
                  1,00,000 Rs
                </p>
              </div>

              <button className="w-full h-[50px] md:rounded-[50px] rounded-[40px] bg-[#2A4767] text-white font-medium md:text-[20px] text-[18px] flex justify-center items-center gap-x-3 mt-3 ">
                Submit <ArrowRight />
              </button>
            </div>
          </form>
        </div>

        {/* -------------- Application Confirmation -------------- */}
        <div className="w-full h-fit lg:rounded-[50px] md:rounded-[40px] rounded-[30px] p-5 border-2 mt-14 border-[#F8A813] ">
          <div className="w-fit px-5 h-[50px] rounded-[50px] border border-[#F8A813] drop-shadow-md bg-white drop-shadow-gray-300 flex justify-center items-center ">
            <p className="text-[#F8A813] font-medium text-[18px] font-montserrat">
              Application Confirmation
            </p>
          </div>

          <div className="w-[70%] h-[1px] bg-[#F8A813] my-7"></div>

          <p className="font-normal text-[24px] text-[#2A4767] pb-14 ">
            Once the student clears the evaluation and document check, parents
            will receive an official confirmation. Admission will be secured
            after payment of fees and completion of formalities. A welcome kit,
            school rules, academic calendar, and other details will be shared
            after final enrollment.
          </p>
        </div>
      </div>

      <div className="my-40 ">
        <FAQs />
      </div>

      <div className="mt-40 mb-10 ">
        <ContactUs />
      </div>

      <AlertPopup alert={alert} onClose={() => setAlert(null)} />
    </>
  );
};

export default AdmissionForm;
