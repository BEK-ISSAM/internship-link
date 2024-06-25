import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ShowLists.css";

const ShowLists = () => {
  const [lists, setLists] = useState([]);
  const [internsManaged, setInternsManaged] = useState([]);
  const [selectedInterns, setSelectedInterns] = useState([]);
  const [allInternsManaged, setAllInternsManaged] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // State for input fields
  const [listNewTaskText, setListNewTaskText] = useState({});
  const [internNewTaskText, setInternNewTaskText] = useState("");
  const [newListName, setNewListName] = useState("");

  useEffect(() => {
    fetchLists();
    fetchInternsManaged();
    fetchAllInternsManaged();
  }, []);

  const fetchLists = async () => {
    setIsLoading(true);
    try {
      const userId = JSON.parse(localStorage.getItem("user_data"))._id;
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:3000/todo/lists/sender/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setLists(response.data);
      // Initialize state for each list's new task text input
      const initialListNewTaskText = {};
      response.data.forEach((list) => {
        initialListNewTaskText[list._id] = "";
      });
      setListNewTaskText(initialListNewTaskText);
    } catch (error) {
      console.error("Error fetching lists", error);
      setError("Error fetching lists. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchInternsManaged = async () => {
    setIsLoading(true);
    try {
      const userId = JSON.parse(localStorage.getItem("user_data"))._id;
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:3000/todo/interns/managed/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setInternsManaged(response.data);
    } catch (error) {
      console.error("Error fetching interns managed", error);
      setError("Error fetching interns managed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAllInternsManaged = async () => {
    setIsLoading(true);
    try {
      const userId = JSON.parse(localStorage.getItem("user_data"))._id;
      const token = localStorage.getItem("token");

      const response = await axios.get(
        `http://localhost:3000/todo/allinterns/managed/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setAllInternsManaged(response.data);
    } catch (error) {
      console.error("Error fetching all interns managed", error);
      setError("Error fetching all interns managed. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleTask = (listId, taskId, completed) => {
    const token = localStorage.getItem("token");

    axios
      .put(
        `http://localhost:3000/todo/lists/${listId}/tasks/${taskId}`,
        { completed: !completed },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setLists((prevLists) =>
          prevLists.map((list) => (list._id === listId ? response.data : list))
        );
      })
      .catch((error) => {
        console.error("Error toggling task", error);
        setError("Error toggling task. Please try again later.");
      });
  };

  const deleteTask = (listId, taskId) => {
    const token = localStorage.getItem("token");

    axios
      .delete(`http://localhost:3000/todo/lists/${listId}/tasks/${taskId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setLists((prevLists) =>
          prevLists.map((list) => (list._id === listId ? response.data : list))
        );
      })
      .catch((error) => {
        console.error("Error deleting task", error);
        setError(
          `Error deleting task. Please try again later.  Error: ${error}`
        );
      });
  };

  const toggleCollapse = (listId) => {
    setLists((prevLists) =>
      prevLists.map((list) =>
        list._id === listId ? { ...list, collapsed: !list.collapsed } : list
      )
    );
  };

  const toggleInternSelection = (intern) => {
    const isSelected = selectedInterns.some(
      (selected) => selected._id === intern._id
    );
    if (isSelected) {
      setSelectedInterns(
        selectedInterns.filter((selected) => selected._id !== intern._id)
      );
    } else {
      setSelectedInterns([...selectedInterns, intern]);
    }
  };

  const addTask = (listId) => {
    const token = localStorage.getItem("token");
    const text = listNewTaskText[listId].trim();
    if (!text) return;

    axios
      .post(
        `http://localhost:3000/todo/lists/${listId}/tasks`,
        { text, completed: false },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setLists((prevLists) =>
          prevLists.map((list) => (list._id === listId ? response.data : list))
        );
        setListNewTaskText((prev) => ({
          ...prev,
          [listId]: "",
        }));
      })
      .catch((error) => {
        console.error("Error adding task", error);
        setError("Error adding task. Please try again later.");
      });
  };

  const addTaskForIntern = () => {
    const token = localStorage.getItem("token");
    const text = internNewTaskText.trim();
    if (!text || selectedInterns.length === 0) return;

    axios
      .post(
        `http://localhost:3000/todo/lists`,
        {
          recipients: selectedInterns.map((intern) => intern._id),
          text,
          completed: false,
          listName: newListName.trim(), // Pass the new list name
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        fetchLists(); // Refresh lists after adding task list
        setInternNewTaskText("");
        setSelectedInterns([]);
        setNewListName(""); // Clear the new list name input field
      })
      .catch((error) => {
        console.error("Error adding task for intern", error);
        setError("Error adding task for intern. Please try again later.");
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="show-lists-container">

      {/* Add Task for Intern Section */}
      <div className="add-task-for-intern">
        <h2 className="headers">Create Tasks for Interns</h2>
        <div className="intern-selection">
          <h6 className="headers">Select Intern(s) to Assign to this Task:</h6>

          {/* Intern list items */}
          <div className="intern-list">
            {allInternsManaged.map((intern) => (
              <div
                key={intern._id}
                className={`intern-item ${
                  selectedInterns.some(
                    (selected) => selected._id === intern._id
                  )
                    ? "selected"
                    : ""
                }`}
                onClick={() => toggleInternSelection(intern)}
              >
                {intern.name}
              </div>
            ))}
          </div>

          <div className="add-task">
            <label htmlFor="task-input">
              <input
                type="text"
                value={internNewTaskText}
                onChange={(e) => setInternNewTaskText(e.target.value)}
                placeholder="New task"
                className="task-input"
                id="task-input"
              />
            </label>
            <label htmlFor="list-name-input">
            <input
              type="text"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
              placeholder="New list name"
              className="task-input"
              id="list-name-input"
            />
            </label>
            <button className="add-task-button" onClick={addTaskForIntern}>
              Add Task for Intern
            </button>
          </div>
        </div>
      </div>

      <hr style={{marginTop: "100px"}}/>

      <h2 style={{ textAlign: "center" }}>Task Lists</h2>
      {lists.map((list) => (
        <div key={list._id} className="list">
          <div className="list-header" onClick={() => toggleCollapse(list._id)}>
            <h3>List name: {list.name}</h3>
            <button className="toggle-button">
              {list.collapsed ? "Expand" : "Collapse"}
            </button>
          </div>
          {!list.collapsed && (
            <>
              <h6 className="headers" style={{ marginTop: "10px" }}>
                Tasks
              </h6>
              <ul className="task-list">
                {list.tasks.map((task) => (
                  <li
                    key={task._id}
                    className={`task ${task.completed ? "completed" : ""}`}
                  >
                    <span
                      onClick={() =>
                        toggleTask(list._id, task._id, task.completed)
                      }
                    >
                      {task.text}
                    </span>
                    <button
                      className="delete-button"
                      onClick={() => deleteTask(list._id, task._id)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <h6 className="headers">Add a task to this task list</h6>
              <div className="add-task">
                <input
                  type="text"
                  value={listNewTaskText[list._id]}
                  onChange={(e) =>
                    setListNewTaskText({
                      ...listNewTaskText,
                      [list._id]: e.target.value,
                    })
                  }
                  placeholder="New task"
                  className="task-input"
                />
                <button
                  className="add-task-button"
                  onClick={() => addTask(list._id)}
                >
                  Add Task
                </button>
              </div>
            </>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default ShowLists;
