import { useAppContext } from "../context/appContext";
import { Navigate } from "react-router-dom";
import React from "react";
import Loading from "../components/Loading.js";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAppContext();

  if (userLoading) return <Loading />;
  if (!user) {
    return <Navigate to="/landing" />;
  }
  return children;
};

export default ProtectedRoute;
