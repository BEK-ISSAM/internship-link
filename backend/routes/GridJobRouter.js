import express from 'express';
import { getJobById, getJobsForGrid, applyToJob  } from '../controllers/GridJobController.js';

const router = express.Router();

router.get('/jobs-grid', getJobsForGrid);
router.get('/jobsDetails/:id', getJobById);
router.post('/apply/:id', applyToJob);

// Other routes ...

export default router;
