import express from 'express';
import { handleGenerate } from '../controllers/ai_controller.js';

const router = express.Router();

router.post("/generate", handleGenerate);

export default router;
