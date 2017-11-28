import React from 'react';
import Navbar from '../containers/Navbar';
import Footer from '../containers/Footer';
import Body from '../containers/Body';
import TrendingCenter from '../containers/TrendingCenters';
import PopularCenter from '../containers/PopularCenter';
import Gallery from '../containers/Gallery';
import ContactUs from '../containers/ContactUs';
import SignUp from '../containers/Signup';
import SignIn from '../containers/SignIn';
import Allevents from '../containers/Allevents';
import AddEvent from '../containers/AddEvent';
import EditEvent from '../containers/EditEvent';
import DeleteEvent from '../containers/DeleteEvent';
import UserEvent from '../containers/UserEvent';
import EventDetails from '../containers/EventDetails';
import AddCenter from '../containers/AddCenter';


/**
 * Renders components to the page
 * @returns {function} App
 */
const App = () => (
    <div>
        <Navbar />
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <UserEvent /> */}
        <AddCenter />
        {/* <EventDetails /> */}
        {/* <DeleteEvent /> */}
        {/* <EditEvent /> */}
        {/* <AddEvent /> */}
        {/* <Allevents /> */}
        {/* <Body /> */}
        {/* <TrendingCenter /> */}
        {/* <PopularCenter /> */}
        {/* <Gallery /> */}
        {/* <ContactUs /> */}
        <Footer />
    </div>
);

export default App;
