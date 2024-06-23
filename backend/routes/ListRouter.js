import express from "express";
import {
  createList,
  getListsBySender,
  addTask,
  getInternsManaged,
  getAllInternsManaged
} from "../controllers/ListController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/lists", verifyToken, createList);
router.get("/lists/sender/:senderId", verifyToken, getListsBySender);
router.post("/lists/:listId/tasks", verifyToken, addTask);
router.get('/interns/managed/:senderId', verifyToken, getInternsManaged);
router.get('/allinterns/managed/:senderId', verifyToken, getAllInternsManaged);


export default router;

