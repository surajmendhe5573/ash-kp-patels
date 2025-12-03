import { ADMISSION_FORM_MODEL } from "./admission_form.model.js"; 
import imagekit from "../../helpers/imagekit.js";

class Admission_formService {
   
  // Step 1: Save application form
  async submitApplication(data) {
    const newForm = await ADMISSION_FORM_MODEL.create({
      applicationDetails: data,
      status: "Application Submitted",
    });
    return newForm;
  }

  // Step 2: Upload document 
  async uploadDocuments(formId, files) {
    const form = await ADMISSION_FORM_MODEL.findById(formId);
    if (!form) throw new Error("Form not found");

    const uploadToImageKit = async (file) => {
      if (!file) return null;
      const result = await imagekit.upload({
        file: file.buffer.toString("base64"),
        fileName: file.originalname,
      });
      return result.url;
    };

    const profilePicture = await uploadToImageKit(files?.profilePicture?.[0]);
    const birthCertificate = await uploadToImageKit(files?.birthCertificate?.[0]);
    const transferCertificate = await uploadToImageKit(files?.transferCertificate?.[0]);
    const reportCard = await uploadToImageKit(files?.reportCard?.[0]);
    const casteCertificate = await uploadToImageKit(files?.casteCertificate?.[0]);

    form.documentVerification = {
      profilePicture: profilePicture || form.documentVerification.profilePicture,
      birthCertificate: birthCertificate || form.documentVerification.birthCertificate,
      transferCertificate: transferCertificate || form.documentVerification.transferCertificate,
      reportCard: reportCard || form.documentVerification.reportCard,
      casteCertificate: casteCertificate || form.documentVerification.casteCertificate,
    };

    form.status = "Documents Verified";
    await form.save();

    return form;
  }

  async getAll() {
    return await ADMISSION_FORM_MODEL.find().sort({ createdAt: -1 });
  }

  async editAdmissionForm(id, updateData, files) {
  const form = await ADMISSION_FORM_MODEL.findById(id);
  if (!form) throw new Error("Admission form not found");

  const uploadToImageKit = async (file) => {
    if (!file) return null;
    const result = await imagekit.upload({
      file: file.buffer.toString("base64"),
      fileName: file.originalname,
    });
    return result.url;
  };

  const profilePicture = await uploadToImageKit(files?.profilePicture?.[0]);
  const birthCertificate = await uploadToImageKit(files?.birthCertificate?.[0]);
  const transferCertificate = await uploadToImageKit(files?.transferCertificate?.[0]);
  const reportCard = await uploadToImageKit(files?.reportCard?.[0]);
  const casteCertificate = await uploadToImageKit(files?.casteCertificate?.[0]);

  for (const key in updateData) {
    if (Object.prototype.hasOwnProperty.call(form.applicationDetails, key)) {
      form.applicationDetails[key] = updateData[key];
    }
  }

  // Update document URLs if new files are uploaded 
  form.documentVerification = {
    profilePicture: profilePicture || form.documentVerification.profilePicture,
    birthCertificate: birthCertificate || form.documentVerification.birthCertificate,
    transferCertificate: transferCertificate || form.documentVerification.transferCertificate,
    reportCard: reportCard || form.documentVerification.reportCard,
    casteCertificate: casteCertificate || form.documentVerification.casteCertificate,
  };

  await form.save();
  return form;
}

  async deleteAdmissionForm(id) {
    return await ADMISSION_FORM_MODEL.findByIdAndDelete(id);
  }

  async getById(id){
    return await ADMISSION_FORM_MODEL.findById(id);
  }

}

export default new Admission_formService();
