import React from 'react';
import Navbar from './Navbar';
import Body from './Body';
import TrendingCenter from './TrendingCenters';
import PopularCenter from './PopularCenter';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Footer from './Footer';
import '../../public/css/style.scss';

/**
 * creates Landing Page component
 *  @returns {funct} Landing Page
 */
const LandingPage = () => (
    <div>
        <Navbar />
        <Body />
        <TrendingCenter />
        <PopularCenter />
        <Gallery />
        <ContactUs />
        <Footer />
    </div>
);

export default LandingPage;
