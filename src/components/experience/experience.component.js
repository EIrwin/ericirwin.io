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
    title: 'The Citadel',
    duration: 'FALL 2007 - SPRING 2010',
    imageSrc: `${BASE_IMAGE_PATH}/citadel.png`,
    location: 'Charleston, SC',
    position: 'Bachelor of Science | Computer Science',
    description:
      'Graduated with honors (Cum Laude) in three years with a degree in Computer Science and a Minor in Management Information Systems.',
  },
  {
    title: 'Arizona State University',
    duration: 'FALL 2010 -SPRING 2010',
    imageSrc: `${BASE_IMAGE_PATH}/arizonastate.jpg`,
    location: 'Tempe, AZ',
    position: 'MSE | Master of Software Engineering',
    description:
      'Focused studies and research towards Distributed Systems in Software Engineering.',
  },
  {
    title: 'The Chatfield Group',
    duration: '2010-2011',
    imageSrc: `${BASE_IMAGE_PATH}/chatfieldgroup.png`,
    location: 'Mesa, AZ',
    position: 'Java Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh ultricies cursus in vitae dui. Donec vel ligula vitae quam ultrices porttitor vitae a ligula.',
  },
  {
    title: 'ClickPoint Software',
    duration: 'WINTER 2011 - SPRING 2012',
    imageSrc: `${BASE_IMAGE_PATH}/clickpoint.png`,
    location: 'Scottsdale, AZ',
    position: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh ultricies cursus in vitae dui. Donec vel ligula vitae quam ultrices porttitor vitae a ligula.',
  },
  {
    title: 'SuperShuttle',
    duration: 'FALL 2011 - SUMMER 2012',
    imageSrc: `${BASE_IMAGE_PATH}/supershuttle.png`,
    location: 'Phoenix, AZ',
    position: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh ultricies cursus in vitae dui. Donec vel ligula vitae quam ultrices porttitor vitae a ligula.',
  },
  {
    title: 'Integrate',
    duration: 'SUMMER 2012 - SUMMER 2015',
    imageSrc: `${BASE_IMAGE_PATH}/integrate.png`,
    location: 'Scottsdale, AZ',
    position: 'Software Engineer | Project Lead',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh ultricies cursus in vitae dui. Donec vel ligula vitae quam ultrices porttitor vitae a ligula.',
  },
  {
    title: 'Connexta',
    duration: 'SUMMER 2015 - FALL 2015',
    imageSrc: `${BASE_IMAGE_PATH}/connexta.png`,
    location: 'Phoenix, AZ',
    position: 'Software Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh ultricies cursus in vitae dui. Donec vel ligula vitae quam ultrices porttitor vitae a ligula.',
  },
  {
    title: 'Swerve',
    duration: 'SPRING 2015 - SUMMER 2016',
    imageSrc: `${BASE_IMAGE_PATH}/swerve.png`,
    location: 'Scottsdale, AZ',
    position: 'CTO & Co-founder',
    description:
      'Engineered a mobile vending platform allowing customers to have their food and beverage delivered directly to them from a single mobile application instead of being forced to download a new app at each venue they go to. No more waiting in lines and missing the action..',
  },
  {
    title: 'Carvana',
    duration: 'FALL 2015 - FALL 2016',
    imageSrc: `${BASE_IMAGE_PATH}/carvana.png`,
    location: 'Scottsdale, AZ',
    position: 'Distributed Systems Engineer III',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh ultricies cursus in vitae dui. Donec vel ligula vitae quam ultrices porttitor vitae a ligula.',
  },
  {
    title: 'CommercialTribe',
    duration: 'FALL 2016 - PRESENT',
    imageSrc: `${BASE_IMAGE_PATH}/commercialtribe.png`,
    location: 'Denver, CO',
    position: 'Site Reliability Engineer | Sr. Software Engineer ',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh ultricies cursus in vitae dui. Donec vel ligula vitae quam ultrices porttitor vitae a ligula.',
  },
];

export default function Experience() {
  const renderItem = (item: any, index: number) => {
    /* $FlowFixMe */
    return (
      <TimeLineItem
        className=""
        key={index}
        inverted={index % 2 === 1}
        experience={item}
      />
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
                  <ScrollLink to="contact">
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
