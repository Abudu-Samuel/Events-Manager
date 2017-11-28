import React from 'react';

/**
 * creates Navbar component
 *  @returns {funct} Navbar
 */
const Navbar = () => (
    <div>
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Events Manager</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto smooth-scroll">
                            <li className="nav-item">
                                <a className="nav-link" href="#intro">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#how it works">How it works</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#popular centers">Trending Centers</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#events">Popular Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#gallery">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ml-auto nav-flex-icons">
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light"><i className="fa fa-twitter" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light"><i className="fa fa-google-plus" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="signup.html">Sign Up</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="signin.html">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link waves-effect waves-light" href="addcenter.html">Admin</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </div>
);

export default Navbar;
