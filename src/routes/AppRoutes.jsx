import React from "react";
import { authContext } from "../store/authContext";
import { Switch, Route } from "react-router-dom";
import { useContext } from "react";
import { Redirect } from "react-router-dom";
import UserProfile from "../components/Profile/UserProfile";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  const authCtx = useContext(authContext);
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        
          <PrivateRoute path="/profile">
            <UserProfile />
          </PrivateRoute>
    
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
