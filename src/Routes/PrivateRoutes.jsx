import Loading from "../Components/Loading/Loading";
import UseAuth from "../Hook/UseAuth";
import { Navigate, useLocation } from "react-router";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) return <div className="text-4xl"><Loading/></div>;
  if (user) {
    return children;
  }
  return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoutes;
