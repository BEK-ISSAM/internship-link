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
import JobRouter from "./routes/JobRouter.js"
import ApplicationRouter from "./routes/ApplicationRouter.js"
import { verifyToken } from './middleware/auth.js';
import ListRouter from './routes/ListRouter.js';
import GridJobRouter from './routes/GridJobRouter.js';


const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};


// Initialize Express app
const app = express();

app.use(cors());
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

app.use('/User', UserRouter);
app.use("/Jobs", JobRouter);
app.use("/applications", ApplicationRouter)
app.use('/todo', ListRouter);
app.use("/Grid" , GridJobRouter)
app.use("/companies" , GridJobRouter)


// Route for user login and JWT token generation
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const intern = await Intern.findOne({ email });
    if (!intern) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const validPassword = await bcrypt.compare(password, intern.password);
    if (!validPassword) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ id: intern._id }, 'imad', { expiresIn: '1h' });
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
