import mongoose from "mongoose"

const internSchema = new mongoose.Schema({
  name: String,
  domain: String,
  countryCity: String,
  cv: String, // You may want to store file path or URL instead of actual file.
  age: Number,
  summary: String,
  skills: String,
  gender: String,
  email: String,
  phone: String
});

const Intern = mongoose.model('Intern', internSchema);

export default Intern;