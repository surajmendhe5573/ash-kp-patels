import { Router } from 'express';
import Admission_formController from './admission_form.controller.js';
import uploadImageKit from '../../helpers/admissionDocument.upload.js';

const router = Router();
const admission_formController = new Admission_formController();

router.post('/application', admission_formController.submitApplication);
router.post('/documents/:id', uploadImageKit, admission_formController.uploadDocuments);
router.get('/', admission_formController.getAll);

router.put("/:id", uploadImageKit, admission_formController.editAdmissionForm);
router.delete("/:id", admission_formController.deleteAdmissionForm);
router.get("/:id", admission_formController.getById);

export default router;
