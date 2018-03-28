import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import SideBar from '../components/SideBar';
import AdminForm from '../components/AdminForm';
import Navbar from '../components/Navbar';

import * as userActions from '../actions/actionCreator';

/**
 * @class AddCenter
 *
 * @description AddCenter component
 *
 * @param {object} event
 *
 * @extends {React.Component}
 */
class AddCenter extends React.Component {
  /**
   * Creates an instance of AddCenter.
   *
   * @param {object} props
   *
   * @memberof AddCenter
   */
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
    /**
     *@method handleSubmit
     *
     * @description handleSubmit
     *
     * @param {object} event
     *
     * @return {object} updated state
     *
     * @memberof AddCenter
     */
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
    /**
     *@method render
     *
     * @description React method render
     *
     * @return {jsx} Jsx representation of the dom
     *
     * @memberof AddCenter
     */
    render() {
      const center = {
        name: this.state.name,
        capacity: this.state.capacity,
        location: this.state.location,
        price: this.state.price,
        state: this.state.state,
        description: this.state.description,
        image: this.state.image,
        isAvailable: this.state.isAvailable,
      };
      return (
        this.state.redirect ?
          <Redirect to ="/manage/center"/> :
          <div>
            <Navbar />
            <div className="space">
              <div className="container">
                <div className="row">
                  <SideBar />
                  <div className="col-md-8">
                    <div className="">
                      <div className="container z-depth-1-half">
                        <h5 className="font-weight-bold teal-text text-center">Add Event Center</h5>
                        <AdminForm
                          handleChange={this.handleChange}
                          handleSubmit={this.handleSubmit}
                          errorStatus={this.state.errorStatus}
                          errorMessage={this.state.errorMessage}
                          name={this.state.name}
                          center={center}
                        />
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

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
function mapDispatchToProps(dispatch) {
  return {
    addCenter: (centerData) => dispatch(userActions.addCenter(centerData))
  };
}

const signReducer = connect(null, mapDispatchToProps)(AddCenter);

export default signReducer;
