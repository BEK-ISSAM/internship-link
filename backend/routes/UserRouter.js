import express from 'express';
import { registerUser, loginUser, logoutUser , updateIntern } from '../controllers/UserController.js';

const router = express.Router();

// Route pour l'enregistrement des utilisateurs
router.post('/registerUser', registerUser);

// Route pour la connexion des utilisateurs
router.post('/loginUser', loginUser);

router.post('/logoutUser' , logoutUser);

router.put('/updateIntern/:id', updateIntern);

export default router;
