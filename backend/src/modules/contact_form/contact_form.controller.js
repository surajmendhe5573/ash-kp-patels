import Contact_formService from "./contact_form.service.js";
import { statusCode } from '../../utils/constants/statusCode.js';

export default class Contact_formController {
  constructor() {
    this.contactService = Contact_formService; 
  }

  submitForm = async (req, res, next) => {
    try {
      const result = await this.contactService.submitForm(req.body);
      res.success(result.message, statusCode.OK);
    } catch (err) {
      next(err);
    }
  };
}
