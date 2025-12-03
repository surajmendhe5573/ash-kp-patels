import mongoose from "mongoose";

const admissionFormSchema = new mongoose.Schema({
  applicationDetails: {
    fullName: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    classApplyingFor: { type: String},
    sectionPreference: { type: String },
    residentialAddress: { type: String },
    contactNumber: { type: String },
    emailAddress: { type: String },
    aadharNumber: { type: String }, 
    nationalityAndReligion: { type: String },
    gender: { type: String, enum: ["Male", "Female", "Other"] },
  },

  documentVerification: {
    profilePicture: { type: String }, 
    birthCertificate: { type: String },
    transferCertificate: { type: String },
    reportCard: { type: String },
    casteCertificate: { type: String },
  },

  status: {type: String, enum: ["Application Submitted", "Documents Verified", "Payment Completed"], default: "Application Submitted" },
}, { timestamps: true });


export const ADMISSION_FORM_MODEL = mongoose.model("admission-form", admissionFormSchema);