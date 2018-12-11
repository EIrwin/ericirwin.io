// @flow
import React from 'react';
import { SocialNetworks } from '../social';
import './header.css';

export default function Header() {
  return (
    <header id="header">
      <div className="banner">
        <div className="intro">
          <h1>{`I'm Eric Irwin.`}</h1>
          <h3>
            {`I'm a (Your City) based (Your Occupation Here). Here will be your description. Use this to describe what you do or whatever you feel best describes yourself to a potential employer.`}
          </h3>
          <hr />
          <SocialNetworks />
        </div>
        <div className="scrollDown">
          <a>
            <i className="icon-down-circle" />
          </a>
        </div>
      </div>
    </header>
  );
}
