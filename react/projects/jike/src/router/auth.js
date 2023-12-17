import { Navigate } from "react-router";
import { getToken } from "@/utils";
const AuthProvider = ({ children }) => {
  const token = getToken();

  // if token is not present, we redirect to login page
  //we should implement a better solution to check if user identity is valid
  const authenticated = token ? true : false;
  if (!authenticated) {
    return <Navigate to="/login" />;
  }
  // if token is present, we redirect to home page
  if (children.type.name === "Login") {
    return <Navigate to="/" />;
  }
  // if token is present, we access the children
  return children;
};

export { AuthProvider };
