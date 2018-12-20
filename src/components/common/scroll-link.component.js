// @flow
import * as React from 'react';
import { Link } from 'react-scroll';

type Props = {
  children: React.Node,
};

const DEFAULT_NAVIGATION_OFFSET: number = -48;

export default function ScrollLink({ children, ...extraProps }: Props) {
  return (
    <Link
      offset={DEFAULT_NAVIGATION_OFFSET}
      style={{ cursor: 'pointer' }}
      smooth="easeInOutQuart"
      duration={1200}
      {...extraProps}
    >
      {children}
    </Link>
  );
}
