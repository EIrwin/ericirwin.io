// @flow
import React from 'react';
import { ScrollLink } from '../common';
import './navigation.css';

type State = {
  shrink: boolean,
};

type NavLink = {
  target: string,
  label: string,
};

const links: NavLink[] = [
  {
    target: 'header',
    label: 'Home',
  },
  {
    target: 'about',
    label: 'About',
  },
  {
    target: 'skills',
    label: 'Skills',
  },
  {
    target: 'experience',
    label: 'Experience',
  },
  {
    target: 'contact',
    label: 'Contact',
  },
];

export default class Navigation extends React.Component<{}, State> {
  didScroll: boolean;
  timeout: any;

  state = {
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

  render() {
    const { shrink } = this.state;
    return (
      <nav id="nav" className={shrink && 'navbar-shrink'}>
        <ul className="navigation">
          {links.map(link => {
            return (
              <li>
                <ScrollLink to={link.target} activeClass="active" spy>
                  {link.label}
                </ScrollLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
