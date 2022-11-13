// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppComponent from './app.component';
import { STFU } from './components/stfu';

const Sample = () => {
  return <div>Hello World</div>;
};

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppComponent} />
      <Route path="/sample" component={Sample} />
      <Route exact path="/stfu" component={STFU} />
    </div>
  </Router>
);

export default Routes;
