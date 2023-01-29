import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Protect = ({ children }) => {
  const isLoggedIn = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};
export default Protect;
