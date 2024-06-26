import React, { useContext } from "react";
import AuthContext from "../context/Auth";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Login from "./Login";
import AccountSettings from "./Account";

const AppRoutes = (props) => {
  const { signed } = useContext(AuthContext);

  return (
    <Router>
      <Switch>
        <Route path="/">{!signed ? <Login /> : <AccountSettings />}</Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
