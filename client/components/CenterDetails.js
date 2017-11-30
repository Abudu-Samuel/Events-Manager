import React from 'react';
import Navbar from './Navbar';

/**
 * creates Navbar component
 * @returns {funct} Popular Center
 */
const CenterDetails = () => (
    <div className="space">
        <Navbar />
        <div className="container-fluid">
            <section>
                <div className="row">

                    <div className="col-xl-6 mb-4">

                        <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">

                            <ol className="carousel-indicators">
                                <li data-target="#carousel-example-1z" data-slide-to="0" className="active" />
                                <li data-target="#carousel-example-1z" data-slide-to="1" />
                                <li data-target="#carousel-example-1z" data-slide-to="2" />
                            </ol>

                            <div className="carousel-inner z-depth-1-half" role="listbox">

                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="https://static.pexels.com/photos/210620/pexels-photo-210620.jpeg" alt="First slide" />
                                </div>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://static.pexels.com/photos/12574/SW_Dylan%2BRives.jpg" alt="Second slide" />
                                </div>

                                <div className="carousel-item">
                                    <img className="d-block w-100" src="https://static.pexels.com/photos/167605/pexels-photo-167605.jpeg" alt="Third slide" />
                                </div>

                            </div>

                            <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="sr-only">Next</span>
                            </a>

                        </div>

                    </div>

                    <div className="col-xl-6">
                        <h4 className="mb-2 font-weight-bold"><i className="fa fa-bolt indigo-text mr-2 fa-1x" /><strong>Hall of Fame</strong></h4>
                        <h6><i className="fa fa-map-marker grey-text mr-2 fa-2x" /><strong>Ikeja, Lagos</strong> <i className="fa fa-group grey-text ml-2 mr-2 fa-2x" /><strong>450 Guests</strong></h6>
                        <p className="text-justify">Lorem ipsum dolor sit amet,lore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing e exercitation ullamco laboris nisi.
                        </p>
                        <hr />
                        <div className="row">
                            <div className="col-md-2">
                                <h6>Facilities</h6>
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-4">
                                        <p><img src="img/svg/policeman.svg" alt="" /> Security</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><img src="img/svg/towel-on-hanger.svg" alt="" /> changing-room</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><img src="img/svg/light-bulb.svg" alt="" /> Lights</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><img src="img/svg/man-sitting-in-the-bathroom.svg" alt="" /> Rest-room</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><img src="img/svg/power-cord.svg" alt="" /> Power-supply</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><img src="img/svg/restaurant-table-and-chairs.svg" alt="" /> Tables & chairs</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><img src="img/svg/minisplit.svg" alt="" /> Air-conditioner</p>
                                    </div>
                                    <div className="col-md-4">
                                        <p><img src="img/svg/parked-car.svg" alt="" /> Parking space</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <div className="col-md-2">
                                <h6>Charges</h6>
                            </div>
                            <div className="col-md-10">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h6><strong>Tax</strong></h6>
                                        <p>5% VAT and 5% consumption TAX</p>
                                    </div>
                                    <div className="col-md-6">
                                        <h6><strong>Cleaning Fee</strong></h6>
                                        <p>inclusive</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </section>
            <hr className="my-5" />
            <section>
                <h3 className="mb-3 font-weight-bold text-center">Upcoming Events</h3>
                <div className="container">

                    <div className="row">

                        <div className="col-xl-4 mb-4">

                            <div className="card">

                                <img className="img-fluid" src="https://static.pexels.com/photos/382297/pexels-photo-382297.jpeg" alt="Card image cap" />

                                <div className="card-body">

                                    <p className="grey-text">SAT. NOV 18 9:00 AM</p>
                                    <h4 className="card-title pt-1 text-center">The coming of Kings</h4>


                                </div>

                            </div>

                        </div>

                        <div className="col-xl-8">
                            <h5 className="mb-2 font-weight-bold grey-text">The coming of Kings</h5>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                                elit, sed adipioris nisi.
                            </p>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                                elit, sed adipim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                            </p>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                                elit, sed adipim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
                            </p>
                            <a className="btn btn-default btn-sm">Read More</a>
                        </div>
                    </div>

                </div>
            </section>

        </div>

    </div>
);

export default CenterDetails;
