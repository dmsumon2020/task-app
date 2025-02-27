import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
//import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
