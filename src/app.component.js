// @flow
import React from 'react';
import { Helmet } from 'react-helmet';
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
      <Helmet>
        <title>Eric Irwin</title>
        <meta
          name="description"
          content="Hi, I'm Eric Irwin, a Sr. Software Engineer!"
        />
        <meta name="theme-color" content="##11ABB0" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:site_name" content="Eric Irwin" />
        <meta property="og:title" content="Eric Irwin" />
        <meta
          property="og:description"
          content="Hi, I'm Eric Irwin, a Sr. Software Engineer!"
        />
        <meta property="og:url" content="https://ericirwin.io" />
        <meta property="og:type" content="website" />
        <meta
          data-react-helmet="true"
          property="og:image"
          content="https://ericirwin.io/public/images/header.jpg"
        />
      </Helmet>
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
