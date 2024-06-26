import Job from "../models/JobModel.js";
import Company from "../models/CompanyModel.js";
import Intern from "../models/InternModel.js";

// Create a new job
export const createJob = async (req, res) => {
  try {
    console.log("Received request body:", req.body);
    const {
      title,
      description,
      type,
      salary,
      contract,
      location,
      requirements,
      responsibilities,
      assignedTo,
      companyId,
    } = req.body;

    let assignedToInterns = [];
    let assignedInternsArray = assignedTo || []; // Default to empty array if not provided
    if (assignedInternsArray.length > 0) {
      // Validate assignedTo interns
      assignedToInterns = await Intern.find({
        _id: { $in: assignedInternsArray },
      });
      if (assignedInternsArray.length !== assignedToInterns.length) {
        return res
          .status(400)
          .json({ message: "One or more assigned interns not found" });
      }
    }

    const newJob = new Job({
      title,
      description,
      datePosted: new Date(),
      type,
      salary,
      contract,
      company: companyId,
      location,
      requirements,
      responsibilities,
      postExpiryDate: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000),
      postedBy: "6659384479f01bd25038d7ef",
      assignedTo: assignedInternsArray,
    });

    const savedJob = await newJob.save();
    res.status(201).json(savedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
    console.log("An error occurred during job creation:", err);
  }
};

// Get all jobs
export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find()
      .populate("company")
      .populate("postedBy")
      .populate("assignedTo");
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a job by ID
export const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id)
      .populate("company")
      .populate("postedBy")
      .populate("assignedTo");
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a job
export const updateJob = async (req, res) => {
  try {
    const {
      title,
      description,
      type,
      salary,
      contract,
      companyId,
      location,
      requirements,
      responsibilities,
      postExpiryDate,
      assignedTo,
    } = req.body;

    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    if (companyId) {
      const company = await Company.findById(companyId);
      if (!company) {
        return res.status(400).json({ message: "Company not found" });
      }
      job.company = company._id;
    }

    job.title = title || job.title;
    job.description = description || job.description;
    job.type = type || job.type;
    job.salary = salary || job.salary;
    job.contract = contract || job.contract;
    job.location = location || job.location;
    job.requirements = requirements || job.requirements;
    job.responsibilities = responsibilities || job.responsibilities;
    job.postExpiryDate = postExpiryDate || job.postExpiryDate;
    job.assignedTo = assignedTo || []; // Ensure assignedTo is an empty array if not provided

    let assignedToInterns = [];
    if (job.assignedTo.length > 0) {
      // Validate assignedTo interns
      assignedToInterns = await Intern.find({ _id: { $in: job.assignedTo } });
      if (job.assignedTo.length !== assignedToInterns.length) {
        return res
          .status(400)
          .json({ message: "One or more assigned interns not found" });
      }
    }

    const updatedJob = await job.save();
    res.json(updatedJob);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a job
export const deleteJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    await job.remove();
    res.json({ message: "Job deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

import Job from "../models/JobModel.js";
import Company from "../models/CompanyModel.js";
import Recruiter from "../models/RecruiterModel.js";
import Intern from "../models/InternModel.js";

export const acceptApplication = async (req, res) => {
  try {
    const { jobId, applicantId } = req.params;
    const recruiterId = req.user._id; // Assuming you have middleware to attach the user (recruiter) to the request
    console.log(recruiterId)
    console.log(applicantId)

    // Find the job by ID
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    // Add applicant to assignedTo list and remove from applicants list
    job.assignedTo.push(applicantId);
    job.applicants = job.applicants.filter(
      (id) => id.toString() !== applicantId
    );
    await job.save();

    // Find the intern by ID
    const intern = await Intern.findById(applicantId);
    if (!intern) {
      return res.status(404).json({ message: "Intern not found" });
    }

    // Remove job from intern's applications list and set the intern's company
    intern.applications = intern.applications.filter(
      (id) => id.toString() !== jobId
    );
    intern.company = job.company; // Set the intern's company to the job's company
    await intern.save();

    // Add intern to recruiter's internsManaged list
    const recruiter = await Intern.findById(recruiterId);
    recruiter.internsManaged.push(intern._id);
    await recruiter.save();

    res.status(200).json({ message: "Application accepted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

  

export const rejectApplication = async (req, res) => {
  try {
    const { jobId, applicantId } = req.params;

    // Update job to remove applicant from applicants list
    const job = await Job.findById(jobId);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    job.applicants = job.applicants.filter(
      (id) => id.toString() !== applicantId
    );
    await job.save();

    // Update intern application status
    const intern = await Intern.findById(applicantId);
    if (!intern) {
      return res.status(404).json({ message: "Intern not found" });
    }

    intern.applications = intern.applications.filter(
      (id) => id.toString() !== jobId
    );
    await intern.save();

    res.status(200).json({ message: "Application rejected" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
