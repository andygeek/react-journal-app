import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthRouter } from "./AuthRouter";
import { JournalScreen } from "../journal/JournalScreen";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/auth" component={AuthRouter} />
          <Route path="/" exact component={JournalScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
  );
};
