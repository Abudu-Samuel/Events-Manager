import React from 'react';
import { Link } from 'react-router-dom';

const LoggedInNavbar = () => (
  <div>
    <header className="space">
      <nav className="navbar navcolor navbar-expand-lg navbar-dark fixed-top">
        <div className="container">

          <a className="navbar-brand" href="index.html">Events Manager</a>


          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>


          <div className="collapse navbar-collapse" id="navbarSupportedContent">


            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a className="nav-link" href="index.html">Home</a>
              </li>
            </ul>


            <ul className="navbar-nav ml-auto nav-flex-icons">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-user" /> <strong>Blackleumas</strong>
                </a>
                <div className="dropdown-menu dropdown-menu-right dropdown-unique" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" href="addevent.html">Add Event</a>
                  <a className="dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" href="userevent.html">Manage Event</a>
                  <a className="dropdown-item waves-effect btn btn-size waves-light ml-1 text-center" href="index.html">Log out</a>
                </div>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </header>
  </div>

);

export default LoggedInNavbar;
