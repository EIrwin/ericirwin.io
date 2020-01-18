// @flow
import React from 'react';
import Interests from './interests.component';
import './about.css';

const RYANNS_BIRTHDAY = new Date(2014, 6, 24);
const LOGANS_BIRTHDAY = new Date(2017, 11, 17);
export default function About() {
  const getDurationYears = (date: Date): number => {
    const CONVERSION_MS = 31536000000;
    const current = new Date();
    return Math.floor((current - date) / CONVERSION_MS);
  };

  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-4 text-center">
            <img
              className="profile-pic"
              src={`https://avatars2.githubusercontent.com/u/6673161?s=400&u=eae6f22d3d0671db6bfd4225a524b5dfd4829a1c&v=4`}
              alt="Eric Irwin Profile Pic"
            />
          </div>
          <div className="col-sm-8">
            <h2>About Me</h2>
            <p>
              Although I was born and raised in Arizona, I pursued my
              undergraduate degree at
              <b> The Citadel Military College of South Carolina </b>
              where I graduated <b>Cum Laude</b> with a{' '}
              <b>B.S. in Computer Science </b>
              and a minor in <b>Management Information Systems </b>.
            </p>
            <p>
              Upon graduating, I returned to Arizona to begin my career in{' '}
              <b>Software Engineering </b>
              as well as earn a{' '}
              <b>
                Masters of Science Engineering in Software Engineering
              </b>{' '}
              from
              <b> Arizona State University</b>.
            </p>
            <p>
              In October 2016, I started my current role as{' '}
              <b>Senior Software Engineer/Site Reliability Engineer</b> at{' '}
              <b>CommercialTribe</b> and relocated to beautiful{' '}
              <b>Denver, Colorado</b>.
            </p>
            <p>
              I have been extremely fortunate in my career to have been given
              the opportunities to work with so many talented engineers and
              innovative teams that have helped mold me into the{' '}
              <b>Engineer</b> and <b>Leader</b> I am today.
            </p>
            <p>
              I have a beautiful wife, <b>Jaymie</b> and two beautiful
              daughters, <b>Ryann ({getDurationYears(RYANNS_BIRTHDAY)})</b> and{' '}
              <b>Logan ({getDurationYears(LOGANS_BIRTHDAY)})</b> who mean the
              world to me.
            </p>
            <div className="row">
              <div className="col">
                <h2>Interests</h2>
                <p>
                  When I am not coding, this is what I love to spend my time
                  doing!
                </p>
                <Interests />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Eric Irwin</span>
                  <br />
                  <span>Denver, CO</span>
                  <br />
                  <span>480-823-8782</span>
                  <br />
                  <span>Eric.Irwin@gmail.com</span>
                </p>
              </div>
            </div>

            <div className="col" />
          </div>
        </div>
      </div>
    </section>
  );
}
