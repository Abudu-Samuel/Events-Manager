import React from 'react';

/**
 * creates Footer component
 * @returns {funct} Footer
 */
const Footer = () => (
    <div>
        <footer className="page-footer center-on-small-only default-color pt-0">
            <div className="footer-color">
                <div className="container">
                    <div className="row py-4 d-flex align-items-center">
                        <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                            <h6 className="mb-0 white-text">Get connected with us on social networks!</h6>
                        </div>
                        <div className="col-md-6 col-lg-7 text-center text-md-right">
                            <a className="icons-sm fb-ic ml-0"><i className="fa fa-facebook white-text mr-lg-4" /></a>
                            <a className="icons-sm tw-ic"><i className="fa fa-twitter white-text mr-lg-4" /></a>
                            <a className="icons-sm gplus-ic"><i className="fa fa-google-plus white-text mr-lg-4" /></a>
                            <a className="icons-sm li-ic"><i className="fa fa-linkedin white-text mr-lg-4" /></a>
                            <a className="icons-sm ins-ic"><i className="fa fa-instagram white-text mr-lg-4" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-5 mb-4 text-center text-md-left">
                <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mb-r">
                        <h6 className="title font-bold"><strong>Events Manager</strong></h6>
                        <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco lab.
                        </p>
                    </div>
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-r">
                        <h6 className="title font-bold"><strong>Key Cities</strong></h6>
                        <p><a href="#!">Event centers in Lagos</a></p>
                        <p><a href="#!">Event centers in Ondo</a></p>
                        <p><a href="#!">Event centers in Abuja</a></p>
                        <p><a href="#!">Event centers in Ilorin</a></p>
                    </div>
                    <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-r">
                        <h6 className="title font-bold"><strong>Useful links</strong></h6>
                        <p><a href="#!">Your Account</a></p>
                        <p><a href="#!">Available centers</a></p>
                        <p><a href="#!">Booking</a></p>
                        <p><a href="#!">Help</a></p>
                    </div>
                    <div className="col-md-4 col-lg-3 col-xl-3">
                        <h6 className="title font-bold"><strong>Contact</strong></h6>
                        <p><i className="fa fa-home mr-3" /> Anthony, LG 10012, NG</p>
                        <p><i className="fa fa-envelope mr-3" /> eventsmanager@gmail.com</p>
                        <p><i className="fa fa-phone mr-3" /> +234 6646 453</p>
                        <p><i className="fa fa-print mr-3" /> +234 6646 453</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container-fluid">
                © 2017 Copyright: <a href="#"><strong> Events Manager.com</strong></a>
                </div>
            </div>
        </footer>
    </div>
);

export default Footer;
