import React from 'react';
import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';
import Body from '../containers/Body';
import TrendingCenter from '../containers/TrendingCenters';
import PopularCenter from '../containers/PopularCenter';
import Gallery from '../containers/Gallery';
import ContactUs from '../containers/ContactUs';

/**
 * Renders components to the page
 * @returns {function} App
 */
const App = () => (
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

export default App;