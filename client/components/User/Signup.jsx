import React from 'react';
import { Link } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import * as userActions from '../../actions/actionCreator';
import { validateSignup } from '../Utils/Validator';
import history from '../../history';
import Navbar from '../common/Navbar';
import decodeToken from '../../decodeToken';


/**
 * @description SignUp component
 *
 * @class SignUp
 *
 * @param {object} event
 *
 * @extends {React.Component}
 */
export class SignUp extends React.Component {
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
      isAdmin: false,
      errorMessage: '',
      errorStatus: false,
      redirect: false,
      redirectMessage: '',
      showRedirectMessage: false,
      errors: {}
    };
  }

  /**
  * @method componentWillMount
   *
   * @description React lifecycle hook
   *
   * @return {object} state
   *
 * @memberof SignUp
 */
  componentWillMount() {
    if (this.props.userData.isAuthenticated) {
      if (decodeToken()) {
        history.push('/admin/dashboard');
      }
      if (!decodeToken()) {
        history.push('/dashboard');
      }
    }
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
    const validationErrors = validateSignup(this.state).errors;
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    this.setState({ errors: {} });
    this.props.userSignUp(this.state)
      .then(() => {
        this.setState({
          redirectMessage: 'Redirecting To Sign In Page',
          showRedirectMessage: true
        });
        const tokenData = jwt.decode(localStorage.getItem('x-access-token'));
        if (!tokenData.isAdmin) {
          history.push('/dashboard');
        }
        if (tokenData.isAdmin) {
          history.push('/admin/dashboard');
        }
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
      <div>
        <Navbar />
        <div id="intro" className="view hm-black-strong">
          <div className="container-fluid full-bg-img d-flex align-items-center
           justify-content-center">
            <form onSubmit={this.handleSubmit} className="signup z-depth-1-half
             test mb-6">
              <h3 className="text-center mt-5 teal-text font-weight-bold">
              Sign up</h3>
              <div className="md-form">
                <i className="fa fa-user prefix teal-text" />
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  onChange={this.handleChange}
                  className="form-control firstname"
                />
                <label htmlFor="orangeForm-name" className="teal-text">
                First name</label>
                <p className="text-center error-msg">
                  {
                    errors.firstname && <span>{errors.firstname}</span>
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
                  className="form-control lastname"
                />
                <label htmlFor="orangeForm-name" className="teal-text">
                Last name</label>
                <p className="text-center error-msg">
                  {
                    errors.lastname && <span>{errors.lastname}</span>
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
                  className={classNames(
                    'form-control username',
                    { 'has-errors': errors.username }
                  )}
                />
                <label htmlFor="orangeForm-name" className="teal-text">
                Username</label>
                <p className="text-center error-msg">
                  {
                    errors.username && <span>{errors.username}</span>
                  }
                </p>
              </div>
              <div className="md-form">
                <i className="fa fa-envelope prefix teal-text" />
                <input
                  type="text"
                  id="email"
                  name="email"
                  onChange={this.handleChange}
                  className="form-control email"
                />
                <label htmlFor="orangeForm-email" className="teal-text">
                Email</label>
                <p className="text-center error-msg">
                  {
                    errors.email && <span>{errors.email}</span>
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
                  className="form-control password"
                />
                <label htmlFor="orangeForm-pass" className="teal-text">
                Password</label>
                <p className="text-center error-msg">
                  {
                    errors.password && <span>{errors.password}</span>
                  }
                </p>
              </div>
              <div className="text-center mb-2">
                <button type="submit" className="btn btn-mycolor">
                Sign Up</button>
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
                <h6 className="teal-text font-weight-bold">
                Already have an account ?
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
  userSignUp: PropTypes.func,
  userData: PropTypes.object
};

const mapStateToProps = state => ({
  userData: state.userAccess
});

const mapDispatchToProps = dispatch => ({
  userSignUp: userData => dispatch(userActions.signUp(userData))
});

const signReducer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default signReducer;
