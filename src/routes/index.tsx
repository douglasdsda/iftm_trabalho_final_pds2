import React from "react";
import { Switch } from "react-router-dom";

import Categorias from "../pages/Categorias";
import CategoriaEdit from "../pages/Categorias/edit";
import CategoriaNovo from "../pages/Categorias/novo";
import Dashbord from "../pages/Dashboard";
import Usuario from "../pages/Usuario";
import UsuarioEdit from "../pages/Usuario/edit";
import Login from "../pages/Usuario/login";
import UsuarioNovo from "../pages/Usuario/novo";

import Produtos from "../pages/Produtos";
import ProdutoEdit from "../pages/Produtos/edit";
import ProdutoNovo from "../pages/Produtos/novo";

import Route from "./Route";

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Login} />

    <Route path="/dashbord" isPrivate component={Dashbord} />

    <Route exact  path="/categorias" isPrivate component={Categorias} />
    <Route    path="/categorias/:id" isPrivate component={CategoriaEdit} />
    <Route   path="/categorianova" isPrivate component={CategoriaNovo} />
   
    <Route exact  path="/usuarios" isPrivate component={Usuario} />
    <Route    path="/usuarios/:id" isPrivate component={UsuarioEdit} />
    <Route   path="/usuarioNovo" isPrivate component={UsuarioNovo} />

    <Route exact  path="/produtos" isPrivate component={Produtos} />
    <Route    path="/produtos/:id" isPrivate component={ProdutoEdit} />
    <Route   path="/produtonovo" isPrivate component={ProdutoNovo} />
  </Switch>
);

export default Routes;
