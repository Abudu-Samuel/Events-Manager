import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import Navbar from '../common/Navbar';
import * as userActions from '../../actions/actionCreator';
import { validateSignup } from '../Utils/Validator';

/**
 * @description SignUp component
 *
 * @class SignUp
 *
 * @param {object} event
 *
 * @extends {React.Component}
 */
class SignUp extends React.Component {
  /**
   * Creates an instance of SignUp.
   *
   * @param {any} props
   *
   * @memberof SignUp
   */
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // setting the initial state of the component
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
      showRedirectMessage: false,
      errors: {}
    };
  }
  /**
 * @method handleChange
 *
 * @param {object} event
 *
 * @returns {object} updated event
 *
 * @memberof SignUp
 */
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  /**
   * @method handleSubmit
   *
   * @param {object} event
   *
   * @return {object} updated state
   *
   * @memberof SignUp
   */
  handleSubmit(event) {
    event.preventDefault();
    if (this.validateInput()) {
      this.setState({ errors: {} });
      this.props.userSignUp(this.state)
        .then(() => {
          this.setState({
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
          if (error.response) {
            return this.setState({
              errorMessage: error.response.data.message,
              errorStatus: true,
              showRedirectMessage: false,
              redirectMessage: ''
            });
          }
        });
    }
  }
  /**
 * @method validateInput
 *
 * @returns {object} error state
 *
 * @memberof SignUp
 */
  validateInput() {
    const { errors, validInput } = validateSignup(this.state);
    if (!validInput) {
      this.setState({ errors });
    }
    return validInput;
  }
  /**
   * @method render
   *
   * @description React method render
   *
   * @return {jsx} Jsx representation of the dom
   *
   * @memberof SignUp
   */
  render() {
    const { errors } = this.state;
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
                  <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  <label htmlFor="orangeForm-name" className="teal-text">First name</label>
                  <p className="text-center error-msg">
                    {
                      errors.firstname && <span>{ errors.firstname }</span>
                    }
                  </p>
                </div>
                <div className="md-form">
                  <i className="fa fa-user prefix teal-text" />
                  <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  <label htmlFor="orangeForm-name" className="teal-text">Last name</label>
                  <p className="text-center error-msg">
                    {
                      errors.lastname && <span>{ errors.lastname }</span>
                    }
                  </p>
                </div>
                <div className="md-form">
                  <i className="fa fa-user prefix teal-text" />
                  <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={this.handleChange}
                    className={classNames('form-control', { 'has-errors': errors.username })}
                  />
                  <label htmlFor="orangeForm-name" className="teal-text">Username</label>
                  <p className="text-center error-msg">
                    {
                      errors.username && <span>{ errors.username }</span>
                    }
                  </p>
                </div>
                <div className="md-form">
                  <i className="fa fa-envelope prefix teal-text" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  <label htmlFor="orangeForm-email" className="teal-text">Email</label>
                  <p className="text-center error-msg">
                    {
                      errors.email && <span>{ errors.email }</span>
                    }
                  </p>
                </div>
                <div className="md-form">
                  <i className="fa fa-lock prefix teal-text" />
                  <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.handleChange}
                    className="form-control"
                  />
                  <label htmlFor="orangeForm-pass" className="teal-text">Password</label>
                  <p className="text-center error-msg">
                    {
                      errors.password && <span>{ errors.password }</span>
                    }
                  </p>
                </div>
                <div className="text-center mb-2">
                  <button type="submit" className="btn btn-mycolor">Sign Up</button>
                </div>
                {
                  this.state.errorStatus ?
                    <h5 className="text-center font-weight-bold red-text">
                      {
                        this.state.errorMessage
                      }
                    </h5> :
                    null
                }
                <div className="white-text text-center">
                  <h6 className="teal-text font-weight-bold">Already have an account ?
                    <Link to="/signin" className="teal-text"> <u>Sign In</u>
                      <i className="fa fa-sign-in ml-1" />
                    </Link>
                  </h6>
                </div>
              </form>
            </div>
          </div>
        </div>
    );
  }
}

SignUp.propTypes = {
  userSignUp: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  userSignUp: userData => dispatch(userActions.signUp(userData))
});

const signReducer = connect(null, mapDispatchToProps)(SignUp);

export default signReducer;
