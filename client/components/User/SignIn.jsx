import React from 'react';
import jwt from 'jsonwebtoken';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import Navbar from '../common/Navbar';
import decodeToken from '../../decodeToken';
import * as userActions from '../../actions/actionCreator';
import history from '../../history';
import { validateSignin } from '../Utils/Validator';

/**
 * @description Signin component
 *
 * @class Signin
//  *
 * @param {object} event
 *
 * @extends {React.Component}
 */
class Signin extends React.Component {
  /**
     * Creates an instance of Signin.
     *
     * @param {any} props
     *
     * @memberof Signin
     */
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

    // setting the initial state of the component

    this.state = {
      username: '',
      password: '',
      errorMessage: '',
      errorStatus: false,
      redirect: false,
      loading: false,
      redirectMessage: '',
      showRedirectMessage: false,
      isAdmin: false,
      errors: {}
    };
  }

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
   * @memberof Signin
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
     * @memberof Signin
     */
  handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validateSignin(this.state).errors;
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    this.setState({ errors: {} });
    this.props.userSignIn(this.state)
      .then(() => {
        this.setState({
          errorMessage: '',
          errorStatus: false,
          redirectMessage: 'Redirecting To Dashboard',
          loading: true,
          showRedirectMessage: true,
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
     * @memberof Signin
     */
  render() {
    const { errors } = this.state;
    return (
      <div>
        <div id="intro" className="view hm-black-strong">
          <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
            <form onSubmit={this.handleSubmit} className="signup z-depth-1-half test mb-6">
              <h3 className="text-center mt-5 teal-text font-weight-bold">
                Sign In
              </h3>
              <div className="md-form">
                <i className="fa fa-user prefix teal-text" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  onChange={this.handleChange}
                  className="form-control"
                />
                <label className="teal-text" htmlFor="orangeForm-name">Username</label>
                <p className="text-center error-msg">
                  {
                    errors.username && <span>{errors.username}</span>
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
                <label className="teal-text" htmlFor="orangeForm-pass">Password</label>
                <p className="text-center error-msg">
                  {
                    errors.password && <span>{errors.password}</span>
                  }
                </p>
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
              <div className="text-center mb-2">
                <button type="submit" className="btn btn-mycolor">Sign In</button>
              </div>
              <div className="white-text text-center">
                <h6 className="teal-text font-weight-bold">Don't have an account ?
                  <Link to="/signup" className="teal-text"> <u>Sign Up</u>
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

Signin.propTypes = {
  userSignIn: PropTypes.func
};

const mapStateToProps = state => ({
  userData: state.userAccess
});

const mapDispatchToProps = dispatch => ({
  userSignIn: userData => dispatch(userActions.signIn(userData))
});

const signReducer = connect(mapStateToProps, mapDispatchToProps)(Signin);

export default signReducer;
