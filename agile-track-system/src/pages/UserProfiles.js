import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../style.css";


const initialUsers = {
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
  const [users, setUsers] = useState(initialUsers);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  const handleAddUser = () => {
    if (!newUser.name || !newUser.email || !newUser.password) {
      alert("All fields are required!");
      return;
    }
    if (users[newUser.email]) {
      alert("User with this email already exists!");
      return;
    }

    setUsers({
      ...users,
      [newUser.email]: { name: newUser.name, tasks: [] },
    });

    setNewUser({ name: "", email: "", password: "" });
    setShowForm(false);
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
      <h2>User Profiles</h2>

      {!showForm && <button onClick={() => setShowForm(true)}>Add New User</button>}

      {showForm && (
        <div>
          <button onClick={() => setShowForm(false)}>Cancel</button>
          <div>
            <label>Name: </label>
            <input
              type="text"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            />
          </div>
          <div>
            <label>Email: </label>
            <input
              type="email"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </div>
          <div>
            <label>Password: </label>
            <input
              type="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
            />
          </div>
          <button onClick={handleAddUser}>Create User</button>
        </div>
      )}

      <ul>
        {Object.keys(users).map((email) => (
          <li key={email}>
            <b>Name:</b> {users[email].name} <br />
            <b>Email:</b> {email} <br />
            <button onClick={() => setSelectedEmail(email)}>Get History</button>
          </li>
        ))}
      </ul>

      {selectedEmail && users[selectedEmail] && (
        <div>
          <h3>Tasks Worked By {users[selectedEmail].name}</h3>
          <ul>
            {users[selectedEmail].tasks.map((task, index) => (
              <li key={index}>
                <b>Title:</b> {task.title} <br />
                <b>Description:</b> {task.description} <br />
                <b>Status:</b> {task.status}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfile;