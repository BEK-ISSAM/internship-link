// controllers/ApplicationController.js
import Job from '../models/JobModel.js';

export const showApplications = async (req, res) => {
  try {
    const userId = req.user._id;
    console.log(userId)
    if (!userId) {
      return res.status(400).json({ error: "User ID is required" });
    }

    const jobs = await Job.find({ postedBy: userId })
      .populate('applicants')
      .exec();

    res.json(jobs);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ error: err.message });
  }
};

export const showApplicationById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId).populate('applicants').exec();
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }

    res.json(job);
  } catch (err) {
    console.error('Error fetching job by ID:', err);
    res.status(500).json({ error: err.message });
  }
};
