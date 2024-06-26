import express from "express";
import {
  createList,
  getListsBySender,
  addTask,
  getInternsManaged,
  getAllInternsManaged,
  updateTaskStatus,
  deleteTask,
  getListsByRecipient,
  toggleTaskStatus
} from "../controllers/ListController.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/lists", verifyToken, createList);
router.get("/lists/sender/:senderId", verifyToken, getListsBySender);
router.post("/lists/:listId/tasks", verifyToken, addTask);
router.get('/interns/managed/:senderId', verifyToken, getInternsManaged);
router.get('/allinterns/managed/:senderId', verifyToken, getAllInternsManaged);
router.put('/lists/:listId/tasks/:taskId', verifyToken, updateTaskStatus);
router.put('/lists/:listId/tasks/toggle/:taskId', verifyToken, toggleTaskStatus);
router.delete('/lists/:listId/tasks/:taskId', verifyToken, deleteTask);
router.get('/lists/recipient/:recipientId', verifyToken, getListsByRecipient);

export default router;
