import List from "../models/ListModel.js";
import Intern from "../models/InternModel.js";

// Update task status
export const updateTaskStatus = async (req, res) => {
  try {
    const { listId, taskId } = req.params;
    const { completed } = req.body;

    const updatedList = await List.findOneAndUpdate(
      { _id: listId, "tasks._id": taskId },
      { $set: { "tasks.$.completed": completed } },
      { new: true }
    );

    if (!updatedList) {
      return res.status(404).json({ message: "List or Task not found" });
    }

    res.json(updatedList);
  } catch (error) {
    console.error("Error updating task status:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Create a new task list
export const createList = async (req, res) => {
  try {
    const { recipients, text, listName } = req.body; // Extract listName from req.body
    const newList = new List({
      sender: req.user.id,
      recipients,
      name: listName, // Assign listName to the newList object
      tasks: [{ text, completed: false }],
    });
    await newList.save();
    res.json(newList);
  } catch (error) {
    console.error("Error creating list:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


// Get task lists by sender ID
export const getListsBySender = async (req, res) => {
  try {
    const { senderId } = req.params;
    const lists = await List.find({ sender: senderId }).populate(
      "sender recipients"
    );
    res.json(lists);
  } catch (error) {
    console.error("Error fetching lists by sender:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Add task to a specific list
export const addTask = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await List.findById(listId);
    if (!list) {
      return res.status(404).json({ message: "List not found" });
    }
    const newTask = req.body;
    list.tasks.push(newTask);
    await list.save();
    res.json(list);
  } catch (error) {
    console.error("Error adding task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Delete task from a list
export const deleteTask = async (req, res) => {
  const { listId, taskId } = req.params;
  try {
    const updatedList = await List.findByIdAndUpdate(
      listId,
      { $pull: { tasks: { _id: taskId } } },
      { new: true }
    );
    if (!updatedList) {
      return res.status(404).json({ message: "List or Task not found" });
    }
    res.json(updatedList);
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get interns managed by the current user
export const getInternsManaged = async (req, res) => {
  try {
    const { senderId } = req.params;
    const lists = await List.find({ sender: senderId }).populate("recipients");
    const recipientIds = lists.flatMap((list) =>
      list.recipients.map((recipient) => recipient._id.toString())
    );
    const interns = await Intern.find({ _id: { $in: recipientIds } });
    res.json(interns);
  } catch (error) {
    console.error("Error fetching interns managed:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Get all interns managed (if required)
export const getAllInternsManaged = async (req, res) => {
  const { senderId } = req.params;

  try {
    const sender = await Intern.findById(senderId).exec();

    if (!sender) {
      return res.status(404).json({ error: "Sender not found" });
    }

    const internsManaged = await Intern.find({
      _id: { $in: sender.internsManaged },
    }).exec();

    res.status(200).json(internsManaged);
  } catch (error) {
    console.error("Error fetching all interns managed:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
