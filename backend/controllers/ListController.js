import List from '../models/ListModel.js';
import Intern from '../models/InternModel.js';

// Create a new task list
export const createList = async (req, res) => {
  try {
    const { recipients, text } = req.body;
    const newList = new List({
      sender: req.user.id,
      recipients,  // Array of selected intern IDs
      tasks: [{ text, completed: false }], // Initial task
    });
    await newList.save();
    res.json(newList);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get task lists by sender ID
export const getListsBySender = async (req, res) => {
  try {
    const { senderId } = req.params;
    const lists = await List.find({ sender: senderId }).populate('sender recipients');
    res.json(lists);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Add task to a specific list
export const addTask = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await List.findById(listId);
    const newTask = req.body;
    list.tasks.push(newTask);
    await list.save();
    res.json(list);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get interns managed by the current user
export const getInternsManaged = async (req, res) => {
  try {
    const { senderId } = req.params;
    const lists = await List.find({ sender: senderId }).populate('recipients');
    const recipientIds = lists.flatMap(list => list.recipients.map(recipient => recipient._id.toString()));
    const interns = await Intern.find({ _id: { $in: recipientIds } });
    res.json(interns);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Get all interns managed (if required)
export const getAllInternsManaged = async (req, res) => {
  const { senderId } = req.params;

  try {
    // Find the sender (intern) by their ID
    const sender = await Intern.findById(senderId).exec();

    if (!sender) {
      return res.status(404).json({ error: "Sender not found" });
    }

    // Retrieve the interns managed by the sender
    const internsManaged = await Intern.find({ _id: { $in: sender.internsManaged } }).exec();

    res.status(200).json(internsManaged);
  } catch (error) {
    console.error("Error fetching interns managed", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

