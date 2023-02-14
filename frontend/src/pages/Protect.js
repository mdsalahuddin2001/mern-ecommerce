import { Outlet, Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
const Protect = () => {
  const isLoggedIn = useAuth();
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
export default Protect;
