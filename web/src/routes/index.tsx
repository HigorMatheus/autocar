import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import { useAuth } from "../hooks/Auth";
import CreateProduct from "../pages/CreateProduct";
// import { Container } from './styles';

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <Switch>
      <Route path="/signin" component={Signin} />

      <Route path="/" exact component={Home} isPrivate={!!user} />
      <Route path="/products" component={Products} isPrivate={!!user} />

      <Route path="/product/create" component={CreateProduct} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
};

export default Routes;
