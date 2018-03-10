import React from 'react';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import EventInfo from './EventInfo';
import * as userActions from '../actions/actionCreator';

/**
 *
 *
 * @class EventDetails
 * @extends {React.Component}
 */
class EventDetails extends React.Component {
  /**
   * Creates an instance of EventDetails.
   * @param {any} props
   * @memberof EventDetails
   */
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      event: [],
      noEvent: false,
      fetchingEvent: false
    };
  }

  /**
   *
   *
   * @memberof EventDetails
   */
  componentWillMount() {
    this.props.singleEvent(this.props.match.params.eventId);
  }

  /**
   *
   *
   * @param {any} nextProps
   * @memberof EventDetails
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.getSingleEvent) {
      this.setState({ event: nextProps.getSingleEvent, fetchingEvent: false });
    } else {
      this.setState({ fetchingEvent: true });
    }
  }
  /**
   *
   *
   * @returns
   * @memberof EventDetails
   */
  render() {
    return (
      <div>
        <Navbar />
        <EventInfo
          event={this.state.event}
          noEvent={this.state.noEvent}
        />
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
    getSingleEvent: state.events.event
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
    singleEvent: eventData => dispatch(userActions.singleEvent(eventData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
