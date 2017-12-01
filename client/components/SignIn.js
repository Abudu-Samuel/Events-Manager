import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

import * as actionCreators from '../actions/actionCreator';

/**
 *
 *
 * @class Sigin
 * @extends {React.Component}
 */
class Sigin extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        //setting the initial state of the component
        this.state = {
            username: '',
            password: ''
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        this.props.signIn(this.state);
    }

    /**
     * 
     * 
     * @returns 
     * 
     * @memberOf Sigin
     */
    render() {
        const { data } = this.state;
        return (
            <div>
                <Navbar />
                <div id="intro" className="view hm-black-strong">
                    <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
                        <form onSubmit={this.handleSubmit} className="signup">
                            <h3 className="text-center mt-5 white-text font-weight-bold">Sign In</h3>
                            <div className="md-form">
                                <i className="fa fa-user prefix teal-text" />
                                <input type="text" id="username" name="username" onChange={this.handleChange} className="form-control" />
                                <label className="white-text" htmlFor="orangeForm-name">Username</label>
                            </div>
                            <div className="md-form">
                                <i className="fa fa-lock prefix teal-text" />
                                <input type="password" id="password" name="password" onChange={this.handleChange} className="form-control" />
                                <label className="white-text" htmlFor="orangeForm-pass">Password</label>
                            </div>
                            <div className="text-center mb-2">
                                <button type="submit" className="btn btn-mycolor">SignIn</button>
                            </div>
                            <div className="white-text text-center">
                                <h4>Don't have an account ?
                                    <a href="signup.html" className="btn btn-sm btn-mycolor">Sign Up<i className="fa fa-sign-in ml-1" /></a>
                                </h4>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

/**
 * 
 * 
 * @param {any} state 
 */
const mapStateToProps = (state) => ({
    signupReducer: state.signUp,
});

/**
 * 
 * 
 * @param {any} dispatch 
 */
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);

const signReducer = connect(mapStateToProps, mapDispatchToProps)(Sigin);

export default signReducer;
