import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import Body from './Body';
import TrendingCenter from './TrendingCenters';
import PopularCenter from './PopularCenter';
import Gallery from './Gallery';
import ContactUs from './ContactUs';
import Footer from './Footer';
import '../../public/css/style.scss';
import * as userActions from '../actions/actionCreator';
/**
 * creates Landing Page component
 *  @returns {funct} Landing Page
 */
class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            centers: [],
            events: [],
            fetchingCenters: false
        };
    }

    componentDidMount() {
        this.props.getTrendingCenters();
        this.props.getPopularEvents();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.getCenters[0]) {
            this.setState({ centers: nextProps.getCenters, fetchingCenters: false });
        } else {
            this.setState({ fetchingCenters: true });
        }
        if (nextProps.getEvents) {
            this.setState({ events: nextProps.getEvents, fetchingEvents: false });
        } else {
            this.setState({ fetchingEvents: true });
        }
    }


  render() {
    return (
    <div>
          <Navbar />
            <Body />
            <TrendingCenter 
            centers = 
            {this.state.centers} />
            <PopularCenter 
            events = 
            {this.state.events}/>
            <Gallery />
            <ContactUs />
            <Footer />
        </div>
    );
  }
  }

function mapStateToProps(state, ownProps) {
    return {
        getCenters: state.centers.foundCenters,
        getEvents: state.events.foundEvents
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getTrendingCenters: (centerData) => dispatch(userActions.getTrendingCenters(centerData)),
        getPopularEvents: (eventData) => dispatch(userActions.getPopularEvents(eventData))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

