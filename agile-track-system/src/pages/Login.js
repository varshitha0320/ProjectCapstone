import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import "../style.css";
import "./login.css";

import { AuthContext } from "../context/AuthProvider";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const user = storedUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      login(email, password); 
      alert(`Login successful as ${user.role}! Redirecting...`); 

      navigate(user.role === "admin" ? "/admin-dashboard" : "/user-dashboard");
    } else {
      alert("Invalid email or password. Please try again.");
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
      <div className="auth-container">
        <div className="auth-box">
          <h2>Login</h2>

         
          <input type="email" value={email} placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          
        
          <input type="password" value={password} placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          
          <button onClick={handleLogin}>Login</button>
          <button onClick={() => navigate("/signup")}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
