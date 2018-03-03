import React from 'react';
import { connect } from 'react-redux';
import PopularCenter from '../components/PopularCenter';
import TrendingCenters from '../components/TrendingCenters';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as userActions from '../actions/actionCreator';


/**
 * @description Allevents component
 *
 * @class Allevents
 *
 * @extends {React.Component}
 */
class Allevents extends React.Component {
  /**
   * Creates an instance of Allevents.
   *
   * @param {object} props
   *
   * @memberof Allevents
   */
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      centers: [],
      events: [],
      fetchingCenters: false
    };
  }
  /**
   *@method componentWillMount
   *
   * @description React lifecycle hook
   *
   * @return {object} updated state
   *
   * @memberof Allevents
   */
  componentWillMount() {
    this.props.getAllCenters();
    this.props.getAllEvents();
  }

  /**
   * @method componentWillReceiveProps
   *
   * @description React lifecycle hook
   *
   * @param {object} nextProps
   *
   * @return {object} updated state
   *
   * @memberof Allevents
   */
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

  // getCenterId(event) {
  //   event.preventDefault();
  //   console.log(event.target.dataset.centerid);
  // }

  /**
   * @method render
   *
   * @description React method render
   *
   * @return {jsx} Jsx representation of the dom
   *
   * @memberof Allevents
   */
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
              {this.state.centers}
            /* getCenterId = {this.getCenterId} */

          />
        </div>
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
function mapStateToProps(state, ownProps) {
  return {
    getCenters: state.centers.foundCenters,
    getEvents: state.events.foundEvents
  };
}

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    getAllCenters: centerData => dispatch(userActions.getAllCenters(centerData)),
    getAllEvents: eventData => dispatch(userActions.getAllEvents(eventData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Allevents);
