import Job from '../models/JobModel.js';
import Intern from '../models/InternModel.js';

// Get all jobs for grid cards
export const getJobsForGrid = async (req, res) => {
    try {
        const jobs = await Job.find().select('title description type salary'); // Select only needed fields
        res.json(jobs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const getJobById = async (req, res) => {
  try {
    const jobId = req.params.id;
    const job = await Job.findById(jobId)
                          .populate('company', 'name'); // Remplacez 'name address' par les champs que vous souhaitez récupérer de la compagnie

                          
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    
    res.json(job);
  } catch (error) {
    console.error('Error fetching job details:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


export const applyToJob = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    const job = await Job.findById(id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }

    const intern = await Intern.findById(userId);
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }

    if (!job.applicants.includes(userId)) {
      job.applicants.push(userId);
      job.numberOfApplicants = job.applicants.length;
      await job.save();
    }

    res.status(200).json({ message: 'Successfully applied for the job' });
  } catch (error) {
    console.error('Error applying to the job:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};