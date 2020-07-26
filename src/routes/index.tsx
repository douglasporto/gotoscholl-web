import React from 'react';
import { Switch } from 'react-router-dom';

import DashboardLayout from '../_layout/Dashboard';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import Route from './Route';

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
