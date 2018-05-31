import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import * as userActions from '../../actions/actionCreator';

/**
 * @class UserEvent
 *
 * @extends {React.Component}
 */
class UserEvent extends React.Component {
  /**
   * Creates an instance of UserEvent.
   *
   * @param {any} props
   *
   * @memberof UserEvent
   */
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      noEvent: false,
      centerid: '',
      fetchingCenter: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.eventPaginate = this.eventPaginate.bind(this);
  }

  /**
   * @method componentDidMount
   *
   * @description React life cycle hook
   *
   * @returns {object} state
   *
   * @memberof UserEvent
   */
  componentDidMount() {
    this.props.userEvents(1);
  }

  /**
   * @method componentWillReceiveProps
   *
   * @description React life cycle hook
   *
   * @returns {object} updated state
   *
   * @param {nextProps} nextProps
   *
   * @memberof UserEvent
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.getUserEvents && nextProps.getUserEvents.length > 0) {
      this.setState({
        events: nextProps.getUserEvents,
        fetchingCenter: false,
        noEvent: false
      });
    } else {
      this.setState({
        fetchingCenter: true,
        noEvent: true
      });
    }
  }

  /**
   * @description handle pagination for events
   *
   * @returns {object}  paginated page
   *
   * @param {pageData} pageData
   *
   * @memberof Allevents
   */
  eventPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.userEvents(nextCenterPage);
  }

  /**
   * @description handle delete action
   *
   * @returns {string} delete message
   *
   * @param {event} event
   *
   * @memberof UserEvent
   */
  handleDelete(event) {
    this.setState({
      centerid: parseInt(event, 10)
    });
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this Event!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          this.props.deleteEvent(event);
        } else {
          swal({
            icon: 'success',
            text: 'Your Event is safe!'
          });
        }
      });
  }

  /**
  * @method render
   *
   * @description React method render
   *
   * @return {jsx} Jsx representation of the dom
   *
   * @memberof UserEvent
   */
  render() {
    const { events } = this.state;
    return (
      <div className="space">
        {
          this.state.noEvent ? <div className="space text-center">
            <i className="fa fa-exclamation-triangle fad" />
            <h5 className="font-weight-bold">
            No Event to display. Add to make your Event go live</h5>
          </div> :
            <div className="container" style={{ marginTop: 99 }}>
              <h2 className="mt-3 font-weight-bold text-center">My Events</h2>
              <div className="row">
                {
                  events.map(event => (
                    <div className="col-xl-4 mb-4" key={event.id}>
                      <div className="card hoverable">
                        <img className="img-fluid hoverable max"
                          src={event.image} alt="Card image cap" />
                        <div className="card-body">
                          <h6 className=""><i className="fa fa-clock-o mr-2" />
                            <strong>Starts {event.date} - Ends {event.date}
                            </strong></h6>
                          <h4 className="card-title pt-1 text-center">
                            {
                              event.title.split('').length > 17 ?
                                `${event.title.slice(0, 27)}...` : event.title
                            }
                          </h4>
                          <h6 className="" style={{ textAlign: 'center' }}>
                          Created: {event.createdAt.slice(0, 10)}</h6>
                          <div style={{ textAlign: 'center' }}>
                            <button className="btn btn-default btn-sm">
                              <Link to={`/events/${event.id}/edit`}>Edit</Link></button>
                            <button onClick={() => swal.setActionValue(this.handleDelete(event.id))}
                              className=
                                "btn btn-danger btn-sm">Delete</button>
                          </div>
                        </div>
                      </div>
                      <hr className="my-5" />
                    </div>
                  ))
                }
              </div>
            </div>
        }
        {
          this.state.noEvent ? null :
            <ReactPaginate
              previousLabel="Previous"
              nextLabel="Next"
              breakLabel={<a href="">...</a>}
              breakClassName="page-link"
              onPageChange={this.eventPaginate}
              /* eslint-disable */
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

UserEvent.propTypes = {
  userEvents: PropTypes.func,
  getUserEvents: PropTypes.array,
  deleteEvent: PropTypes.func
};

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} state
 *
 * @return {object} mapped dispatch
 */
const mapStateToProps = state => ({
  getUserEvents: state.events.userEvents.event,
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
  userEvents: eventData => dispatch(userActions.userEvents(eventData)),
  deleteEvent: eventData => dispatch(userActions.deleteEvent(eventData))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserEvent);
