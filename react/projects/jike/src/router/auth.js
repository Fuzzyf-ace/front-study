import { Navigate } from "react-router";
import { getToken } from "@/utils";
const AuthProvider = ({ children }) => {
  const token = getToken();

  // if token is not present, we redirect to login page
  //we should implement a better solution to check if user identity is valid
  const authenticated = token ? true : false;
  // if token is present, we redirect login to home page
  if (children.type.name === "Login" && authenticated) {
    return <Navigate to="/" />;
  }
  // if token is not present, we redirect other pages to login page
  if (children.type.name !== "Login" && !authenticated) {
    return <Navigate to="/login" />;
  }
  return children;
};

export { AuthProvider };
