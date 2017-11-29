import React from 'react';
import Navbar from '../components/Navbar';

/**
 * creates SignUp component
 * @returns {funct} SignUp
 */
const SignIn = () => (
    <div>
        <Navbar />
        <div id="intro" className="view hm-black-strong">
            <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
                <form className="signup">
                    <h3 className="text-center mt-5 white-text font-weight-bold">Sign In</h3>
                    <div className="md-form">
                        <i className="fa fa-user prefix teal-text" />
                        <input type="text" id="username-name" className="form-control" />
                        <label className="white-text" htmlFor="orangeForm-name">Username</label>
                    </div>
                    <div className="md-form">
                        <i className="fa fa-lock prefix teal-text" />
                        <input type="password" id="orangeForm-pass" className="form-control" />
                        <label className="white-text" htmlFor="orangeForm-pass">Password</label>
                    </div>
                    <div className="text-center mb-2">
                        <a href="allevents.html" className="btn btn-mycolor">Sign In<i className="fa fa-sign-in ml-1" /></a>
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

export default SignIn;
