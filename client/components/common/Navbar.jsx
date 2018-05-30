import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import decodeToken from '../../decodeToken';
import * as userActions from '../../actions/actionCreator';
import history from '../../history';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
  }
  logOut(event) {
    event.preventDefault();
    localStorage.removeItem('x-access-token');
    this.props.logOut();
    history.push('/');
  }


  render() {
    const { isAuthenticated, userData } = this.props;
    return (
      <div>
        <header className="header">
          <nav className="navbar z-depth-2 mb-4 navbar-expand-lg navbar-dark fixed-top">
            <div className="container">
              <Link to="/" className="font-weight-bold navbar-brand">Events Manager</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto smooth-scroll">
                  <li className="nav-item">                 <Link to="/" className="font-weight-bold nav-link">Home</Link>
                  </li>
                </ul>
                {
                  isAuthenticated ? <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item dropdown">
                      <Link className="font-weight-bold nav-link dropdown-toggle waves-effect waves-light"
                        id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                        aria-expanded="false" to='/addcenter'><i className="fa fa-user mr-2" /><span>Hi </span>
                        {
                          userData.username.split('')[0].toUpperCase() + userData.username.slice(1)
                        }
                      </Link>

                      <div className="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">
                        {
                          userData.isAdmin ?
                            <div>
                              <Link className="font-weight-bold dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" to="/admin/dashboard">Dashboard</Link>
                              <Link className="font-weight-bold dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" to="/addcenter">Add Center</Link>
                              <Link className="font-weight-bold dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" to="/manage/centers">View Centers</Link>
                            </div>
                            :
                            <div>
                              <Link className="font-weight-bold dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" to="/dashboard">Dashboard</Link>
                              <Link className="font-weight-bold dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" to="/manage/events">Manage Event</Link>
                            </div>
                        }
                        <button onClick={this.logOut} className="font-weight-bold dropdown-item waves-effect btn btn-mycolor btn-size waves-light ml-1 text-center">Log Out</button>
                      </div>
                    </li>
                  </ul> : <ul className="navbar-nav ml-auto nav-flex-icons">
                    <li className="nav-item">
                      <Link to="/signup" className="font-weight-bold nav-link waves-effect waves-light">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/signin" className="font-weight-bold nav-link waves-effect waves-light">Sign In</Link>
                    </li>
                  </ul>
                }
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export const mapStateToProps = state => ({

  isAuthenticated: state.userAccess.isAuthenticated,
  userData: state.userAccess.userData,
});
export const mapDispatchToProps = dispatch => ({
  logOut: () => dispatch(userActions.logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
