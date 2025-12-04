 import { CONTACT_FORM_MODEL } from "./contact_form.model.js";
 import nodemailer from "nodemailer";
 
 class Contact_formService {
   
  async submitForm({ name, email, phoneNo, message }) {
    
    await CONTACT_FORM_MODEL.create({ name, email, phoneNo, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS  
      }
    });

  const mailOptions = {
  from: `"Pruthatek Contact Form" <${process.env.EMAIL_USER}>`,
  replyTo: email, 
  to: "surajmendhe32@gmail.com",
  // to: "info@pruthatek.com",
  subject: "New Contact Form Submission",
  html: `
    <h3>New Contact Form Submission</h3>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>phoneNo:</b> ${phoneNo || "N/A"}</p>
    <p><b>Message:</b></p>
    <p>${message}</p>
  `
};

    await transporter.sendMail(mailOptions);

    return { message: "Your message has been sent successfully!" };
  }
}

export default new Contact_formService();
