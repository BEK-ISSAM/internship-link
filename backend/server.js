// Import required modules
import express from 'express';
import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import Company from './models/CompanyModel.js';
import Intern from './models/InternModel.js';
import Job from './models/JobModel.js';
import cors from 'cors';
import UserRouter from './routes/UserRouter.js'



const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};


// Initialize Express app
const app = express();

app.use(cors(corsOptions));
// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/internlinkDB')
.then(() => {
  console.log('Connected to MongoDB');

})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});


app.post("/CreatJob", (req,res)=>{
  Job.create(req.body)
  .then(Job=>res.json(Job))
  .catch(err=>res.json(err))

})

app.get("/GetJobs", (req,res)=>{
  Job.find({})
  .then(Job=>res.json(Job))
  .catch(err=>res.json(err))
  
})


//Authentification 

app.use('/User/', UserRouter);

// app.post("/registerUser" , (req , res)=>{
//   Intern.create(req.body)
//   .then(Intern=>{res.json(Intern)  })
  
//   .catch(err=>res.json(err))

// })

// app.get("/getUser" , (req,res)=>{
//   Intern.findOne({email : email})
// })

// Initialization function to insert data into collections
//----------------------------------------------------------------------------------------

// Create a new intern object
// const newIntern = new Intern({
//   name: 'John Doe',
//   domain: 'Software Engineering',
//   countryCity: 'New York, USA',
//   cv: 'path/to/cv.pdf',
//   age: 25,
//   summary: 'Experienced software engineer with a passion for building scalable web applications.',
//   skills: 'JavaScript, React, Node.js, MongoDB',
//   gender: 'Male',
//   email: 'john@example.com',
//   phone: '123-456-7890'
// });

// // Save the intern object to the database
// newIntern.save()
//   .then(() => console.log('Intern inserted successfully'))
//   .catch(err => console.error('Error inserting intern', err));



// // Assuming you have a company document saved in the database with _id: companyId
// const companyId = '6644736b387d013e4a920610';

// // Create a new job object
// const newJob = new Job({
//   title: 'Software Engineer',
//   description: 'Develop and maintain scalable web applications.',
//   datePosted: new Date(),
//   type: 'Full-time',
//   numberOfApplicants: 0,
//   salary: 80000,
//   company: companyId, // Assign the ObjectId of the company
//   location: 'New York, USA',
//   requirements: 'Bachelor\'s degree in Computer Science, experience with JavaScript, React, and Node.js.',
//   responsibilities: 'Design and develop web applications, collaborate with team members, and participate in code reviews.',
//   postExpiryDate: new Date(new Date().getTime() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
//   postedBy: 'Recruiter' // Assuming 'Recruiter' is the name of the person who posted the job
// });

// // Save the job object to the database
// newJob.save()
//   .then(() => console.log('Job inserted successfully'))
//   .catch(err => console.error('Error inserting job', err));


// Create a new company object
// const newCompany = new Company({
//   name: 'Example Company',
//   headquarters: 'Location',
//   email: 'company@example.com',
//   phone: '123-456-7890',
//   numberOfJobPosts: 0,
//   numberOfStaff: 10,
//   fieldOfWork: 'Technology'
// });

// // Save the company object to the database
// newCompany.save()
//   .then(() => console.log('Company inserted successfully'))
//   .catch(err => console.error('Error inserting company', err));

//----------------------------------------------------------------------------------------


// Middleware to verify JWT token
const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, 'your_secret_key');
    const intern = await Intern.findById(decoded.id);
    if (!intern) {
      return res.status(401).json({ message: 'Unauthorized' });
    }
    req.user = intern;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};

// Route for user login and JWT token generation
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const intern = await Intern.findOne({ email });
    if (!intern) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, intern.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Generate JWT token
    const token = jwt.sign({ id: intern._id }, 'your_secret_key', { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Protected route example
app.get('/protected', verifyToken, (req, res) => {
  res.json({ message: 'Protected route', user: req.user });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
