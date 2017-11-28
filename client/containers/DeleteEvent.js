import React from 'react';

/**
 * creates Delete Event component
 *  @returns {funct} DeleteEvent
 */
const DeleteEvent = () => (
    <div className="space">
        <div className="container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h4 className="font-weight-bold text-center mt-3 mb-4">Trash</h4>
                    </div>
                    <div className="container">
                        <div className="row mb-4">
                            <div className="col-md-4 mb-4">
                                <div className="card text-center">

                                    <img className="img-fluid" src="https://static.pexels.com/photos/382297/pexels-photo-382297.jpeg" alt="Card image cap" />

                                    <div className="card-body">

                                        <h4 className="card-title">The Coming Of Kings</h4>

                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a role="btn" data-toggle="modal" data-target="#modalConfirmDelete" className="btn btn-danger btn-sm">Delete</a>

                                        <div className="modal fade" id="modalConfirmDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-md modal-notify modal-danger" role="document">

                                                <div className="modal-content text-center">

                                                    <div className="modal-header d-flex justify-content-center">
                                                        <p className="heading">Are you sure?</p>
                                                    </div>

                                                    <div className="modal-body">

                                                        <i className="fa fa-times fa-4x animated rotateIn" />

                                                    </div>

                                                    <div className="modal-footer flex-center">
                                                        <a href="userevent.html" className="btn  btn-outline-secondary-modal">Yes</a>
                                                        <a type="button" className="btn  btn-primary-modal waves-effect" data-dismiss="modal">No</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card text-center">


                                    <img className="img-fluid" src="https://static.pexels.com/photos/382297/pexels-photo-382297.jpeg" alt="Card image cap" />


                                    <div className="card-body">

                                        <h4 className="card-title">The Coming Of Kings</h4>

                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a role="btn" data-toggle="modal" data-target="#modalConfirmDelete1" className="btn btn-danger btn-sm">Delete</a>

                                        <div className="modal fade" id="modalConfirmDelete1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-md modal-notify modal-danger" role="document">

                                                <div className="modal-content text-center">

                                                    <div className="modal-header d-flex justify-content-center">
                                                        <p className="heading">Are you sure?</p>
                                                    </div>

                                                    <div className="modal-body">

                                                        <i className="fa fa-times fa-4x animated rotateIn" />

                                                    </div>

                                                    <div className="modal-footer flex-center">
                                                        <a href="userevent.html" className="btn  btn-outline-secondary-modal">Yes</a>
                                                        <a type="button" className="btn  btn-primary-modal waves-effect" data-dismiss="modal">No</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 mb-4">
                                <div className="card text-center">

                                    <img className="img-fluid" src="https://static.pexels.com/photos/382297/pexels-photo-382297.jpeg" alt="Card image cap" />

                                    <div className="card-body">

                                        <h4 className="card-title">The Coming Of Kings</h4>

                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a role="btn" data-toggle="modal" data-target="#modalConfirmDelete2" className="btn btn-danger btn-sm">Delete</a>

                                        <div className="modal fade" id="modalConfirmDelete2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div className="modal-dialog modal-md modal-notify modal-danger" role="document">

                                                <div className="modal-content text-center">

                                                    <div className="modal-header d-flex justify-content-center">
                                                        <p className="heading">Are you sure?</p>
                                                    </div>

                                                    <div className="modal-body">

                                                        <i className="fa fa-times fa-4x animated rotateIn" />

                                                    </div>

                                                    <div className="modal-footer flex-center">
                                                        <a href="userevent.html" className="btn  btn-outline-secondary-modal">Yes</a>
                                                        <a type="button" className="btn  btn-primary-modal waves-effect" data-dismiss="modal">No</a>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                        <nav className="d-flex">
                            <ul className="pagination pg-teal try">

                                <li className="page-item">
                                    <a className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                </li>

                                <li className="page-item active"><a className="page-link">1</a></li>
                                <li className="page-item"><a className="page-link">2</a></li>
                                <li className="page-item"><a className="page-link">3</a></li>
                                <li className="page-item"><a className="page-link">4</a></li>
                                <li className="page-item"><a className="page-link">5</a></li>

                                <li className="page-item">
                                    <a className="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DeleteEvent;
