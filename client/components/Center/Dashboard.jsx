import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import SideBar from '../common/SideBar';
import Navbar from '../common/Navbar';
import * as userActions from '../../actions/actionCreator';


class Dashboard extends React.Component {
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

  centerPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllCenters(nextCenterPage);
  }

  eventPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllEvents(nextCenterPage);
  }

  getEventId(event) {
    event.preventDefault();
    this.setState({
      eventid: parseInt(event.target.dataset.centerid, 10)
    });
  }
  getCenterId(event) {
    event.preventDefault();
    this.setState({
      centerid: parseInt(event.target.dataset.centerid, 10)
    });
  }

  componentWillMount() {
    this.props.getAllCenters(1);
    this.props.getAllEvents(1);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getCenters) {
      this.setState({ centers: nextProps.getCenters, fetchingCenters: false, loading: true });
    } else {
      this.setState({ fetchingCenters: true });
    }
    if (nextProps.getEvents) {
      this.setState({ events: nextProps.getEvents, fetchingEvents: false, loading: true });
    } else {
      this.setState({ fetchingEvents: true });
    }
  }

  render() {
    return (
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
                      <h5 className="font-weight-bold white-text text-center">Dashboard</h5>
                      <hr />
                    </div>
                  </div>
                  <div className="row">
                    <div className="container">
                      <h5 className="font-weight-bold text-center">Events</h5>
                      <div>
                        {/* <PopularCenter
                  events =
                    {this.state.events}/> */}
                        <section id="events">
                          <div className="row mb-4">
                            {
                              this.state.events.event.map((event, key) => (
                                <div className="col-md-4 mb-4" key={event.id}>
                                  <div className="card hoverable text-center">
                                    <img className="img-fluid hoverable img-view" src={event.image} alt="Card image cap" />
                                    <div className="card-body">
                                      <h4 className="card-title">
                                        {
                                          event.title.split('').length > 17 ? `${event.title.slice(0, 14)  }...` : event.title
                                        }</h4>
                                      <p className="card-text">
                                        {
                                          event.description.split('').length > 25 ? `${event.description.slice(0, 22)  }...` : event.description
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
          this.state.centers.center.map((center, key) => (<div className="col-md-4 mb-4" key={center.id}>
            <div className="card hoverable text-center">
              <img className="img-fluid hoverable img-view" src={center.image} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">
                {
                              center.name.split('').length > 17 ? center.name.slice(0, 14) + '...' : center.name
                            }
                </h4>
                <p className="card-text">
                {
                              center.description.split('').length > 25 ? center.description.slice(0, 22) + '...' : center.description
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
    );
  }
}

function mapStateToProps(state) {
  return {
    getCenters: state.centers.centers,
    getEvents: state.events.events,
    centerPage: state.centers.centerPage,
    eventPage: state.events.eventPage
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCenters: centerData => dispatch(userActions.getAllCenters(centerData)),
    getAllEvents: eventData => dispatch(userActions.getAllEvents(eventData))
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
