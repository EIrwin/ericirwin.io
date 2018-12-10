// @flow
import React from 'react';
import './navigation.css';

type State = {
  current: string,
};
export default class Navigation extends React.Component<{}, State> {
  state = {
    current: 'home',
  };
  getClassName = (route: string) => {
    const { current } = this.state;
    return route === current ? 'current' : '';
  };

  onSelect = (route: string) => {
    this.setState({ current: route });
  };

  render() {
    return (
      <nav>
        <ul id="nav" className="nav">
          <li
            onClick={() => this.onSelect('home')}
            className={this.getClassName('home')}
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => this.onSelect('about')}
            className={this.getClassName('about')}
          >
            <a href="#about">About</a>
          </li>
          <li
            onClick={() => this.onSelect('experience')}
            className={this.getClassName('experience')}
          >
            <a href="#resume">Experience</a>
          </li>
          <li
            onClick={() => this.onSelect('skills')}
            className={this.getClassName('skills')}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            onClick={() => this.onSelect('contact')}
            className={this.getClassName('contact')}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}
