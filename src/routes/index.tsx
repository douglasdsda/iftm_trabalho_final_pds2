import React from "react";
import { Switch } from "react-router-dom";
import Categorias from "../pages/Categorias";
import CategoriaEdit from "../pages/Categorias/edit";
import CategoriaNovo from "../pages/Categorias/novo";
import Dashbord from "../pages/Dashboard";

import Login from "../pages/Usuario/login";
import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashbord" component={Dashbord} />

    <Route path="/categorias" component={Categorias} />
    <Route path="/categories/:id" component={CategoriaEdit} />
    <Route path="/categorias/novo" component={CategoriaNovo} />
  </Switch>
);

export default Routes;
