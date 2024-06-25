import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const taskSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
  text: String,
  completed: Boolean,
});

const listSchema = new mongoose.Schema({
  listId: { type: String, default: uuidv4 },  // Assuming listId is a UUIDv4
  name: { type: String, unique: true },      // Unique name attribute for each list
  tasks: [taskSchema],
  sender: { type: mongoose.Schema.Types.ObjectId, ref: 'Intern', required: true },
  recipients: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Intern', required: true }]
});

const List = mongoose.model('List', listSchema);

export default List;
