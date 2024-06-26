import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserTasks.css"; // Import your CSS file for styling

const UserTasks = () => {
  const [taskLists, setTaskLists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserTaskLists = async () => {
      try {
        const internId = JSON.parse(localStorage.getItem("user_data"))._id;
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `http://localhost:3000/todo/lists/recipient/${internId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTaskLists(response.data);
      } catch (err) {
        setError(err.message || "Error fetching task lists.");
      } finally {
        setLoading(false);
      }
    };

    fetchUserTaskLists();
  }, []);

  const toggleTaskStatus = async (listId, taskId, completed) => {
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `http://localhost:3000/todo/lists/${listId}/tasks/${taskId}`,
        { completed: !completed },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      // Update state after successful toggle
      setTaskLists((prevLists) =>
        prevLists.map((list) =>
          list._id === listId
            ? {
                ...list,
                tasks: list.tasks.map((task) =>
                  task._id === taskId
                    ? { ...task, completed: !completed }
                    : task
                ),
              }
            : list
        )
      );
    } catch (err) {
      console.error("Error toggling task status:", err);
      setError("Error toggling task status. Please try again later.");
    }
  };

  if (loading) {
    return <p className="loading-message">Loading task lists...</p>;
  }

  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="user-tasks-container">
      <h2 className="tasks-heading">Task Lists</h2>
      {taskLists.length === 0 ? (
        <p className="no-tasks-message">No task lists found.</p>
      ) : (
        taskLists.map((list) => (
          <div key={list._id} className="task-list">
            <h3 className="list-name">{list.name}</h3>
            <ul className="tasks">
              <h6 style={{ textAlign: "center", textDecoration: "underline" }}>
                Tasks
              </h6>
              {list.tasks.map((task) => (
                <li key={task._id} className="task">
                  <label className="task-text">{task.text}</label>
                  <span
                    className={`task-status ${
                      task.completed ? "completed" : "pending"
                    }`}
                    onClick={() =>
                      toggleTaskStatus(list._id, task._id, task.completed)
                    }
                  >
                    {task.completed ? "Completed" : "Pending"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default UserTasks;
