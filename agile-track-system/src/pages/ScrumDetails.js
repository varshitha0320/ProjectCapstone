import React, { useContext, useEffect } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

import "../style.css";

const scrumTeams = {
  A: {
    name: "Scrum Team A",
    tasks: [{ title: "Task One", description: "Description for Task One", status: "Completed" }],
    users: [{ name: "Employee One", email: "employee1@example.com" }],
  },
  B: {
    name: "Scrum Team B",
    tasks: [{ title: "Task Two", description: "Description for Task Two", status: "In Progress" }],
    users: [{ name: "Employee Two", email: "employee2@example.com" }],
  },
  C: {
    name: "Scrum Team C",
    tasks: [{ title: "Task Three", description: "Description for Task Three", status: "Pending" }],
    users: [{ name: "Employee Three", email: "employee3@example.com" }],
  },
};

const ScrumDetails = () => {
  const { id } = useParams(); 
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    console.log("Scrum ID from URL:", id);
  }, [id]);

  
  if (!user) {
    return <Navigate to="/login" />;
  }

 
  const scrumTeam = scrumTeams[id?.trim().toUpperCase()];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <button onClick={() => navigate(-1)} style={{ marginBottom: "10px" }}>⬅ Back</button>

      {scrumTeam ? (
        <>
          <h2>Scrum Details for {scrumTeam.name}</h2>

         
          <h3>Tasks</h3>
          <ul>
            {scrumTeam.tasks.map((task, index) => (
              <li key={index}>
                <b>{task.title}:</b> {task.description} - <i>{task.status}</i>
              </li>
            ))}
          </ul>

          
          <h3>Users</h3>
          <ul>
            {scrumTeam.users.map((user, index) => (
              <li key={index}>
                {user.name} ({user.email})
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <h2>Scrum Team Not Found</h2>
          <p>Invalid Scrum ID: <b>{id}</b></p>
        </>
      )}
    </div>
  );
};

export default ScrumDetails;