import React from 'react';
// import validator from 'validator';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Navbar from './Navbar';


import * as actionCreators from '../actions/actionCreator';


/**
 * @param {any} e
 * @class Signup
 * @extends {React.Component}
 */
class Signup extends React.Component {
    /**
     * Creates an instance of Signup.
     * @param {any} props
     *
     * @memberOf Signup
     */
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        //setting the initial state of the component
        this.state = {
            username: '',
            email: '',
            password: '',
            firstname: '',
            lastname: '',
        };
    }

  /**
   *
   *
   * @param {any} event
   *
   * @memberOf Signup
   */
  handleChange = event => {
      this.setState({ [event.target.name]: event.target.value });
  }
  /**
   *
   *
   * @param {any} event
   *
   * @memberOf Signup
   */
  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state);
      this.props.signUp(this.state);
  }
    /**
 * @returns {object} data
 *
 * @memberOf Signup
 */
  render() {
      const { data } = this.state;
      return (
          <div>
              <Navbar />
              <div id="intro" className="view hm-black-strong">
                  <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
                      <form onSubmit={this.handleSubmit} className="signup">
                          <h3 className="text-center mt-5 white-text font-weight-bold">Sign up</h3>
                          <div className="md-form">
                              <i className="fa fa-user prefix teal-text" />
                              <input type="text" id="firstname" name="firstname" onChange={this.handleChange} className="form-control" />
                              <label htmlFor="orangeForm-name">First name</label>

                          </div>
                          <div className="md-form">
                              <i className="fa fa-user prefix teal-text" />
                              <input type="text" id="lastname" name="lastname" onChange={this.handleChange} className="form-control" />
                              <label htmlFor="orangeForm-name">Last name</label>

                          </div>
                          <div className="md-form">
                              <i className="fa fa-user prefix teal-text" />
                              <input type="text" id="username" name="username" onChange={this.handleChange} className="form-control" />
                              <label htmlFor="orangeForm-name">Username</label>

                          </div>
                          <div className="md-form">
                              <i className="fa fa-envelope prefix teal-text" />
                              <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control" />
                              <label htmlFor="orangeForm-email">Email</label>

                          </div>
                          <div className="md-form">
                              <i className="fa fa-lock prefix teal-text" />
                              <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" />
                              <label htmlFor="orangeForm-pass">Password</label>

                          </div>
                          <div className="text-center mb-2">
                              <button type="submit" className="btn btn-mycolor">Sign Up</button>
                          </div>
                          <div className="white-text text-center">
                              <h4>Already have an account ?
                                  <a href="signin.html" className="btn btn-sm btn-mycolor">Sign In<i className="fa fa-sign-in ml-1" /></a>
                              </h4>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      );
  }
}

/**
 *
 *
 * @param {any} state
 * @returns
 */
const mapStateToProps = (state) => ({
    signupReducer: state.signUp,
});

/**
 *
 *
 * @param {any} dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const signReducer = connect(mapStateToProps, mapDispatchToProps)(Signup);

export default signReducer;
