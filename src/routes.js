import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import App from './app';


const Sample =  () => {
  return (
    <div>Hello World</div>
  );
};

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/sample" component={Sample} />
    </div>
  </Router>
);

export default Routes;
