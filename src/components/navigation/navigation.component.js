// @flow
import React from 'react';
import classNames from 'classnames';
import './navigation.css';

type State = {
  current: string,
  shrink: boolean,
};
export default class Navigation extends React.Component<{}, State> {
  didScroll: boolean;
  timeout: any;

  state = {
    current: 'home',
    shrink: false,
  };

  componentDidMount() {
    window.addEventListener(
      'scroll',
      () => {
        if (!this.didScroll) {
          this.didScroll = true;
          this.timeout = setTimeout(this.scrollPage, 250);
        }
      },
      false,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  scrollPage = () => {
    this.didScroll = false;
    const scrollY = window.pageYOffset || 0;
    const shrink = scrollY >= 100;
    if (this.state.shrink !== shrink) this.setState({ shrink });
  };

  getClassName = (route: string) => {
    const { current } = this.state;
    return route === current ? 'current' : '';
  };

  onSelect = (route: string) => {
    this.setState({ current: route });
  };

  render() {
    const { shrink } = this.state;
    return (
      <nav id="nav" className={shrink && 'navbar-shrink'}>
        <ul className="navigation">
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
