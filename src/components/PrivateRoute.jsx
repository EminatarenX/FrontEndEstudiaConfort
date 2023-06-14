import { Navigate } from "react-router-dom";
import UserLayout from "./UserLayout";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { auth, cargando } = useAuth();

  if (cargando) return "cargando";

  return <>{auth.id ? <UserLayout /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;
 