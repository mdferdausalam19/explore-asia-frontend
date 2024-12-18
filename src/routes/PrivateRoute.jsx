import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (!user) {
    return <Navigate to={"/sign-in"}></Navigate>;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;
