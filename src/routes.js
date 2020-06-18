import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, ShoppingCart } from './pages';

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
