import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SideBar from '../common/SideBar';
import Navbar from '../common/Navbar';
import * as userActions from '../../actions/actionCreator';

/**
 * @class Dashboard
 *
 * @description Dashboard component
 *
 * @extends {React.Component}
 */
export class Dashboard extends React.Component {
  /**
   * Creates an instance of Dashboard.
   *
   * @param {props} props
   *
   * @memberof Dashboard
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
      loading: false,
      fetchingCenters: false
    };
    this.centerPaginate = this.centerPaginate.bind(this);
    this.eventPaginate = this.eventPaginate.bind(this);
    this.getEventId = this.getEventId.bind(this);
    this.getCenterId = this.getCenterId.bind(this);
  }

  /**
   * @description React lifecycle hook
   *
   * @returns {object} state
   *
   * @memberof Dashboard
   */
  componentWillMount() {
    this.props.getAllCenters(1);
    this.props.getAllEvents(1);
  }

  /**
   * @description React lifecycle hook
   *
   * @returns {object} updated state
   *
   * @param {nextProps} nextProps
   *
   * @memberof Dashboard
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.getCenters) {
      this.setState({
        centers: nextProps.getCenters,
        fetchingCenters: false,
        loading: true
      });
    } else {
      this.setState({ fetchingCenters: true });
    }
    if (nextProps.getEvents) {
      this.setState({
        events: nextProps.getEvents,
        fetchingEvents: false,
        loading: true
      });
    } else {
      this.setState({ fetchingEvents: true });
    }
  }

  /**
   * @description center pagination page
   *
   * @returns {number} paginated page
   *
   * @param {pageData} pageData
   *
   * @memberof Dashboard
   */
  centerPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllCenters(nextCenterPage);
  }

  /**
   * @description event pagination page
   *
   * @returns {number} paginated page
   *
   * @param {pageData} pageData
   *
   * @memberof Dashboard
   */
  eventPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllEvents(nextCenterPage);
  }

  /**
   * @description retrieve event Id
   *
   * @returns {number} event Id
   *
   * @param {event} event
   *
   * @memberof Dashboard
   */
  getEventId(event) {
    event.preventDefault();
    this.setState({
      eventid: parseInt(event.target.dataset.centerid, 10)
    });
  }

  /**
   * @description retrieve center Id
   *
   * @returns {number} center Id
   *
   * @param {event} event
   *
   * @memberof Dashboard
   */
  getCenterId(event) {
    event.preventDefault();
    this.setState({
      centerid: parseInt(event.target.dataset.centerid, 10)
    });
  }

  /**
   * @description React method
   *
   * @method render
   *
   * @returns  {jsx} Jsx representation of the dom
   *
   * @memberof Dashboard
   */
  render() {
    return (
      <div>
        <Navbar />
        <div className="space">
          <main>
            <div className="container space">
              <div className="row">
                <SideBar />
                <div className="col-md-8" style={{ marginTop: 19 }}>
                  <div className="z-depth-1-half">
                    <div className="container adm z-depth-1-half">
                      <div className="adm ">
                        <br />
                        <h5 className="font-weight-bold white-text text-center">
                      Dashboard</h5>
                        <hr />
                      </div>
                    </div>
                    <div className="row">
                      <div className="container">
                        <h5 className="font-weight-bold text-center">Events</h5>
                        <div>
                          <section id="events">
                            <div className="row mb-4">
                              {
                                this.state.events.event.map(event => (
                                  <div className="col-md-4 mb-4" key={event.id}>
                                    <div className="card hoverable text-center">
                                      <img className="img-fluid hoverable img-view"
                                        src={event.image} />
                                      <div className="card-body">
                                        <h4 className="card-title">
                                          {
                                            event.title.split('').length > 17 ?
                                              `${event.title.slice(0, 14)}...` :
                                              event.title
                                          }</h4>
                                        <p className="card-text">
                                          {
                                            event.description.split('').length > 25 ?
                                              `${event.description.slice(0, 22)}...`
                                              : event.description
                                          }
                                        </p>
                                        <button
                                          className="btn btn-mycolor btn-sm"
                                          data-centerid={event.id}
                                          onClick={this.getEventId}>
                                          <Link to={`/events/${event.id}`}>Details</Link>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                ))
                              }
                            </div>
                          </section>
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
                      </div>
                      <hr className="my-2" />
                      <div>
                        <h5 className="font-weight-bold text-center">Centers</h5>
                        <section id="popular centers">
                          <div className="row mb-4">
                            {
                              this.state.centers.center.map(center =>
                                (<div className="col-md-4 mb-4" key={center.id}>
                                  <div className="card hoverable text-center">
                                    <img className="img-fluid hoverable img-view"
                                      src={center.image} />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        {
                                          center.name.split('').length > 17 ?
                                            `${center.name.slice(0, 14)}...` :
                                            center.name
                                        }
                                      </h4>
                                      <p className="card-text">
                                        {
                                          center.description.split('').length > 25 ?
                                            `${center.description.slice(0, 22)}...` :
                                            center.description
                                        }
                                      </p>
                                      <button
                                        className="btn btn-mycolor btn-sm"
                                        data-centerid={center.id}
                                        onClick={this.getCenterId}>
                                        <Link to={`/centers/${center.id}`}>Details</Link>
                                      </button>
                                    </div>
                                  </div>
                                </div>))
                            }
                          </div>
                        </section>
                        <ReactPaginate
                          previousLabel="Previous"
                          nextLabel="Next"
                          breakLabel={<a href="">...</a>}
                          breakClassName="page-link"
                          onPageChange={this.centerPaginate}
                          pageCount={Number(this.props.centerPage)}
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
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  getAllCenters: PropTypes.func,
  getAllEvents: PropTypes.func,
  getCenters: PropTypes.object,
  getEvents: PropTypes.object
};

/**
 * @description Redux connect parameter - mapStateToProps
 *
 * @param {function} state
 *
 * @return {object} mapped state
 */
const mapStateToProps = state => ({
  getCenters: state.centers.centers,
  getEvents: state.events.events,
  centerPage: state.centers.centerPage,
  eventPage: state.events.eventPage
});

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
export const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCenters: centerData => userActions.getAllCenters(centerData),
  getAllEvents: eventData => userActions.getAllEvents(eventData)
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
