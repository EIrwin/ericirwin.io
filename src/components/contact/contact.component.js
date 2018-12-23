// @flow
import * as React from 'react';
import './contact.css';
import SocialNetworks from '../social/social-networks.component';

type Props = {};

type State = {
  name: string,
  body: string,
  email: string,
  subject: string,
};

class Contact extends React.Component<Props, State> {
  state = {
    name: '',
    body: '',
    email: '',
    subject: '',
  };

  handleSubmit = () => {};

  render() {
    let section = (
      <section id="contact">
        <div className="container">
          <h2>Contact Me</h2>
          <div className="row">
            <div className="col-md-8">
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
                    rows="4"
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
                  <button className="submit">SUBMIT</button>
                </div>
              </div>
            </div>
            <div className="col-md-4">
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
                <SocialNetworks/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
    return section;
  }
}

export default Contact;
