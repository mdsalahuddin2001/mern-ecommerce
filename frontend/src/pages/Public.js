import { Outlet } from "react-router-dom";
// import useAuth from "../hooks/useAuth";

export default function PublicRoute() {
  // const isLoggedIn = useAuth();
  // return !isLoggedIn ? <Outlet /> : <Navigate to="/" />;
  return <Outlet />;
}
