// @flow
import React from 'react';
import classNames from 'classnames';

export type ExperienceItem = {
  duration: string,
  location: string,
  title: string,
  description: string,
  position: string,
  imageSrc: string,
};

type Props = {
  inverted: ?boolean,
  experience: ExperienceItem,
};

export default function TimelineItem({ inverted, experience }: Props) {
  return (
    <li className={inverted ? 'timeline-inverted' : ''}>
      <div className="timeline-image">
        <img
          className={classNames('rounded-circle', 'img-responsive')}
          src={experience.imageSrc}
          alt={experience.location}
        />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-year">{experience.duration}</h4>
          <h5 className="subheading">{experience.position}</h5>
        </div>
        <div className={classNames('timeline-body', 'text-muted')}>
          <p
            className="text-muted"
            dangerouslySetInnerHTML={{ __html: experience.description }}
          />
        </div>
      </div>
    </li>
  );
}

TimelineItem.defaultProps = {
  inverted: false,
};
