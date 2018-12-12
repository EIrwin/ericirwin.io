// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// $FlowFixMe
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

function AppWrapper() {
  return (
    <AppContainer>
      <Routes />
    </AppContainer>
  );
}

const app = document.getElementById('app');
if (!app) throw new Error('Could not find react dom root');
ReactDOM.render(<AppWrapper />, app);
