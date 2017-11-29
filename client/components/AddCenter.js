import React from 'react';
import Navbar from './Navbar';

/**
 * creates Sidebar component
 *  @returns {funct} Sidebar
 */
const AddCenter = () => (
    <div>
        <Navbar />
        <div className="space">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 adm mb-4">
                        <div className="col-xl-5 col-md-4 mb-3 try text-center">
                            <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" className="img-fluid mb-3 z-depth-1 rounded-circle" alt="Responsive image" />
                            <h5 className="font-weight-bold white-text">Admin</h5>
                        </div>
                        <h6 className="font-weight-bold white-text text-center">adminuser@gmail.com</h6>
                        <hr className="font-weight-bold" />
                        <div className="">
                            <ul className="mr-6">
                                <li className="white-text mb-3">
                                    <a className="btn btn-mycolor btn-block mr-2" href="#"><i className="fa fa-dashboard mr-2 white-text" />Dashboard</a>
                                </li>
                                <li className="white-text mb-3">
                                    <a className="btn btn-mycolor btn-block mr-4" href="#"><i className="fa fa-user mr-2 white-text" />Profile</a>
                                </li>
                                <li className="white-text mb-3">
                                    <a className="btn btn-mycolor btn-block mr-4" href="addcenter.html"><i className="fa fa-plus mr-2 white-text" />Add Center</a>
                                </li>
                                <li className="white-text mb-3">
                                    <a className="btn btn-mycolor btn-block mr-4" href="editcenter.html"><i className="fa fa-street-view mr-2 white-text" />View Centers</a>
                                </li>
                                <li className="white-text mb-3">
                                    <a className="btn btn-mycolor btn-block mr-4" href="#"><i className="fa fa-cog mr-2 white-text" />Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="">
                            <div className="container z-depth-1-half">
                                <h5 className="font-weight-bold teal-text text-center">Add Event Center</h5>
                                <form className="signup add">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="md-form">
                                                <i className="fa fa-home prefix teal-text" />
                                                <input type="text" id="first-name" className="form-control" />
                                                <label htmlFor="orangeForm-name">Name</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form">
                                                <i className="fa fa-map-marker   prefix teal-text" />
                                                <input type="text" id="last-name" className="form-control" />
                                                <label htmlFor="orangeForm-name">State</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form">
                                                <i className="fa fa-map-marker prefix teal-text" />
                                                <input type="text" id="er-name" className="form-control" />
                                                <label htmlFor="orangeForm-name">Area</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form form-sm">
                                                <i className="fa fa-pencil prefix teal-text" />
                                                <textarea type="text" className="md-textarea" id="input-4" name="" />
                                                <label htmlFor="input-4">Address</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form form-sm">
                                                <i className="fa fa-pencil prefix teal-text" />
                                                <textarea type="text" className="md-textarea" id="input-5" name="" />
                                                <label htmlFor="input-4">Description</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form">
                                                <i className="fa fa-group prefix teal-text" />
                                                <input type="text" id="username-name" className="form-control" />
                                                <label htmlFor="orangeForm-name">Capacity</label>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="md-form">
                                                <i className="fa fa-money prefix teal-text" />
                                                <input type="text" id="df-name" className="form-control" />
                                                <label htmlFor="orangeForm-name">Price</label>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="md-form myfile">
                                                <i className="fa fa-camera-retro prefix teal-text" />
                                                <label className="custom-file">
                                                    <input type="file" id="file2" className="custom-file-input" />
                                                    <span className="custom-file-control" />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button className="btn btn-mycolor mb-3">Add Center<i className="fa fa-sign-in ml-1" /></button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AddCenter;
