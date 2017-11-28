import React from 'react';

/**
 * creates Navbar component
 * @returns {funct} Trending Center
 */
const TrendingCenter = () => (
    <div className="container">
        <section id="popular centers">
            <h2 className="mb-5 font-weight-bold text-center">Trending Centers</h2>
            <div className="row mb-4">
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <img className="img-fluid hoverable" src="https://static.pexels.com/photos/207731/pexels-photo-207731.jpeg" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Hall Of Fame</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="centerdetails.html" className="btn btn-mycolor btn-sm">info</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <img className="img-fluid hoverable" src="https://static.pexels.com/photos/69815/florida-state-university-westcott-building-auditorium-interior-69815.jpeg" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Hall Of Fame</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="centerdetails.html" className="btn btn-mycolor btn-sm">info</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-center">
                        <img className="img-fluid hoverable" src="https://static.pexels.com/photos/260689/pexels-photo-260689.jpeg" alt="Card image cap" />
                        <div className="card-body">
                            <h4 className="card-title">Hall Of Fame</h4>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="centerdetails.html" className="btn btn-mycolor btn-sm">info</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <hr className="my-5" />
    </div>
);

export default TrendingCenter;
