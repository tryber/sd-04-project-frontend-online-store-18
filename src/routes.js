import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ShoppingCart from './pages/ShoppingCart/ShoppingCart'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/cart" component={ShoppingCart} />
      {/* <Route path="/" component={} /> */}
      {/* <Route path="/" component={} /> */}
    </Switch>
  </BrowserRouter>
);
export default Routes;
