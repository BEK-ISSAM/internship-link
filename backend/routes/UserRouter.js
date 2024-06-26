import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  updateIntern,
  getCompanyById,
  getApplicationsByInternId,
  cancelApplication,
} from "../controllers/UserController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// Routes for user management
router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.post("/logoutUser", logoutUser);
router.put("/updateIntern/:id", updateIntern);
router.get("/company/:id", verifyToken, getCompanyById);
router.get("/applications/:internId", verifyToken, getApplicationsByInternId);
router.delete("/applications/:jobId", verifyToken, cancelApplication);

export default router;
