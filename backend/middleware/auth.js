import jwt from 'jsonwebtoken';
import Intern from '../models/InternModel.js';

export const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], 'imad');
    const intern = await Intern.findById(decoded.id);

    if (!intern) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    req.user = intern; // Attach the user object to the request
    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    return res.status(401).json({ message: 'Unauthorized' });
  }
};
