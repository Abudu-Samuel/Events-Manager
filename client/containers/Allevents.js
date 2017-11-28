import React from 'react';
import PopularCenter from '../containers/PopularCenter';
import TrendingCenters from '../containers/TrendingCenters';

/**
 * creates Navbar component
 *  @returns {funct} Navbar
 */
const Allevents = () => (
    <div className="space">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-2 font-weight-bold grey-text text-center">Events For You !</h2>
                </div>
            </div>
            <PopularCenter />
            <TrendingCenters />
        </div>
    </div>
);

export default Allevents;

