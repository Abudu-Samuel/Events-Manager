import React from 'react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';
import CenterInfo from './CenterInfo';
import * as userActions from '../actions/actionCreator';

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
      noCenter: false,
      fetchingCenter: false
    };
  }
  /**
   *
   *@description jkkkk
   *
   * @memberof CenterDetails
   *
   * @return {object} new afdfdfad
   */
  componentWillMount() {
    this.props.singleCenter(this.props.match.params.centerId);
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
  }

  /**
   *
   *
   * @returns
   * @memberof CenterDetails
   */
  render() {
    const { events } = this.state.center;
    return (
      <div className="space">
        <Navbar />
        <CenterInfo
          center={this.state.center}
          events={events}
          noCenter={this.state.noCenter}
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
    getSingleCenter: state.centers.center
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
    singleCenter: centerData => dispatch(userActions.singleCenter(centerData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterDetails);

