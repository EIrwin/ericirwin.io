// @flow
import React from 'react';
import { Header } from './components/header';
import { Navigation } from './components/navigation';

import './app.css';
const AppComponent = () => (
  <div className="app">
    <Navigation />
    <Header />
  </div>
);

export default AppComponent;
