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
      'Implemented and maintained enterprise correspondence system for Retail Assistance Corporation. This was my first introduction to Continuous Integration & Development and gave me the appreciation I share for CI/CD today.',
  },
  {
    title: 'ClickPoint Software',
    duration: 'WINTER 2011 - SPRING 2012',
    imageSrc: `${BASE_IMAGE_PATH}/clickpoint.png`,
    location: 'Scottsdale, AZ',
    position: 'Software Engineer',
    description:
      'Delivered Lead Standardization with Postal Address Verification for automated lead distribution system, LeadExec. Refactored data layer for SalesExec Lead Manager Platform to use MongoDB.',
  },
  {
    title: 'SuperShuttle',
    duration: 'FALL 2011 - SUMMER 2012',
    imageSrc: `${BASE_IMAGE_PATH}/supershuttle.png`,
    location: 'Phoenix, AZ',
    position: 'Software Engineer',
    description:
      'Led development effort on Booking Engine responsible for all reservation booking across several consumer facing applications used for SuperShuttle. I also was responsible for internationalization of the booking engine to 4 additional languages.',
  },
  {
    title: 'Integrate',
    duration: 'SUMMER 2012 - SUMMER 2015',
    imageSrc: `${BASE_IMAGE_PATH}/integrate.png`,
    location: 'Scottsdale, AZ',
    position: 'Software Engineer | Project Lead',
    description:
      'Developed, supported and led team of technical and non-technical personnel supporting Integrate\'s PingTree platform. Also worked closely in the initiative to refactor existing system to a more distributed system.',
  },
  {
    title: 'Connexta',
    duration: 'SUMMER 2015 - FALL 2015',
    imageSrc: `${BASE_IMAGE_PATH}/connexta.png`,
    location: 'Phoenix, AZ',
    position: 'Software Engineer',
    description:
      'Contributed to open source interoperability platform, Distributed Data Framework (DDF) providing secure and scalable discovery and retrieval from a wide array of disparate source',
  },
  {
    title: 'Swerve',
    duration: 'SPRING 2015 - SUMMER 2016',
    imageSrc: `${BASE_IMAGE_PATH}/swerve.png`,
    location: 'Scottsdale, AZ',
    position: 'CTO & Co-founder',
    description:
      'Engineered a mobile vending platform allowing consumers to have their food and beverage delivered directly to them using a mobile application from any sporting and entertainment venue. This was my first experience on the executive level of an organization and provided valuable insight into the technical and non-technical inner workings of a start-up.',
  },
  {
    title: 'Carvana',
    duration: 'FALL 2015 - FALL 2016',
    imageSrc: `${BASE_IMAGE_PATH}/carvana.png`,
    location: 'Scottsdale, AZ',
    position: 'Distributed Systems Engineer III',
    description:
      'Refactored scheduling and purchasing system to utilize CQRS backed by an event store. During this time, I developed an appreciation for the impact architecture can play on the evolution of a scalable system.',
  },
  {
    title: 'CommercialTribe',
    duration: 'FALL 2016 - PRESENT',
    imageSrc: `${BASE_IMAGE_PATH}/commercialtribe.png`,
    location: 'Denver, CO',
    position: 'Site Reliability Engineer | Sr. Software Engineer ',
    description:
      'Core contributor in containerization and migration of entire platform to Kubernetes. Our team leverages a CI/CD pipeline to isolated environments allowing frequent delivery of features. Additionally, led effort in introducing and practicing SRE discipline across engineering, which allows us to sustain a reliability target of ~5 minutes of total downtime per month.',
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
