import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';


import * as userActions from '../actions/actionCreator';


/**
 * @param {any} e
 * @class Signup
 * @extends {React.Component}
 */
class SignUp extends React.Component {
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
            errorMessage: '',
            errorStatus: false,
            redirect: false,
            redirectMessage: '',
            showRedirectMessage: false
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
      this.props.userSignUp(this.state)
          .then(() => {
              this.setState({
                  errorMessage: '',
                  errorStatus: false,
                  redirectMessage: 'Redirecting To Sign In Page',
                  showRedirectMessage: true
              });
              setTimeout(() => {
                  this.setState({
                      redirect: true
                  });
              }, 2000);
          })
          .catch((error) => {
              this.setState({
                  errorMessage: error.response.data.message,
                  errorStatus: true,
                  showRedirectMessage: false,
                  redirectMessage: ''
              });
          });
  }
    /**
 * @returns {object} data
 *
 * @memberOf Signup
 */
  render() {
      return (
          this.state.redirect ?
              <Redirect to ="/signin"/> :
              <div>
                  <Navbar />
                  <div id="intro" className="view hm-black-strong">
                      <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
                          <form onSubmit={this.handleSubmit} className="signup z-depth-1-half test mb-6">
                              <h3 className="text-center mt-5 teal-text font-weight-bold">Sign up</h3>
                              <div className="md-form">
                                  <i className="fa fa-user prefix teal-text" />
                                  <input type="text" id="firstname" name="firstname" onChange={this.handleChange} className="form-control" />
                                  <label htmlFor="orangeForm-name" className="teal-text">First name</label>

                              </div>
                              <div className="md-form">
                                  <i className="fa fa-user prefix teal-text" />
                                  <input type="text" id="lastname" name="lastname" onChange={this.handleChange} className="form-control" />
                                  <label htmlFor="orangeForm-name" className="teal-text">Last name</label>

                              </div>
                              <div className="md-form">
                                  <i className="fa fa-user prefix teal-text" />
                                  <input type="text" id="username" name="username" onChange={this.handleChange} className="form-control" />
                                  <label htmlFor="orangeForm-name" className="teal-text">Username</label>

                              </div>
                              <div className="md-form">
                                  <i className="fa fa-envelope prefix teal-text" />
                                  <input type="email" id="email" name="email" onChange={this.handleChange} className="form-control" />
                                  <label htmlFor="orangeForm-email" className="teal-text">Email</label>

                              </div>
                              <div className="md-form">
                                  <i className="fa fa-lock prefix teal-text" />
                                  <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" />
                                  <label htmlFor="orangeForm-pass" className="teal-text">Password</label>
                              </div>
                              {
                                  this.state.errorStatus ?
                                      <h5 className="text-center font-weight-bold red-text">{this.state.errorMessage}</h5> :
                                      null
                              }
                              {
                                  this.state.showRedirectMessage ?
                                      <h5 className="text-center font-weight-bold green-text">{this.state.redirectMessage}</h5> :
                                      null
                              }
                              <div className="text-center mb-2">
                                  <button type="submit" className="btn btn-mycolor">Sign Up</button>
                              </div>
                              <div className="white-text text-center">
                                  <h4 className="teal-text">Already have an account ?
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
 * @param {any} dispatch 
 * @returns 
 */
const mapDispatchToProps = (dispatch) => {
    return {
        userSignUp: (userData) => dispatch(userActions.signUp(userData))
    };
};

const signReducer = connect(null, mapDispatchToProps)(SignUp);

export default signReducer;
