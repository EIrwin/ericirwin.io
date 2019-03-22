// @flow
import * as React from 'react';
import './chips.css';

type alignment = 'left' | 'right';
type Props = {
  values: string[],
  alignment: alignment,
};

export default function Chips(props: Props) {
  const { values, alignment } = props;
  const renderChip = (value: string) => {
    return (
      <span key={value} className="chip">
        {value}
      </span>
    );
  };

  return (
    <div
      className={`row container ${
        alignment === 'left' ? 'justify-content-start' : 'justify-content-end'
      }`}
    >
      {values.map(v => renderChip(v))}
    </div>
  );
}
