import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actionCreators from '../actions/actionCreator';


/**
 *
 *
 * @class TrendingCenter
 * @extends {React.Component}
 */
class TrendingCenter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
    }

    componentWillMount() {
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
            <div className="container">
                <section id="popular centers">
                    <h2 className="mb-3 font-weight-bold grey-text">Trending Centers</h2>
                    <div className="row mb-4">
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="img-fluid hoverable" src="https://static.pexels.com/photos/207731/pexels-photo-207731.jpeg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">Hall Of Fame</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/centerdetails" className="btn btn-mycolor btn-sm">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="img-fluid hoverable" src="https://static.pexels.com/photos/69815/florida-state-university-westcott-building-auditorium-interior-69815.jpeg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">Hall Of Fame</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/centerdetails" className="btn btn-mycolor btn-sm">Details</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div className="card text-center">
                                <img className="img-fluid hoverable" src="https://static.pexels.com/photos/260689/pexels-photo-260689.jpeg" alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">Hall Of Fame</h4>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <Link to="/centerdetails" className="btn btn-mycolor btn-sm">Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="my-5" />
            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    centerReducer: state.center
});

/**
 *
 *
 * @param {any} dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const TrendingCenters = connect(mapStateToProps, mapDispatchToProps)(TrendingCenter);

export default TrendingCenters;
