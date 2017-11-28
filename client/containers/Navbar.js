import React from 'react';

/**
 * creates Navbar component
 *  @returns {funct} Navbar
 */
const Navbar = () => (
    <div>
        <header className="header">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
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
            <div id="intro" className="view hm-black-strong">
                <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-12 text-center">
                            <ul>
                                <li>
                                    <h1 className="h1-responsive wow fadeInUp title white-text mr-5 mb-3"><strong>Hey, wanna book an event center ?</strong></h1>
                                    <h3 className="h3-responsive wow fadeInUp white-text mr-5 mb-4">Find your next experience</h3>
                                </li>
                                <li>
                                    <div className="row wow fadeIn mr-2" data-wow-delay="0.4s">
                                        <div className="col-md-3">
                                            <div className="md-form">
                                                <input type="text" id="form1" className="form-control validate white-text" />
                                                <label htmlFor="form1">Location</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="md-form">
                                                <input type="text" id="form2" className="form-control validate white-text" />
                                                <label htmlFor="form2">Number of Guests</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="md-form">
                                                <input type="text" id="form3" className="form-control validate white-text" />
                                                <label htmlFor="form3">Type of Event</label>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="md-form">
                                                <button className="btn btn-lg btn-mycolor">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
);

export default Navbar;
