import { useContext } from "react";
import { authContext } from "../store/authContext";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
  const useCtx = useContext(authContext);

  return (
    <Route
      {...rest}
      render={() => {
        return useCtx.isLoggedIn === true ? children : <Redirect to="/auth" />;
      }}
    />
  );
}
export default PrivateRoute;
