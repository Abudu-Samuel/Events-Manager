import React from 'react';
import { Redirect } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import * as userActions from '../actions/actionCreator';
import history from '../history';

/**
 * @description Signin component
 *
 * @class Signin
 *
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

    //setting the initial state of the component
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
    };
  }
    handleChange = event => {
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
      this.props.userSignIn(this.state)
        .then(() => {
          this.setState({
            errorMessage: '',
            errorStatus: false,
            redirectMessage: 'Redirecting To Dashboard',
            loading: true,
            showRedirectMessage: true
          });
          const tokenData = jwt.decode(localStorage.getItem('x-access-token'));
          if (!tokenData.isAdmin) {
            history.push('/dashboard');
          }
          if (tokenData.isAdmin) {
            history.push('/addcenter');
          }
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
     * @method render
     *
     * @description React method render
     *
     * @return {jsx} Jsx representation of the dom
     *
     * @memberof Signin
     */
    render() {
      return (
        <div>
          <Navbar />
          <div id="intro" className="view hm-black-strong">
            <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
              <form onSubmit={this.handleSubmit} className="signup z-depth-1-half test mb-6">
                <h3 className="text-center mt-5 teal-text font-weight-bold">Sign In</h3>
                <div className="md-form">
                  <i className="fa fa-user prefix teal-text" />
                  <input type="text" id="username" name="username" onChange={this.handleChange} className="form-control" />
                  <label className="teal-text" htmlFor="orangeForm-name">Username</label>
                </div>
                <div className="md-form">
                  <i className="fa fa-lock prefix teal-text" />
                  <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" />
                  <label className="teal-text" htmlFor="orangeForm-pass">Password</label>
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
                  <button type="submit" className="btn btn-mycolor">SignIn</button>
                </div>
                <div className="white-text text-center">
                  <h4 className="teal-text font-weight-bold">Don't have an account ?
                    <a href="signup.html" className="btn btn-sm btn-mycolor">Sign Up<i className="fa fa-sign-in ml-1" /></a>
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
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    userSignIn: (userData) => dispatch(userActions.signIn(userData))
  };
}

const signReducer = connect(null, mapDispatchToProps)(Signin);

export default signReducer;
