// @flow
import * as React from 'react';
import './interests.css';

const interests = [
  {
    label: 'Running',
    iconClass: 'fa fa-running',
  },
  {
    label: 'Biking',
    iconClass: 'fa fa-bicycle',
  },
  {
    label: 'Snowboarding',
    iconClass: 'fa fa-snowboarding',
  },
  {
    label: 'Hiking',
    iconClass: 'fa fa-hiking',
  },
  {
    label: 'Baseball',
    iconClass: 'fa fa-baseball-ball',
  },
  {
    label: 'Movies',
    iconClass: 'fa fa-film',
  },
];

export default function Interests() {
  return (
    <div className="row interest-list">
      {interests.map(i => {
        return (
          <div className="col-sm interest" key={i.label}>
            <div className="text-center">
              <i className={`${i.iconClass} icon`} />
            </div>
            <div className="text-center label">{i.label}</div>
          </div>
        );
      })}
    </div>
  );
}
