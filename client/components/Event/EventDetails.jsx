import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { BounceLoader } from 'react-spinners';
import Navbar from '../common/Navbar';
import EventInfo from './EventInfo';
import * as userActions from '../../actions/actionCreator';

/**
 * @class EventDetails
 *
 * @extends {React.Component}
 */
export class EventDetails extends React.Component {
  /**
   * Creates an instance of EventDetails.
   *
   * @param {any} props
   *
   * @memberof EventDetails
   */
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      event: {},
      noEvent: false,
      fetchingEvent: false,
      loading: true,
      fetchingCenter: false
    };
  }

  /**
   * @method componentDidMount
   *
   * @description React life cycle
   *
   * @returns {object} state
   *
   * @memberof EventDetails
   */
  componentDidMount() {
    this.props.singleEvent(this.props.match.params.eventId);
  }

  /**
   * @description React life cycle
   *
   * @returns {object} updated state
   *
   * @param {nextProps} nextProps
   *
   * @memberof EventDetails
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.event) {
      this.setState({ event: nextProps.event.event, fetchingEvent: false, loading: false });
    } else {
      this.setState({ fetchingEvent: true });
    }
  }

  /**
   * @method render
   *
   * @description React method render
   *
   * @returns {jsx} Jsx representation of the dom
   *
   * @memberof EventDetails
   */
  render() {
    return (
      <div>
        <Navbar />
        <BounceLoader
          color={'#123abc'}
          loading={this.state.loading}
        />
        <EventInfo
          event={this.state.event}
          noEvent={this.state.noEvent}
        />
      </div>
    );
  }
}

EventDetails.propTypes = {
  singleEvent: PropTypes.func,
  event: PropTypes.object,
  match: PropTypes.object
};

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} state
 *
 * @param {function} ownProps
 *
 * @return {object} mapped dispatch
 */
const mapStateToProps = state => ({
  event: state.events.event,
  getSingleCenter: state.centers.center
});

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
export const mapDispatchToProps = dispatch => bindActionCreators({
  singleEvent: eventData => userActions.singleEvent(eventData),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
