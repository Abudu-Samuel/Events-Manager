import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Navbar from '../common/Navbar';
import Body from '../common/Body';
import TrendingCenter from '../Center/TrendingCenters';
import PopularCenter from '../Event/PopularCenter';
import Footer from '../common/Footer';
import '../../../public/css/style.scss';
import * as userActions from '../../actions/actionCreator';

/**
 * @description LandingPage component
 *
 * @class LandingPage
 *
 * @extends {React.Component}
 */
class LandingPage extends React.Component {
  /**
     * Creates an instance of LandingPage.
     *
     * @param {any} props
     *
     * @memberof LandingPage
     */
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      centers: {
        center: []
      },
      events: {
        event: []
      },
      centerid: '',
      eventid: '',
      errorMessage: '',
      fetchingCenters: false,
    };
    this.getCenterId = this.getCenterId.bind(this);
    this.getEventId = this.getEventId.bind(this);
  }
  /**
   * @method componentDidMount
   *
   * @memberof LandingPage
   *
   * @description React lifecycle hook
   *
   * @return {object} updated state
   */
  componentDidMount() {
    this.props.getTrendingCenters();
    this.props.getPopularEvents();
  }

  /**
   * @method componentWillReceiveProps
   *
   * @param {object} nextProps
   *
   * @description React lifecycle hook
   *
   * @memberof LandingPage
   *
   * @return {object} updated state
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.getCenters) {
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

  /**
   * @method getCenterId
   *
   * @description retrieve Id of a center
   *
   * @param {object} event
   *
   * @return {object} updated state with center Id
   *
   * @memberof LandingPage
   */
  getCenterId(event) {
    event.preventDefault();
    this.setState({
      centerid: parseInt(event.target.dataset.centerid, 10)
    });
  }

  /**
   * @method getEventId
   *
   * @description retrieve Id of an event
   *
   * @param {object} event
   *
   * @return {object} updated state with center Id
   *
   * @memberof LandingPage
   */
  getEventId(event) {
    event.preventDefault();
    this.setState({
      eventid: parseInt(event.target.dataset.centerid, 10)
    });
  }

  /**
   * @method render
   *
   * @description React method render
   *
   * @return {jsx} Jsx representation of the dom
   *
   * @memberof LandingPage
   */


  render() {
    return (
      <div>
        <Navbar/>
        <Body />
        <TrendingCenter
          centers = {this.state.centers}
          getCenterId = {this.getCenterId}
          centerid = {this.state.centerid}/>
        <PopularCenter
          events = {this.state.events}
          getEventId = {this.getEventId}
          eventid = {this.eventid}/>
        <Footer />
      </div>
    );
  }
}

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} state
 *
 * @param {function} ownProps
 *
 * @return {object} mapped dispatch
 */
function mapStateToProps(state) {
  return {
    getCenters: state.centers.centers,
    getEvents: state.events.events
  };
}

/**
 *@description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    getTrendingCenters: centerData => dispatch(userActions.getTrendingCenters(centerData)),
    getPopularEvents: eventData => dispatch(userActions.getPopularEvents(eventData)),
    // singleCenter: (centerID) => dispatch(userActions.singleCenter(centerID))

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
