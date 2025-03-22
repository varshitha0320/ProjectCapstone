import React, { useState } from "react";
import { Link } from "react-router-dom";


import "../style.css";
const UserDashboard = () => {
  const [selectedScrum, setSelectedScrum] = useState(null);

  
  const scrumTeams = [
    {
      id: 1,
      name: "Scrum Team A",
      tasks: [{ title: "Task One", description: "Description for Task One", status: "Completed" }],
      users: [{ name: "Employee One", email: "employee1@example.com" }],
    },
    {
      id: 2,
      name: "Scrum Team B",
      tasks: [{ title: "Task Two", description: "Description for Task Two", status: "In Progress" }],
      users: [{ name: "Employee Two", email: "employee2@example.com" }],
    },
    {
      id: 3,
      name: "Scrum Team C",
      tasks: [{ title: "Task Three", description: "Description for Task Three", status: "Pending" }],
      users: [{ name: "Employee Three", email: "employee3@example.com" }],
    },
  ];

  
  const handleGetDetails = (team) => {
    setSelectedScrum(team);
  };

  return (
    <div>
      
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="/"><button onClick={() => alert("Logged Out")}>Logout</button></Link></li>
        </ul>
      </nav>

      
      <h2>Scrum Teams</h2>
      <ul>
        {scrumTeams.map((team) => (
          <li key={team.id}>
            {team.name} <button onClick={() => handleGetDetails(team)}>Get Details</button>
          </li>
        ))}
      </ul>

      
      {selectedScrum && (
        <div>
          <h3>Scrum Details for {selectedScrum.name}</h3>

          <h4>Tasks</h4>
          <ul>
            {selectedScrum.tasks.map((task, index) => (
              <li key={index}>
                <strong>{task.title}:</strong> {task.description} - <i>{task.status}</i>
              </li>
            ))}
          </ul>

          <h4>Users</h4>
          <ul>
            {selectedScrum.users.map((user, index) => (
              <li key={index}>{user.name} ({user.email})</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserDashboard;