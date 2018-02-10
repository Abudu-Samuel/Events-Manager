import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const TrendingCenter = ({
    centers
}) => (
            <div className="container space">
                <Navbar />
                <section id="popular centers">
                    <h2 className="mb-3 font-weight-bold grey-text">Trending Centers</h2>
                    <div className="row mb-4">
                        {
                            centers.map((center, key) => (<div className="col-md-4 mb-4" key={center.id}>
                                    <div className="card text-center">
                                        <img className="img-fluid hoverable" src={center.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">{center.name}</h4>
                                            <p className="card-text">{center.description}</p>
                                            <Link to="/centerdetails" className="btn btn-mycolor btn-sm">Details</Link>
                                        </div>
                                    </div>
                                </div>))
                        }
                    </div>
                </section>
                <hr className="my-5" />
            </div>
        );

export default TrendingCenter;
