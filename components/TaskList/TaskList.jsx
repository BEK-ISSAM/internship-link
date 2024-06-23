import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [listId, setListId] = useState('');
  const [inputListId, setInputListId] = useState('');
  const [recipients, setRecipients] = useState('');

  useEffect(() => {
    if (listId) {
      axios.get(`http://localhost:3000/todo/lists/${listId}`).then((response) => {
        setTasks(response.data.tasks);
      });
    }
  }, [listId]);

  const createNewList = () => {
    axios.post('http://localhost:3000/todo/lists', { recipients: recipients.split(',') }).then((response) => {
      setListId(response.data.listId);
      setTasks([]);
    });
  };

  const addTask = () => {
    axios
      .post(`http://localhost:3000/todo/lists/${listId}/tasks`, {
        text: taskText,
        completed: false,
      })
      .then((response) => {
        setTasks(response.data.tasks);
        setTaskText('');
      });
  };

  const toggleTask = (task) => {
    axios
      .put(`http://localhost:3000/todo/lists/${listId}/tasks/${task._id}`, {
        ...task,
        completed: !task.completed,
      })
      .then((response) => {
        setTasks(response.data.tasks);
      });
  };

  const deleteTask = (id) => {
    axios
      .delete(`http://localhost:3000/todo/lists/${listId}/tasks/${id}`)
      .then((response) => {
        setTasks(response.data.tasks);
      });
  };

  const handleListIdSubmit = () => {
    setListId(inputListId);
  };

  return (
    <div className="task-list-container">
      <h1>Todo List</h1>
      {!listId && (
        <div className="list-id-input">
          <input
            type="text"
            value={inputListId}
            onChange={(e) => setInputListId(e.target.value)}
            placeholder="Enter list ID"
          />
          <input
            type="text"
            value={recipients}
            onChange={(e) => setRecipients(e.target.value)}
            placeholder="Enter recipient emails separated by commas"
          />
          <button onClick={handleListIdSubmit}>Load List</button>
          <button onClick={createNewList}>Create New List</button>
        </div>
      )}
      {listId && (
        <>
          <div className="task-input">
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              placeholder="New task"
            />
            <button onClick={addTask}>Add Task</button>
          </div>
          <div className="task-list">
            {tasks.map((task) => (
              <div
                key={task._id}
                className={`task ${task.completed ? 'completed' : ''}`}
              >
                <span onClick={() => toggleTask(task)}>{task.text}</span>
                <button onClick={() => deleteTask(task._id)}>Delete</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default TaskList;
