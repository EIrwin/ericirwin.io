// @flow
import * as React from 'react';
import './contact.css';
import isEmail from 'validator/lib/isEmail';
import SocialNetworks from '../social/social-networks.component';

type Props = {};

type State = {
  name: string,
  body: string,
  email: string,
  subject: string,
  status: ?string,
};

class Contact extends React.Component<Props, State> {
  state = {
    name: '',
    body: '',
    email: '',
    subject: '',
    status: null,
  };

  handleSubmit = async (e: any) => {
    e.preventDefault();
    const { name, body, email, subject } = this.state;

    let error;
    if (!name) error = 'Please enter Name';
    else if (!email || !isEmail(email)) error = 'Please enter valid Email';
    else if (!subject) error = 'Please enter Subject';
    else if (!body) error = 'Please enter Message';

    this.setState({ status });

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
          this.handleError();
        } else {
          this.handleSuccess();
        }
      } catch (err) {
        this.handleError();
      }
    }
  };

  handleSuccess = () => {
    this.setState({
      name: '',
      body: '',
      email: '',
      subject: '',
      status: 'Message Sent!',
    });
  };

  handleError = () => {
    this.setState({ status: 'Unable to send contact request at this time' });
  };

  render() {
    const { status } = this.state;
    return (
      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <p className="subheading">
            Feel free to shoot me a message anytime!
          </p>
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
                    value={this.state.name}
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={e => this.setState({ name: e.target.value })}
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
                    value={this.state.email}
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={e => this.setState({ email: e.target.value })}
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
                    value={this.state.subject}
                    onChange={e => this.setState({ subject: e.target.value })}
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
                    value={this.state.body}
                    onChange={e => this.setState({ body: e.target.value })}
                    id="contactMessage"
                    className="form-control"
                    required
                  />
                </div>
              </div>
              <div className="row form-group">
                <div className="col-sm-4" />
                <div className="col">
                  <button className="submit" onClick={this.handleSubmit}>
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
}

export default Contact;
