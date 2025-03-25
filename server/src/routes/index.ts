import { feedbackRouter } from './api/feedback-routes.js';
import express from 'express';
const router = express.Router();

router.use('/feedback', feedbackRouter);

export default router;
