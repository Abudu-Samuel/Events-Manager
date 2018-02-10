import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

import * as userActions from '../actions/actionCreator';

class AddCenter extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        //setting the initial state of the component
        this.state = {
            name: '',
            capacity: '',
            location: '',
            price: '',
            state: '',
            description: '',
            image: '',
            isAvailable: '',
            errorStatus: false,
            redirect: false,
            redirectMessage: '',
            showRedirectMessage: false
        };
    }
    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addCenter(this.state)
            .then(() => {
                this.setState({
                    errorMessage: '',
                    errorStatus: false,
                    redirectMessage: 'Redirecting To Dashboard',
                    showRedirectMessage: true
                });
                setTimeout(() => {
                    this.setState({
                        redirect: true
                    });
                }, 2000);
            })
            .catch((error) => {
                this.setState({
                    errorMessage: error.response.data.message,
                    errorStatus: true,
                    showRedirectMessage: false,
                    redirectMessage: ''
                });
            });
    }
    render() {
        return (
            this.state.redirect ?
                <Redirect to ="/dashboard"/> :
                <div>
                    <Navbar />
                    <div className="space">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 adm mb-4">
                                    <div className="col-xl-5 col-md-4 mb-3 try text-center">
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" className="img-fluid mb-3 z-depth-1 rounded-circle" alt="Responsive image" />
                                        <h5 className="font-weight-bold white-text">Admin</h5>
                                    </div>
                                    <h6 className="font-weight-bold white-text text-center">adminuser@gmail.com</h6>
                                    <hr className="font-weight-bold" />
                                    <div className="">
                                        <ul className="mr-6">
                                            <li className="white-text mb-3">
                                                <a className="btn btn-mycolor btn-block mr-2" href="#"><i className="fa fa-dashboard mr-2 white-text" />Dashboard</a>
                                            </li>
                                            <li className="white-text mb-3">
                                                <a className="btn btn-mycolor btn-block mr-4" href="#"><i className="fa fa-user mr-2 white-text" />Profile</a>
                                            </li>
                                            <li className="white-text mb-3">
                                                <a className="btn btn-mycolor btn-block mr-4" href="addcenter.html"><i className="fa fa-plus mr-2 white-text" />Add Center</a>
                                            </li>
                                            <li className="white-text mb-3">
                                                <a className="btn btn-mycolor btn-block mr-4" href="editcenter.html"><i className="fa fa-street-view mr-2 white-text" />View Centers</a>
                                            </li>
                                            <li className="white-text mb-3">
                                                <a className="btn btn-mycolor btn-block mr-4" href="#"><i className="fa fa-cog mr-2 white-text" />Settings</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="">
                                        <div className="container z-depth-1-half">
                                            <h5 className="font-weight-bold teal-text text-center">Add Event Center</h5>
                                            <form onSubmit={this.handleSubmit} className="signup add">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="md-form">
                                                            <i className="fa fa-home prefix teal-text" />
                                                            <input type="text" id="name" name="name" onChange={this.handleChange} className="form-control" />
                                                            <label htmlFor="orangeForm-name">Name</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="md-form">
                                                            <i className="fa fa-map-marker   prefix teal-text" />
                                                            <input type="text" id="state" name="state" onChange={this.handleChange} className="form-control" />
                                                            <label htmlFor="orangeForm-name">State</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="md-form">
                                                            <i className="fa fa-map-marker prefix teal-text" />
                                                            <input type="text" id="location" name="location" onChange={this.handleChange} className="form-control" />
                                                            <label htmlFor="orangeForm-name">Location</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="md-form form-sm">
                                                            <i className="fa fa-pencil prefix teal-text" />
                                                            <textarea type="text" className="md-textarea" id="isAvailable" name="isAvailable" onChange={this.handleChange} />
                                                            <label htmlFor="input-4">Available</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="md-form form-sm">
                                                            <i className="fa fa-pencil prefix teal-text" />
                                                            <textarea type="text" className="md-textarea" id="description" name="description" onChange={this.handleChange} />
                                                            <label htmlFor="input-4">Description</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="md-form">
                                                            <i className="fa fa-group prefix teal-text" />
                                                            <input type="text" id="capacity" className="form-control" name="capacity" onChange={this.handleChange} />
                                                            <label htmlFor="orangeForm-name">Capacity</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="md-form">
                                                            <i className="fa fa-money prefix teal-text" />
                                                            <input type="text" id="image" name="image" className="form-control" onChange={this.handleChange} />
                                                            <label htmlFor="orangeForm-name">Image</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="md-form">
                                                            <i className="fa fa-money prefix teal-text" />
                                                            <input type="text" id="price" name="price" className="form-control" onChange={this.handleChange} />
                                                            <label htmlFor="orangeForm-name">Price</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                {
                                   this.state.errorStatus
                                   ?
                                   <h5 className="text-center font-weight-bold red-text">{this.state.errorMessage}</h5>
                                   : 
                                   null
                                }
                                {
                                   this.state.showRedirectMessage
                                   ?
                                   <h5 className="text-center white-text">{this.state.redirectMessage}</h5>
                                   : 
                                   null
                                }
                                                <div className="text-center">
                                                    <button className="btn btn-mycolor mb-3">Add Center<i className="fa fa-sign-in ml-1" /></button>
                                                </div>
                                            </form>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addCenter: (centerData) => dispatch(userActions.addCenter(centerData))
    };
}

const signReducer = connect(null, mapDispatchToProps)(AddCenter);

export default signReducer;
