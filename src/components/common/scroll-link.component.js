// @flow
import * as React from 'react';
import { Link } from 'react-scroll';

type Props = {
  children: React.Node,
};

export default function ScrollLink({ children, ...extraProps }: Props) {
  return (
    <Link
      offset={-70}
      style={{ cursor: 'pointer' }}
      smooth={true}
      duration={1500}
      {...extraProps}
    >
      {children}
    </Link>
  );
}
