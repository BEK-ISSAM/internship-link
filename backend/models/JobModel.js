import mongoose from "mongoose"

const jobSchema = new mongoose.Schema({
  title: String,
  description: String,
  datePosted: Date,
  type: String,
  numberOfApplicants: Number,
  salary: Number,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  location: String,
  requirements: String,
  responsibilities: String,
  postExpiryDate: Date,
  postedBy: String // Assuming 'postedBy' is a string representing the name of a person
});

const Job = mongoose.model('Job', jobSchema);

export default Job;