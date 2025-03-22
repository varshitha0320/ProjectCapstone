import React, { useContext } from "react"; 
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const PrivateRoute = ({ role, children }) => {
  const { user } = useContext(AuthContext);

  
  if (!user || user.role !== role) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;