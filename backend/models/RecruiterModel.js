import mongoose, { Types } from "mongoose";
import bcrypt from "bcrypt";

const RecruiterSchema = new mongoose.Schema({
  name: String,
  domain: String,
  password: String,
  countryCity: String,
  age: Number,
  summary: String,
  gender: String,
  email: { type: String, unique: true },
  role: { type: String, default: "admin" },
  phone: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  postedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  internsManaged: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Intern' }],
});

RecruiterSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
  }
});

const Recruiter = mongoose.model('Recruiter', RecruiterSchema);

export default Recruiter;
