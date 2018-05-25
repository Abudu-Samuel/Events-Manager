import React from 'react';
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';

const AdminRouteProtector = WrappedComponent => class AdminRouteProtectorClass extends React.Component {
  /**
   * Creates an instance of RouteProtectorClass.
   * @param {any} props
   */
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }
  /**
   *
   * @returns {object} admin role
   */
  componentWillMount() {
    const decoded = jwt.decode(localStorage.getItem('x-access-token'));
    if (decoded.isAdmin) {
      return this.setState({
        redirect: false
      });
    }
    return this.setState({
      redirect: true
    });
  }
  /**
   *
   * @returns {object} updated state
   */
  render() {
    return (
      this.state.redirect ?
        <Redirect to="/dashboard"/> :
        <WrappedComponent {...this.props}/>
    );
  }
};

export default AdminRouteProtector;
