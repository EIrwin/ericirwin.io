// @flow
import React from 'react';
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
              Use this bio section as your way of describing yourself and
              saying what you do, what technologies you like to use or feel
              most comfortable with, describing your personality, or whatever
              else you feel like throwing in.
            </p>
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
