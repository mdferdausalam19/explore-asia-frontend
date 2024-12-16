import { Navigate } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to={"/sign-in"}></Navigate>;
  }
  if (user) {
    return children;
  }
};

export default PrivateRoute;
