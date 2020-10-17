import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { LoginScreen } from "../auth/LoginScreen";
import { RegisterScreen } from "../auth/RegisterScreen";

export const AuthRouter = () => {
  return (
    <div>
      <Switch>
        <Route path="/auth/login" exact component={LoginScreen} />
        <Route path="/auth/register" exact component={RegisterScreen} />
        <Redirect to="/auth/register" />
      </Switch>
    </div>
  );
};
