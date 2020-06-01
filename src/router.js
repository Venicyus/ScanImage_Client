import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LoginPage from './pages/login/login';
import HomePage from './pages/home/home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>
  </BrowserRouter>
);

export default Router;