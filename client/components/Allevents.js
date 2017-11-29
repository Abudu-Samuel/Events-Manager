import React from 'react';
import PopularCenter from '../components/PopularCenter';
import TrendingCenters from '../components/TrendingCenters';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

/**
 * creates Navbar component
 *  @returns {funct} Navbar
 */
const Allevents = () => (
    <div className="space">
        <Navbar />
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="mb-2 font-weight-bold grey-text text-center">Events For You !</h2>
                </div>
            </div>
            <PopularCenter />
            <TrendingCenters />
        </div>
        <Footer />
    </div>
);

export default Allevents;

