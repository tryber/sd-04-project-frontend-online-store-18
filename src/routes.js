import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/" component={} /> */}
        {/* <Route path="/" component={} /> */}
        {/* <Route path="/" component={} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
