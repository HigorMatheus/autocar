import React from "react";
import { Switch } from "react-router-dom";
import Route from "./Router";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
import { useAuth } from "../hooks/Auth";
// import { Container } from './styles';

const Routes: React.FC = () => {
  const { user } = useAuth();
  return (
    <Switch>
      <Route path="/" exact component={Home} isPrivate={!!user} />
      <Route path="/products" component={Products} isPrivate={!!user} />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/signin" component={Signin} />
    </Switch>
  );
};

export default Routes;
