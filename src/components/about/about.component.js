// @flow
import React from 'react';
import Interests from './interests.component';
import './about.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-4 text-center">
            <img
              className="profile-pic"
              src={`https://pbs.twimg.com/profile_images/1400640089/avatar_ericirwin_400x400.png`}
              alt="Eric Irwin Profile Pic"
            />
          </div>
          <div className="col-sm-8">
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus pretium rutrum vulputate. Sed auctor tortor nec nibh
              ultricies cursus in vitae dui. Donec vel ligula vitae quam
              ultrices porttitor vitae a ligula.
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
