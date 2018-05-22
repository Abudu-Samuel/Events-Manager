import React from 'react';
import ReactPaginate from 'react-paginate';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';
import CenterInfo from '../Center/CenterInfo';
import * as userActions from '../../actions/actionCreator';

/**
 *
 *
 * @class CenterDetails
 * @extends {React.Component}
 */
class CenterDetails extends React.Component {
  /**
   * Creates an instance of CenterDetails.
   * @param {any} props
   * @memberof CenterDetails
   */
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      center: [],
      upcomingEventsData: {
        message: '',
        pagination: {},
        upcomingEvent: []
      },
      noEvent: false,
      fetchingCenter: false
    };
    this.eventPaginate = this.eventPaginate.bind(this);
  }
  /**
   *
   *@description kkk
   *
   * @memberof CenterDetails
   *
   * @return {object} new afdfdfad
   */
  componentDidMount() {
    const { centerId } = this.props.match.params;
    this.props.singleCenter(centerId);
    this.props.slatedEvent(centerId, 1);
  }

  /**
   *
   *
   * @param {any} nextProps
   * @memberof CenterDetails
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.getSingleCenter) {
      this.setState({ center: nextProps.getSingleCenter, fetchingCenter: false });
    } else {
      this.setState({ fetchingCenter: true });
    }
    if (nextProps.getSlatedEvents && nextProps.getSlatedEvents.upcomingEvent.length > 0) {
      this.setState({ upcomingEventsData: nextProps.getSlatedEvents, fetchingCenter: false, noEvent: false });
    } else {
      this.setState({ fetchingCenter: true, noEvent: true });
    }
  }

  eventPaginate(pageData) {
    const nextEventPage = pageData.selected + 1;
    this.props.getSlatedEvents(nextEventPage);
  }

  /**
   *
   *
   * @returns
   * @memberof CenterDetails
   */
  render() {
    const { center, upcomingEventsData, noEvent } = this.state;
    return (
      <div className="space">
        <Navbar />
        <CenterInfo
          center={center}
          upcomingEventsData={upcomingEventsData}
          noEvent={noEvent}
        />{
          noEvent ? <div className="space text-center">
            <i className="fa fa-exclamation-triangle no-event" />
            <h5 className="font-weight-bold mb-5">No event allocated to this center,
              Click <strong><Link to={`/center/${center.id}/addevent`} className="add-event">Here</Link></strong> to book a center
            </h5>
          </div> :
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel={<a href="">...</a>}
              breakClassName="page-link"
              onPageChange={this.eventPaginate}
              pageCount={Number(this.props.eventPage)}
              containerClassName="pagination pagination-lg custom-pagination"
              pageLinkClassName="page-link"
              nextLinkClassName="page-link"
              previousLinkClassName="page-link"
              disabledClassName="disabled"
              pageClassName="page-item"
              previousClassName="page-item"
              nextClassName="page-item"
              activeClassName="active"
              subContainerClassName="pages pagination"
            />
        }


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
const mapStateToProps = state => (console.log(state.events.upcomingEvent, 'tetettetteetet'), {
  getSingleCenter: state.centers.center,
  getSlatedEvents: state.events.upcomingEventsData,
  eventPage: state.events.eventPage
});

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
const mapDispatchToProps = dispatch => ({
  singleCenter: centerData => dispatch(userActions.singleCenter(centerData)),
  slatedEvent: (eventId, page) => dispatch(userActions.slatedEvent(eventId, page))
});

export default connect(mapStateToProps, mapDispatchToProps)(CenterDetails);

