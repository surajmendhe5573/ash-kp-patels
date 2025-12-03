import Admission_formService from "./admission_form.service.js";
import { statusCode } from '../../utils/constants/statusCode.js';

export default class Admission_formController {
  constructor() {
    this.admission_formService =  Admission_formService;
  }

  submitApplication = async (req, res, next) => {
    try {
      const form = await this.admission_formService.submitApplication(req.body);
      res.success("Application submitted successfully", form, statusCode.CREATED);
    } catch (err) {
      next(err);
    }
  };

  uploadDocuments = async (req, res, next) => {
    try {
      const files = req.files;

      const updatedForm = await this.admission_formService.uploadDocuments(req.params.id, files);
      res.success("Documents uploaded successfully", updatedForm, statusCode.OK);
    } catch (err) {
      next(err);
    }
  };

  getAll = async (req, res, next) => {
    try {
      const forms = await this.admission_formService.getAll();
      res.success("All admission forms fetched successfully", forms, statusCode.OK);
    } catch (err) {
      next(err);
    }
  };

  editAdmissionForm= async(req, res, next)=> {
  try {
    const updatedForm = await this.admission_formService.editAdmissionForm(req.params.id, req.body, req.files);

    res.success("Admission form updated successfully", updatedForm, statusCode.OK);
  } catch (err) {
    next(err)
  }
};

  deleteAdmissionForm= async(req, res, next)=> {
  try {
    const deleteForm = await this.admission_formService.deleteAdmissionForm(req.params.id);
    if(!deleteForm) return res.fail("Admission form not found", statusCode.NOT_FOUND);

    res.success("Admission form deleted successfully", statusCode.OK);
  } catch (err) {
    next(err)
  }
};

  getById= async(req, res, next)=> {
  try {
    const admissionForm = await this.admission_formService.getById(req.params.id);
    if(!admissionForm) return res.fail("Admission form not found", statusCode.NOT_FOUND);

    res.success("Admission form fetched successfully", admissionForm, statusCode.OK);
  } catch (err) {
    next(err)
  }
};

}
