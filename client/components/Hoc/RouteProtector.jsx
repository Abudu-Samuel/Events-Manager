import React from "react";
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';

const RouteProtector = (WrappedComponent) => class RouteProtectorClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }
  componentWillMount() {
    const decoded = jwt.decode(localStorage.getItem('x-access-token'));
    console.log(decoded);
    if (decoded.isAdmin) {
      return this.setState({
        redirect: false
      });
    }
    return this.setState({
      redirect: true
    });
  }
  render() {
    console.log(this.state.redirect);
    return (
      this.state.redirect ?
        <Redirect to="/"/> :
        <WrappedComponent {...this.props}/>
    );
  }
};

export default RouteProtector;
