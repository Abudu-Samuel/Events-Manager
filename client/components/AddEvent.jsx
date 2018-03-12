import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import * as userActions from '../actions/actionCreator';

/**
 * 
 * 
 * @class AddEvent
 * @extends {React.Component}
 */
class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      time: '',
      date: '',
      description: '',
      type: '',
      image: '',
      errorStatus: false,
      redirect: false,
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      errorMessage: '',
      errorStatus: false
    });
    this.props.addEvent({ ...this.state, centerId: this.props.match.params.centerId })
    .then(() => {
      this.setState({
        errorStatus: false,
        errorMessage: ''
      });
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 1000);
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.response.data.message,
        errorStatus: true
      })
    })
    
  }

  render() {
    return (
      this.state.redirect ?
          <Redirect to={`/centers/${this.props.match.params.centerId}`} /> :
      <div className="space">
        <Navbar />
        <div className="container add">
          <section>
            <h4 className="font-weight-bold text-center">Create An Event</h4>
          </section>
          <section>
            <div className="container">
              <form onSubmit={this.handleSubmit} className="signup add">
                <div className="md-form">
                  <i className="fa fa-ticket prefix teal-text" />
                  <input type="text" name="title" onChange={this.handleChange} id="first-name" className="form-control" />
                  <label htmlFor="orangeForm-name">Event Title</label>
                </div>
                <div className="md-form">
                  <i className="fa fa-clock-o prefix teal-text" />
                  <input type="text" name="date" onChange={this.handleChange} id="username-name" className="form-control" />
                  <label htmlFor="orangeForm-name">Event Date</label>
                </div>
                <div className="md-form">
                  <i className="fa fa-clock-o prefix teal-text" />
                  <input type="text" name="time" onChange={this.handleChange} id="ends-name" className="form-control" />
                  <label htmlFor="orangeForm-name">Event Time</label>
                </div>
                <div className="md-form">
                  <i className="fa fa-clock-o prefix teal-text" />
                  <input type="text" name="type" onChange={this.handleChange} id="ends-name" className="form-control" />
                  <label htmlFor="orangeForm-name">Event Type</label>
                </div>
                <div className="md-form myfile">
                  <i className="fa fa-camera-retro prefix teal-text" />
                  <input type="text" id="image" name="image" className="form-control" onChange={this.handleChange} />
                                <label htmlFor="orangeForm-name">Image</label>
                </div>
                <div className="md-form form-sm">
                  <i className="fa fa-pencil prefix teal-text" />
                  <textarea type="text" name="description" onChange={this.handleChange} className="md-textarea" id="input-4" />
                  <label htmlFor="input-4">Event Description</label>
                </div>
                {
                            this.state.errorStatus ?
                              <h5 className="text-center font-weight-bold red-text">{this.state.errorMessage}</h5> :
                              null
                          }
                <div className="text-center">
                            <button className="btn btn-mycolor mb-3">Add Center<i className="fa fa-sign-in ml-1" /></button>
                          </div>
              </form>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    );
  }
}

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    addEvent: (eventData) => dispatch(userActions.addEvent(eventData))
  };
}

export default connect(null, mapDispatchToProps)(AddEvent);
