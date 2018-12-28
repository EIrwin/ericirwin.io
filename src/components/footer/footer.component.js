// @flow
import * as React from 'react';
import ScrollLink from '../common/scroll-link.component';
import { SocialNetworks } from '../social';
import './footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <section id="footer">
      <footer>
        <div className="row align-items-center">
          <div className="col">
            <SocialNetworks />
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col">
            <ul className="copyright">
              <li>&copy; Copyright {year} Eric Irwin</li>
              <li>
                Design by{' '}
                <a title="Styleshout" href="http://www.styleshout.com/">
                  Styleshout
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div id="go-top">
          <ScrollLink to="header" activeClass="active">
            <i className="icon-up-open" />
          </ScrollLink>
        </div>
      </footer>
    </section>
  );
}
