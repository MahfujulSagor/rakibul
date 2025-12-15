import Loading from "../../Components/Loading/Loading";
import UseAuth from "../../Hook/UseAuth";
import Home from "../HomePublic/HomePublic";
import HomePrivate from "../HomePrivate/HomePrivate";

const ConditionalHome = () => {
  const { user, loading } = UseAuth();

  if (loading) {
    return <Loading />;
  }

  return user ? <HomePrivate /> : <Home />;
};
export default ConditionalHome;
