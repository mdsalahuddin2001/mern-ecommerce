import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const AdminProtect = ({ children }) => {
  const isLoggedIn = useAuth();
  const { user } = useSelector((state) => state.auth);
  if (!isLoggedIn || user.role !== "admin") {
    return <Navigate to="/" />;
  }
  return children;
};
export default AdminProtect;
