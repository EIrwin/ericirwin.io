// @flow
import React from 'react';
import './social.css';

export default function SocialNetworks() {
  const data = [
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/ericirwin1124/',
      className: 'fab fa-linkedin-in',
    },
    {
      name: 'github',
      url: 'http://github.com/eirwin',
      className: 'fa fa-github',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/JediCowboyEric',
      className: 'fa fa-twitter',
    },
  ];

  return (
    <ul className="social">
      {data.map(network => {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
