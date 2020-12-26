// @flow
import React from 'react';
import { ScrollLink } from '../common';
import { SocialNetworks } from '../social';
import './header.css';

export default function Header() {
  return (
    <header id="header">
      <div className="banner">
        <div className="intro">
          <h1>{`I'm Eric Irwin`}</h1>
          <h3>
            {`Experienced engineer, leader and continuous learner with a passion for Continuous Delivery and all things Delivery Engineering.`}
          </h3>
          <hr />
          <SocialNetworks />
        </div>
        <div className="scrollDown">
          <ScrollLink to="about">
            <i className="icon-down-circle" />
          </ScrollLink>
        </div>
      </div>
    </header>
  );
}
