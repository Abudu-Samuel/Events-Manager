import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoggedInNavbar from '../components/LoggedInNavbar';
import Footer from '../components/Footer';
import Form from '../components/Form';

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
      editing: false
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
        });
      });
  }

  render() {
    return (
      this.state.redirect ?
        <Redirect to={`/centers/${this.props.match.params.centerId}`} /> :
        <div className="space">
          <LoggedInNavbar />
          <div className="container add">
            <section>
              <h4 className="font-weight-bold text-center">Create An Event</h4>
            </section>
            <section>
              <div className="container">
                <Form
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  errorStatus={this.state.errorStatus}
                  errorMessage={this.state.errorMessage}
                  editing={this.state.editing}
                  title={this.state.title}
                  time={this.state.time}
                  date={this.state.date}
                  description={this.state.description}
                  type={this.state.type}
                  image={this.state.image}
                />
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
