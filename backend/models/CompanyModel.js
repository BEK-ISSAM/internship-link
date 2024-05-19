import mongoose from "mongoose"

const companySchema = new mongoose.Schema({
  name: String,
  headquarters: String,
  email: String,
  phone: String,
  numberOfJobPosts: Number,
  numberOfStaff: Number,
  fieldOfWork: String
});

const Company = mongoose.model('Company', companySchema);

export default Company;