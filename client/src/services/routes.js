import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers';
import UserForm from '../containers/userForm';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={Home} />
      <Route path="/userForm" component={UserForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
