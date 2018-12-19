// @flow
import React from 'react';
import classNames from 'classnames';
import { ScrollLink } from '../common';
import type { ExperienceItem } from './timeline';
import { TimeLineItem } from './timeline';
import './experience.css';
import './timeline/timeline.css';

const BASE_IMAGE_PATH = '../../../public/images/experience';

const experiences: ExperienceItem[] = [
  {
    title: 'The Chatfield Group',
    duration: '2010-2011',
    imageSrc: `${BASE_IMAGE_PATH}/chatfieldgroup.png`,
    location: 'Mesa, AZ',
    position: 'Java Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },
  {
    title: 'ClickPoint Software',
    duration: 'WINTER 2011 - SPRING 2012',
    imageSrc: `${BASE_IMAGE_PATH}/clickpoint.png`,
    location: 'Scottsdale, AZ',
    position: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },
  {
    title: 'SuperShuttle',
    duration: 'FALL 2011 - SUMMER 2012',
    imageSrc: `${BASE_IMAGE_PATH}/supershuttle.png`,
    location: 'Phoenix, AZ',
    position: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },
  {
    title: 'Integrate',
    duration: 'SUMMER 2012 - SUMMER 2015',
    imageSrc: `${BASE_IMAGE_PATH}/integrate.png`,
    location: 'Scottsdale, AZ',
    position: 'Software Engineer & Project Lead',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },
  {
    title: 'Connexta',
    duration: 'SUMMER 2015 - FALL 2015',
    imageSrc: `${BASE_IMAGE_PATH}/connexta.png`,
    location: 'Phoenix, AZ',
    position: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },
  {
    title: 'Swerve',
    duration: 'SPRING 2015 - SUMMER 2016',
    imageSrc: `${BASE_IMAGE_PATH}/swerve.png`,
    location: 'Scottsdale, AZ',
    position: 'CTO & Co-founder',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },
  {
    title: 'Carvana',
    duration: 'FALL 2015 - FALL 2016',
    imageSrc: `${BASE_IMAGE_PATH}/carvana.png`,
    location: 'Scottsdale, AZ',
    position: 'Distributed Systems Engineer III',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },
  {
    title: 'CommercialTribe',
    duration: 'FALL 2016 - PRESENT',
    imageSrc: `${BASE_IMAGE_PATH}/commercialtribe.png`,
    location: 'Denver, CO',
    position: 'Site Reliability Engineer & Sr. Software Engineer ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt magna ut libero porttitor vehicula. Aliquam ultrices eros ut euismod semper. Vestibulum tincidunt nec dolor quis bibendum. Nunc eget leo non est dapibus condimentum in sed erat. Sed sed tempus diam, sit amet dignissim leo. Nam vulputate tempor leo sed imperdiet. Mauris bibendum volutpat quam, lacinia interdum nisi placerat et. Aenean sodales neque nec maximus cursus. Nullam erat velit, finibus a purus sed, ultrices aliquam erat.',
  },

];

export default function Experience() {
  const renderItem = (item: any, index: number) => {
    /* $FlowFixMe */
    return (
      <TimeLineItem key={index} inverted={index % 2 === 1} experience={item} />
    );
  };

  return (
    <section id="experience">
      <div className="container">
        <h2>Experience</h2>
        <div className="row">
          <div className="col-lg-12">
            <ul className="timeline">
              {experiences.map(renderItem)}
              <li
                className={classNames('timeline-inverted', 'timeline-final')}
              >
                <div className="timeline-image">
                  <ScrollLink to="contactme">
                    <h4 className="hearmore">
                      Want to
                      <br />
                      hear
                      <br />
                      more?
                    </h4>
                  </ScrollLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
