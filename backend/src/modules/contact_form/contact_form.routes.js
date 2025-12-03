import { Router } from 'express';
import Contact_formController from './contact_form.controller.js';

const router = Router();
const contact_formController = new Contact_formController();

router.post("/submit", contact_formController.submitForm);

export default router;
