import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
//import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    // Show a loading spinner or placeholder while the user state is being checked
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
