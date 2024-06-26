import express from 'express';
import { createJob, getAllJobs, getJobById, updateJob, deleteJob, acceptApplication, rejectApplication} from '../controllers/JobController.js';
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Create a new job
router.post("/CreateJob", createJob);

// Get all jobs
router.get("/GetJobs", getAllJobs);

// Get a job by ID
router.get("/GetJob/:id", getJobById);

// Update a job
router.put("/EditJob/:id", updateJob);

// Delete a job
router.delete("/DeleteJob/:id", deleteJob);

router.post('/accept/:jobId/:applicantId', verifyToken, acceptApplication);
router.post('/reject/:jobId/:applicantId', verifyToken, rejectApplication);

export default router;
