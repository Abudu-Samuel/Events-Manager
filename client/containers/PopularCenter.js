import React from 'react';

/**
 * creates Navbar component
 * @returns {funct} Popular Center
 */
const PopularCenter = () => (
    <div className="container">
        <section id="events">
            <h2 className="mb-5 font-weight-bold text-center">Polpular Events</h2>
            <div className="row mb-4">
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <img className="img-fluid hoverable" src="https://static.pexels.com/photos/169190/pexels-photo-169190.jpeg" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Coming Of Kings</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="eventdetails.html" className="btn btn-mycolor btn-sm">info</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <img className="img-fluid hoverable" src="https://static.pexels.com/photos/196652/pexels-photo-196652.jpeg" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Coming Of Kings</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="eventdetails.html" className="btn btn-mycolor btn-sm">info</a>
                        </div>

                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <img className="img-fluid hoverable" src="https://static.pexels.com/photos/301987/pexels-photo-301987.jpeg" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Coming Of Kings</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="eventdetails.html" className="btn btn-mycolor btn-sm">info</a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
        <hr className="my-5" />
    </div>
);

export default PopularCenter;