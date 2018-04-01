import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (isAuthenticated) => (console.log('navbar', isAuthenticated),
  
  <div>
    
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <Link to="/" className="navbar-brand">Events Manager</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item">
                <Link to="/signup" className="nav-link waves-effect waves-light">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link to="/signin" className="nav-link waves-effect waves-light">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  </div>
);


export default Navbar;
