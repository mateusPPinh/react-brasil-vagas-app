import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import JobsRepository from '../pages/JobsRepository';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/jobs" component={JobsRepository} />
    </Switch>
  );
};

export default Routes;
