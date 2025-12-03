import mongoose from "mongoose";

const contactFormSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNo: { type: String },
  message: { type: String, required: true }

}, { timestamps: true });

export const CONTACT_FORM_MODEL = mongoose.model("contact-form", contactFormSchema);
