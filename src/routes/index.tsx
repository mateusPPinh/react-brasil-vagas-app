import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import JobsRepository from '../pages/JobsRepository';
import JobsDetails from '../pages/JobsDetails';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/jobs" component={JobsRepository} />
      <Route path="/details/:number" component={JobsDetails} />
    </Switch>
  );
};

export default Routes;
