import React from "react";
import { Navigate } from "react-router-dom";

const Proxy = ({ children, user, identifier }) => {
  if (user && user.email.includes(identifier)) {
    return children;
  } else {
    return <Navigate to="/" />;
  }
};
export default Proxy;
