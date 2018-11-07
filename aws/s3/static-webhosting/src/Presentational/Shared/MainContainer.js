import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { WelcomeConnectedComponent } from '../../Container/Welcome';

import NotFound from './NotFound';

const Main = () => (
  <Switch>
    <Route exact path="/" component={WelcomeConnectedComponent} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Main;
