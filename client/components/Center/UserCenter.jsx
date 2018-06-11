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
 * @class UserCenter
 *
 * @description UserCenter component
 *
 * @extends {React.Component}
 */
export class UserCenter extends React.Component {
  /**
   * Creates an instance of UserCenter.
   *
   * @param {props} props
   *
   * @memberof UserCenter
   */
  constructor(props) {
    super(props);
    this.state = {
      centers: {
        center: []
      },
      noCenter: false,
      centerid: '',
      fetchingCenter: false
    };
    this.centerPaginate = this.centerPaginate.bind(this);
  }

  /**
   * @description react lifecycle hook
   *
   * @method componentWillMount
   *
   * @returns {new} state
   *
   * @memberof UserCenter
   */
  componentWillMount() {
    this.props.getAllCenters(1);
  }

  /**
   * @description react lifecycle hook
   *
   * @method componentWillMount
   *
   * @param {nextProps} nextProps
   *
   * @returns {new} updated state
   *
   * @memberof UserCenter
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps.getUserCenters) {
      this.setState({
        centers: nextProps.getUserCenters,
        fetchingCenter: false
      });
    } else {
      this.setState({
        fetchingCenter: true,
        noCenter: true
      });
    }
  }

  /**
 * @description handle pagination for center
 *
 * @returns {object}  paginated page
 *
 * @param {pageData} pageData
 *
 * @memberof UserCenter
 */
  centerPaginate(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllCenters(nextCenterPage);
  }

  /**
  *@method render
    *
    * @returns {jsx} Jsx respresentation of the dom
    *
   * @memberof UserCenter
   */
  render() {
    const { centers } = this.state;
    return (
      <div>
        <Navbar />
        <main>
          <div className="container space">
            <div className="row">
              <SideBar />
              <div className="col-md-8" style={{ marginTop: 19 }}>
                <div className="z-depth-1-half">
                  <div className="container adm z-depth-1-half">
                    <div className="adm ">
                      <br />
                      <h5 className="font-weight-bold white-text text-center mb-3">
                      Event Centers</h5>
                      <hr />
                    </div>
                  </div>
                  <div className="row mb-4">
                    {
                      centers.center.map(center => (<div className="col-md-4 mb-4"
                        key={center.id}>
                        <div className="card hoverable text-center">
                          <img className="img-fluid hoverable img-view"
                            src={center.image} />
                          <div className="card-body">
                            <h4 className="card-title">
                              {
                                center.name.split('').length > 17 ?
                                  `${center.name.slice(0, 14)}...` : center.name
                              }</h4>
                            <p className="card-text">
                              {
                                center.description.split('').length > 25 ?
                                  `${center.description.slice(0, 22)}...` :
                                  center.description
                              }</p>
                            <div style={{ textAlign: 'center' }}>
                              <button className="btn ec btn-default btn-sm">
                                <Link to={`/centers/${center.id}/edit`}>Edit</Link>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>))
                    }
                  </div>
                  <ReactPaginate
                    previousLabel="Previous"
                    nextLabel="Next"
                    breakLabel={<a href="">...</a>}
                    breakClassName="page-link"
                    onPageChange={this.centerPaginate}
                    /* eslint-disable */
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
        </main>
      </div>
    );
  }
}

UserCenter.propTypes = {
  getAllCenters: PropTypes.func,
  getUserCenters: PropTypes.object
};

const mapStateToProps = state => ({
  getUserCenters: state.centers.centers,
  centerPage: state.centers.centerPage

});

export const mapDispatchToProps = dispatch => bindActionCreators({
  getAllCenters: centerData => userActions.getAllCenters(centerData),
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);

