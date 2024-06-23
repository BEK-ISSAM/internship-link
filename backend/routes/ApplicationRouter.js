// routes/ApplicationRouter.js
import express from 'express';
import { showApplications, showApplicationById } from '../controllers/ApplicationController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/show', verifyToken, showApplications);
router.get('/show/:id', verifyToken, showApplicationById);

export default router;
