// @flow
import * as React from 'react';
import './contact.css';
import isEmail from 'validator/lib/isEmail';
import SocialNetworks from '../social/social-networks.component';

function Contact() {
  const [name, setName] = React.useState('');
  const [body, setBody] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [subject, setSubject] = React.useState('');
  const [status, setStatus] = React.useState(null);

  const handleSuccess = () => {
    setName('');
    setBody('');
    setEmail('');
    setSubject('');
    setStatus('Message Sent!');
  };

  const handleError = () => {
    setStatus('Unable to send contact request at this time');
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let error;
    if (!name) error = 'Please enter Name';
    else if (!email || !isEmail(email)) error = 'Please enter valid Email';
    else if (!subject) error = 'Please enter Subject';
    else if (!body) error = 'Please enter Message';

    setStatus(status);

    if (!error) {
      const data = {
        name,
        body,
        email,
        subject,
      };

      try {
        const resp = await fetch('/contact', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (resp.status !== 200) {
          handleError();
        } else {
          handleSuccess();
        }
      } catch (err) {
        handleError();
      }
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p className="subheading">Feel free to shoot me a message anytime!</p>
        <div className="row">
          <div className="col-md-9">
            <div className="row form-group">
              <div className="col-sm-2" />
              <div className="col-sm-2">
                <label htmlFor="contactName">
                  Name<span className="required">*</span>
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  value={name}
                  size="35"
                  id="contactName"
                  name="contactName"
                  onChange={e => setName(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2" />
              <div className="col-sm-2">
                <label htmlFor="contactEmail">
                  Email<span className="required">*</span>
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  value={email}
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2" />
              <div className="col-sm-2">
                <label htmlFor="contactSubject">
                  Subject<span className="required">*</span>
                </label>
              </div>
              <div className="col">
                <input
                  type="text"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-2" />
              <div className="col-sm-2">
                <label htmlFor="contactMessage">
                  Message<span className="required">*</span>
                </label>
              </div>
              <div className="col">
                <textarea
                  rows="3"
                  value={body}
                  onChange={e => setBody(e.target.value)}
                  id="contactMessage"
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4" />
              <div className="col">
                <button className="submit" onClick={handleSubmit}>
                  SUBMIT
                </button>
              </div>
            </div>
            <div className="row form-group">
              <div className="col-sm-4" />
              <div className="col">
                <p className="help-block error">{status}</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="widget widget_contact">
              <h4>Contact Details</h4>
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
            <div className="widget widget_social">
              <SocialNetworks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
