// @flow
import React from 'react';
import classNames from 'classnames';
import { Chips } from '../../common/chips/';

export type ExperienceItem = {
  duration: string,
  location: string,
  title: string,
  description: string,
  position?: string,
  imageSrc: string,
  keywords?: string[],
};

type Props = {
  inverted: ?boolean,
  experience: ExperienceItem,
};

export default function TimelineItem({ inverted, experience }: Props) {
  const {
    imageSrc,
    location,
    position,
    duration,
    description,
    title,
    keywords,
  } = experience;
  return (
    <li className={inverted ? 'timeline-inverted' : ''}>
      <div className="timeline-image">
        <img
          className={classNames('rounded-circle', 'img-responsive')}
          src={imageSrc}
          alt={location}
        />
      </div>
      <div className="timeline-panel">
        <div className="timeline-heading">
          <h4 className="timeline-title">{title}</h4>
          <h5 className="subheading">{position}</h5>
          <h5 className="timeline-duration">
            <i>{duration}</i>
          </h5>
        </div>
        <div className={classNames('timeline-body', 'text-muted')}>
          <p
            className="text-muted"
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        {keywords ? (
          <Chips alignment={inverted ? 'left' : 'right'} values={keywords} />
        ) : null}
      </div>
    </li>
  );
}

TimelineItem.defaultProps = {
  inverted: false,
};
