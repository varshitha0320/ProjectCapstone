import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../style.css";

const usersData = {
  "employee1@example.com": {
    name: "Employee One",
    tasks: [{ title: "Task One", description: "Description for Task One", status: "To Do" }],
  },
  "employee2@example.com": {
    name: "Employee Two",
    tasks: [
      { title: "Task Two", description: "Description for Task Two", status: "In Progress" },
      { title: "Task Three", description: "Description for Task Three", status: "In Progress" },
    ],
  },
  "employee3@example.com": {
    name: "Employee Three",
    tasks: [{ title: "Task Three", description: "Description for Task Three", status: "Completed" }],
  },
};

const UserProfile = () => {
  const [selectedEmail, setSelectedEmail] = useState("employee1@example.com"); // Default user
  const selectedUser = usersData[selectedEmail];

  return (
    <div>
      
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/" onClick={() => alert("Logged Out")}>Logout</Link></li>
        </ul>
      </nav>

      <h2>User Profiles</h2>

     
      <label>Select User: </label>
      <select value={selectedEmail} onChange={(e) => setSelectedEmail(e.target.value)}>
        {Object.keys(usersData).map((email) => (
          <option key={email} value={email}>
            {usersData[email].name}
          </option>
        ))}
      </select>

     
      {selectedUser ? (
        <div>
          <h3>Tasks Worked By {selectedUser.name}</h3>
          <ul>
            {selectedUser.tasks.map((task, index) => (
              <li key={index}>
                <b>Title:</b> {task.title} <br />
                <b>Description:</b> {task.description} <br />
                <b>Status:</b> {task.status}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No tasks assigned.</p>
      )}
    </div>
  );
};

export default UserProfile;