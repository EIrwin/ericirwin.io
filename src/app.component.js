// @flow
import React from 'react';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Header } from './components/header';
import { Experience } from './components/experience';
import { Navigation } from './components/navigation';

import './app.css';
const AppComponent = () => (
  <div className="app">
    <Navigation />
    <Header />
    <About />
    <Experience />
    <Contact />
  </div>
);

export default AppComponent;
