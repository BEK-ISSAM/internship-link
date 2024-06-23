import bcrypt from "bcrypt";
import Intern from "../models/InternModel.js";
import jwt from "jsonwebtoken";

// Enregistrer un nouvel utilisateur
export const registerUser = async (req, res) => {
  try {
    const { name, lastName, password, email } = req.body;

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newIntern = new Intern({
      name: name + " " + lastName,      
      password: hashedPassword,
      email,
    });

    // Sauvegarder l'utilisateur dans la base de données
    const savedIntern = await newIntern.save();
    res.status(201).json(savedIntern);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Connecter un utilisateur
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const intern = await Intern.findOne({ email });

    if (!intern) {
      return res.status(400).json({ message: "Utilisateur non trouvé" });
    }

    const isMatch = await bcrypt.compare(password, intern.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }
    const token = jwt.sign({ id: intern._id, name: intern.name }, "imad", {
      expiresIn: "1h",
    });

    res.json({ message: "Connexion réussie", intern, token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logoutUser = async (res, req) => {
  res.jwt.TokenExpiredError();
  res.json({ message: "token supprime" });
};
