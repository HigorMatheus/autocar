import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Profile from "../pages/Profile";
import Signin from "../pages/Signin";
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
      <Route path="/profile" component={Profile} />
      <Route path="/signin" component={Signin} />
    </Switch>
  );
};

export default Routes;
