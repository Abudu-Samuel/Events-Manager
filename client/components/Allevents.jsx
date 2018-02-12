import React from 'react';
import { connect } from 'react-redux';
import PopularCenter from '../components/PopularCenter';
import TrendingCenters from '../components/TrendingCenters';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as userActions from '../actions/actionCreator';
/**
 * creates Navbar component
 *  @returns {funct} Navbar
 */
class Allevents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      centers: [],
      events: [],
      fetchingCenters: false
    };
  }
  componentWillMount() {
    this.props.getAllCenters();
    this.props.getAllEvents();
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
      <div className="space">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="font-weight-bold grey-text text-center">Events For You !</h2>
            </div>
          </div>
          <PopularCenter
            events =
              {this.state.events}/>
          <TrendingCenters
            centers =
              {this.state.centers}/>
        </div>
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
    getAllCenters: centerData => dispatch(userActions.getAllCenters(centerData)),
    getAllEvents: eventData => dispatch(userActions.getAllEvents(eventData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Allevents);
