import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';
import Navbar from '../common/Navbar';
import PopularCenter from '../Event/PopularCenter';
import TrendingCenters from '../Center/TrendingCenters';
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

  /**
   * @method componentWillMount
   *
   * @description React lifecycle hook
   *
   * @return {object} state
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

  /**
   * @description handle pagination for centers
   *
   * @returns {object}  paginated page
   *
   * @param {pageData} pageData
   *
   * @memberof Allevents
   */
  centerPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllCenters(nextCenterPage);
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
    this.props.getAllEvents(nextCenterPage);
  }


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
      <div>
        <Navbar />
        <div className="space">
          <div className="container" style={{ marginTop: 99 }}>
            <h3 className="font-weight-bold">Welcome to Events Manager</h3>
            <div>
              <PopularCenter
                events=
                  {this.state.events} />
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
          <hr className="my-5" />
          <div>
            <TrendingCenters
              centers=
              {this.state.centers}
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
      </div>
    );
  }
}

Allevents.propTypes = {
  getAllCenters: PropTypes.func,
  getAllEvents: PropTypes.func,
  getCenters: PropTypes.object,
  getEvents: PropTypes.object,
};

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} state
 *
 * @return {object} mapped dispatch
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
const mapDispatchToProps = dispatch => ({
  getAllCenters: centerData => dispatch(userActions.getAllCenters(centerData)),
  getAllEvents: eventData => dispatch(userActions.getAllEvents(eventData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Allevents);
