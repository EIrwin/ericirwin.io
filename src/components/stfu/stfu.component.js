// @flow
import React, { useState, useEffect } from 'react';
import './stfu.css';

function STFU() {
  const [message, setMessage] = useState('STFU');
  const submit = async () => {
    setMessage('Notifying Eric');
    try {
      await fetch('/stfu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setTimeout(() => {
        setMessage('STFU');
      }, 3000);
    } catch (err) {
      console.error(err);
    } finally {
    }
  };
  return (
    <section id="stfu">
      <div className="container">
        <h2>Tell Eric to STFU!</h2>
        <div className="row">
          <div className="col-sm-4" />
          <div className="col">
            <img
              className="profile-pic"
              src={`https://avatars2.githubusercontent.com/u/6673161?s=400&u=eae6f22d3d0671db6bfd4225a524b5dfd4829a1c&v=4`}
              alt="Eric Irwin Profile Pic"
            />
          </div>
          <div className="col-sm-4" />
        </div>
        <p className="subheading">
          Feel free to tell Eric to STFU anytime you like!
        </p>
        <div className="row form-group">
          <div className="col-sm-4" />
          <div className="col">
            <button className="stfu" onClick={submit}>
              {message}
            </button>
          </div>
          <div className="col-sm-4" />
        </div>
      </div>
    </section>
  );
}

export default STFU;
