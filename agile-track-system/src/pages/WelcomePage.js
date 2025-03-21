import React from "react";
import { Link, useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();

  const scrumTeams = [
    { id: 1, name: "Scrum Team A" },
    { id: 2, name: "Scrum Team B" },
    { id: 3, name: "Scrum Team C" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
     
      <nav>
        <ul>
          <li><Link to="/user-dashboard">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>

      
      <h2>Scrum Teams</h2>
      <ul>
        {scrumTeams.map((team) => (
          <li key={team.id}>
            {team.name}{" "}
            <button onClick={() => navigate("/login")}>Get Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WelcomePage;