import bcrypt from "bcrypt";
import Intern from "../models/InternModel.js";
import jwt from "jsonwebtoken";

// Enregistrer un nouvel utilisateur
export const registerUser = async (req, res) => {
  try {
    const { name, lastName, password, email , role } = req.body;

    // Hacher le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Créer un nouvel utilisateur
    const newIntern = new Intern({
      name: name + " " + lastName,      
      password: hashedPassword,
      email,
      role
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

      // Renvoyer le rôle de l'utilisateur avec la réponse
      res.json({ message: "Connexion réussie", intern, token });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
};

export const logoutUser = async (res, req) => {
  res.jwt.TokenExpiredError();
  res.json({ message: "token supprime" });
};

export const updateIntern = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
      // Si le mot de passe est fourni, le hacher avant de le sauvegarder
      if (updatedData.password) {
          const salt = await bcrypt.genSalt(10);
          updatedData.password = await bcrypt.hash(updatedData.password, salt);
      }

      // Si un fichier CV est fourni, ajouter le chemin au champ 'cv'
      if (req.file) {
          updatedData.cv = req.file.path;
      }

      const updatedIntern = await Intern.findByIdAndUpdate(id, updatedData, { new: true });

      if (!updatedIntern) {
          return res.status(404).json({ message: 'Intern not found' });
      }

      res.status(200).json(updatedIntern);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

