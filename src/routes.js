// @flow
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppComponent from './app.component';

const Sample = () => {
  return <div>Hello World</div>;
};

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={AppComponent} />
      <Route path="/sample" component={Sample} />
    </div>
  </Router>
);

export default Routes;
