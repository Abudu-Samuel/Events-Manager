import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';

import * as userActions from '../actions/actionCreator';

class TrendingCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            centers: [],
            fetchingCenters: false
        };
    }

    componentWillMount() {
        this.props.getAllCenters();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.getCenters[0]) {
            this.setState({ centers: nextProps.getCenters, fetchingCenters: false });
        } else {
            this.setState({ fetchingCenters: true });
        }
    }
    /**
     *
     *
     * @returns
     *
     * @memberOf TrendingCenter
     */
    render() {
        return (
            <div className="container space">
                <Navbar />
                <section id="popular centers">
                    <h2 className="mb-3 font-weight-bold grey-text">Trending Centers</h2>
                    <div className="row mb-4">
                        {
                            this.state.centers.map((center, key) => (<div className="col-md-4 mb-4" key={center.id}>
                                    <div className="card text-center">
                                        <img className="img-fluid hoverable" src={center.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">{center.name}</h4>
                                            <p className="card-text">{center.description}</p>
                                            <Link to="/centerdetails" className="btn btn-mycolor btn-sm">Details</Link>
                                        </div>
                                    </div>
                                </div>))
                        }
                    </div>
                </section>
                <hr className="my-5" />
            </div>
        );
    }
}


function mapStateToProps(state, ownProps) {
    return {
        getCenters: state.centers.foundCenters
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllCenters: (centerData) => dispatch(userActions.getAllCenters(centerData))
    };
}

const TrendingCenters = connect(mapStateToProps, mapDispatchToProps)(TrendingCenter);

export default TrendingCenters;
