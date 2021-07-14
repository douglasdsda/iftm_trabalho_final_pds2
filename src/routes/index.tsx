import React from "react";
import { Switch } from "react-router-dom";
import Dashbord from "../pages/Dashboard";

import Login from "../pages/Usuario/login";
import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashbord" component={Dashbord} isPrivate />
  </Switch>
);

export default Routes;
