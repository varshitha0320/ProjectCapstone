import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import ScrumDetails from "./pages/ScrumDetails";
import Profiles from "./pages/Profiles";
import UserProfile from "./pages/UserProfiles";
import PrivateRoute from "./components/PrivateRouter";
import AuthProvider from "./context/AuthProvider";
import "./style.css";
import "./pages/login.css";

function App() {
  return (
    <Router>
      <AuthProvider> 
        <Routes>
         
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          
          <Route path="/user-dashboard" element={<PrivateRoute role="user"><UserDashboard /></PrivateRoute>} />
          <Route path="/admin-dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />

          
          <Route path="/scrum/:id" element={<ScrumDetails />} />
          <Route path="/profiles" element={<Profiles />} />
          <Route path="/userProfile" element={<UserProfile />} />
          
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;