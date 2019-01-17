// @flow
import React from 'react';
import ReactGA from 'react-ga';
import { About } from './components/about';
import { Contact } from './components/contact';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Experience } from './components/experience';
import { Navigation } from './components/navigation';
import { Skills } from './components/skills';

import './app.css';

function initializeReactGA() {
  ReactGA.initialize('UA-132663332-1');
  ReactGA.pageview('/home');
}

const AppComponent = () => {
  initializeReactGA();
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default AppComponent;
