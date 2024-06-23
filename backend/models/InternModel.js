import mongoose, { Types } from "mongoose";
import bcrypt from "bcrypt";

const internSchema = new mongoose.Schema({
  name: String,
  domain: String,
  password : String,
  countryCity: String,
  cv: String, // You may want to store file path or URL instead of actual file.
  age: Number,
  summary: String,
  skills: String,
  gender: String,
  email: { type : String , unique: true  },
  role : {type : String , default : "student" },
  phone: String,
  applications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
  internsManaged: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Intern' }],
});



const Intern = mongoose.model('Intern', internSchema);
export default Intern;