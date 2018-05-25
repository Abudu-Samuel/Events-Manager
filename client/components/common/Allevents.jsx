import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { CircleLoader } from 'react-spinners';
import PopularCenter from '../Event/PopularCenter';
import TrendingCenters from '../Center/TrendingCenters';
import LoggedInNavbar from '../common/LoggedInNavbar';
import Footer from '../common/Footer';
import * as userActions from '../../actions/actionCreator';


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
  }

  centerPaginate(pageData) {
    console.log(pageData)
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllCenters(nextCenterPage);
  }

  eventPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllEvents(nextCenterPage);
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
    this.props.getAllCenters(1);
    this.props.getAllEvents(1);
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

  // getCenterId(event) {
  //   event.preventDefault();
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
        <LoggedInNavbar />
        <div className="container">
          <h2 className="font-weight-bold text-center">Events For You !</h2>
          <CircleLoader
            color={'#123abc'}
            loading={this.state.loading}
          />
          <div>
            <PopularCenter
              events =
                {this.state.events}/>
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
          <hr className="my-5" />
          <div>
            <TrendingCenters
              centers =
                {this.state.centers}

            /* getCenterId = {this.getCenterId} */

            />
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
    getEvents: state.events.events,
    centerPage: state.centers.centerPage,
    eventPage: state.events.eventPage
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
