import React from 'react';

/**
 * creates UserEvent component
 *  @returns {funct} UserEvent
 */
const UserEvent = () => (
    <div className="space">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-5 font-weight-bold text-center">My Events</h2>
                </div>
            </div>
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
                <div className="col-xl-8 text-justify">
                    <h5 className="mb-2 font-weight-bold grey-text">The coming of Kings</h5>
                    <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                        elit, sed adipmod tempor incididu nsectetur adipisicing elit, sed do eiusmod tempor incididu.
                    </p>
                    <p className="grey-text">Lorem ipsum dolor icing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing elit, sed adipioris nisi
                        nsectetur adir adipisicing elit, sed do eiusmod tempor incididu.
                    </p>
                    <h6 className="grey-text"><i className="fa fa-map-marker grey-text mr-2 fa-2x" /><strong>Ikeja, Lagos</strong></h6>
                    <h6 className="grey-text"><i className="fa fa-clock-o grey-text mr-2 fa-2x" /><strong>Starts SAT. NOV 18 9:00 AM - Ends SAT. NOV 18 9:00 PM</strong></h6>
                    <h6>Created: 13th Nov 2017</h6>
                    <a href="editevent.html" className="btn btn-default btn-sm">Edit</a>
                    <a href="deleteevent.html" className="btn btn-danger btn-sm">Trash</a>
                </div>
            </div>

        </div>
    </div>
);

export default UserEvent;