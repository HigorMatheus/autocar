import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
// import { Container } from './styles';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/products" component={Products} />
    </Switch>
  );
};

export default Routes;
