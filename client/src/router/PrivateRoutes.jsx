import React from "react";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user } = use(AuthContext);
  if (!user) {
    <Navigate to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoutes;
