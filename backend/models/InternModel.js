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
  phone: String
});

// internSchema.pre('save', async function(next) {
//   if (this.isModified('password') || this.isNew) {
//     try {
//       const salt = await bcrypt.genSalt(10);
//       this.password = await bcrypt.hash(this.password, salt);
//       next();
//     } catch (err) {
//       next(err);
//     }
//   } else {
//     next();
//   }
// });

const Intern = mongoose.model('Intern', internSchema);

export default Intern;