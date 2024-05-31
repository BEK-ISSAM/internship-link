import mongoose from "mongoose";

const JobSchema = new mongoose.Schema({
  title: String,
  description: String,
  datePosted: Date,
  type: String,
  numberOfApplicants: Number,
  salary: Number,
  contract: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  location: String,
  requirements: String,
  responsibilities: String,
  postExpiryDate: Date,
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Recruiter' },
  assignedTo: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Intern' }]
});

const Job = mongoose.model('Job', JobSchema);

export default Job;
