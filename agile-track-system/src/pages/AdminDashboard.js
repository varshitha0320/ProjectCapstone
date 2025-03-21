import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style.css";

const AdminDashboard = () => {
  
  const [scrumTeams, setScrumTeams] = useState([
    { id: "A", name: "Scrum Team A" },
    { id: "B", name: "Scrum Team B" },
    { id: "C", name: "Scrum Team C" },
  ]);

  
  const [scrumDetailsData, setScrumDetailsData] = useState({
    A: {
      tasks: [{ title: "Task One", description: "Description for Task One", status: "To Do" }],
      users: [{ name: "Employee One", email: "employee1@example.com" }],
    },
    B: {
      tasks: [{ title: "Task Two", description: "Description for Task Two", status: "In Progress" }],
      users: [{ name: "Employee Two", email: "employee2@example.com" }],
    },
    C: {
      tasks: [{ title: "Task Three", description: "Description for Task Three", status: "Completed" }],
      users: [{ name: "Employee Three", email: "employee3@example.com" }],
    },
  });

  
  const [selectedScrum, setSelectedScrum] = useState(null);

 
  const [showScrumForm, setShowScrumForm] = useState(false);

  
  const [newScrum, setNewScrum] = useState({
    name: "",
    taskTitle: "",
    taskDescription: "",
    taskStatus: "To Do",
    assignTo: "",
  });

  
  const users = ["Employee One", "Employee Two", "Employee Three"];

  
  const handleGetDetails = (id) => {
    setSelectedScrum(scrumDetailsData[id] || null);
  };

 
  const handleInputChange = (e) => {
    setNewScrum({ ...newScrum, [e.target.name]: e.target.value });
  };

  
  const handleCreateScrum = () => {
    if (!newScrum.name || !newScrum.taskTitle) {
      alert("Please fill out Scrum Name and Task Title!");
      return;
    }

    const newScrumId = `S${scrumTeams.length + 1}`;

    const newScrumTeam = { id: newScrumId, name: newScrum.name };

    setScrumTeams([...scrumTeams, newScrumTeam]);

    setScrumDetailsData({
      ...scrumDetailsData,
      [newScrumId]: {
        tasks: [{ title: newScrum.taskTitle, description: newScrum.taskDescription, status: newScrum.taskStatus }],
        users: [{ name: newScrum.assignTo, email: `${newScrum.assignTo.toLowerCase()}@example.com` }],

      },
    });

    alert("New Scrum Created!");
    setShowScrumForm(false);
    setNewScrum({ name: "", taskTitle: "", taskDescription: "", taskStatus: "To Do", assignTo: "" });
  };

  return (
    <div>
      
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/userProfile">Profiles</Link></li>
          <li><Link to="/"><button onClick={() => alert("Logged Out")}>Logout</button></Link></li>
        </ul>
      </nav>

      
      <h2>Scrum Teams</h2>

      
      {!showScrumForm && <button onClick={() => setShowScrumForm(true)}>Add New Scrum</button>}

      
      {showScrumForm && (
        <div>
          <button onClick={() => setShowScrumForm(false)}>Cancel</button>
          <div>
            <label>Scrum Name:</label>
            <input type="text" name="name" value={newScrum.name} onChange={handleInputChange} />
          </div>
          <div>
            <label>Task Title:</label>
            <input type="text" name="taskTitle" value={newScrum.taskTitle} onChange={handleInputChange} />
          </div>
          <div>
            <label>Task Description:</label>
            <input type="text" name="taskDescription" value={newScrum.taskDescription} onChange={handleInputChange} />
          </div>
          <div>
            <label>Task Status:</label>
            <select name="taskStatus" value={newScrum.taskStatus} onChange={handleInputChange}>
              <option value="To Do">To Do</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <label>Assign To:</label>
            <select name="assignTo" value={newScrum.assignTo} onChange={handleInputChange}>
              <option value="">Select a user</option>
              {users.map((user, index) => (
                <option key={index} value={user}>{user}</option>
              ))}
            </select>
          </div>
          <button onClick={handleCreateScrum}>Create Scrum</button>
        </div>
      )}

      
      <ul>
        {scrumTeams.map((team) => (
          <li key={team.id}>
            {team.name} <button onClick={() => handleGetDetails(team.id)}>Get Details</button>
          </li>
        ))}
      </ul>

      
      {selectedScrum && (
        <div>
          <h3>Scrum Details</h3>

          
          <h4>Tasks</h4>
          <ul>
            {selectedScrum.tasks.map((task, index) => (
              <li key={index}>
                <strong>{task.title}:</strong> {task.description} -{" "}
                <select
                  value={task.status}
                  onChange={(e) => {
                    const updatedTasks = selectedScrum.tasks.map((t, i) =>
                      i === index ? { ...t, status: e.target.value } : t
                    );
                    setScrumDetailsData({ ...scrumDetailsData, [selectedScrum.id]: { ...selectedScrum, tasks: updatedTasks } });
                  }}
                >
                  <option value="To Do">To Do</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </li>
            ))}
          </ul>

         
          <h4>Users</h4>
          <ul>
            {selectedScrum.users.map((user, index) => (
              <li key={index}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;