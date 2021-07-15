import React from "react";
import { Switch, Route } from "react-router-dom";

import Categorias from "../pages/Categorias";
import CategoriaEdit from "../pages/Categorias/edit";
import CategoriaNovo from "../pages/Categorias/novo";
import Dashbord from "../pages/Dashboard";
import Login from "../pages/Usuario/login";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashbord" component={Dashbord} />

    <Route exact  path="/categorias" component={Categorias} />
    <Route    path="/categorias/:id" component={CategoriaEdit} />
    <Route   path="/categorianova" component={CategoriaNovo} />
  </Switch>
);

export default Routes;
