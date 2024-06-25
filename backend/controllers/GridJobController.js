import Job from '../models/JobModel.js';

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