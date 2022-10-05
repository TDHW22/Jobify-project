import React from "react";
import { useAppContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
//checking if user exists and if not send him to unprotected route
function ProtectedRoute({ children }) {
  const { user } = useAppContext();
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
}

export default ProtectedRoute;
