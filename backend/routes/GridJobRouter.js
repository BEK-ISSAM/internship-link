import express from 'express';
import { getJobById, getJobsForGrid } from '../controllers/GridJobController.js';

const router = express.Router();

router.get('/jobs-grid', getJobsForGrid);
router.get('/jobsDetails/:id', getJobById);


// Other routes ...

export default router;
