import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import DashboardLayout from '../_layout/Dashboard';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route
      path="/dashboard"
      exact
      component={Dashboard}
      isPrivate
      layout={DashboardLayout}
    />
  </Switch>
);

export default Routes;
