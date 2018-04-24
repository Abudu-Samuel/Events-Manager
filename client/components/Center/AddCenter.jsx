import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SideBar from '../common/SideBar';
import AdminForm from '../common/forms/AdminForm';
import Navbar from '../common/Navbar';

import * as userActions from '../../actions/actionCreator';

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
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleUpload = (event) => {
      event.preventDefault();
      const file = event.target.files[0];
      const CLOUDINARY_URL = process.env.CLOUDINARY_URL;
      const CLOUDINARY_UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET;
      const formData = new FormData();
      formData.append('file', file);
      formData.append(process.env.CLOUDINARY_PRESET, CLOUDINARY_UPLOAD_PRESET);

      axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www- form-urlencoded '
        },
        data: formData
      })
        .then((res) => {
          this.setState({
            image: res.data.secure_url
          });
        })
        .catch((err) => {
          console.log(err);
        });
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
      console.log(this.props.addCenter, 'uyt');
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
                          handleUpload={this.handleUpload}
                          errorStatus={this.state.errorStatus}
                          errorMessage={this.state.errorMessage}
                          name={this.state.name}
                          capacity={this.state.capacity}
                          location={this.state.location}
                          price={this.state.price}
                          state={this.state.state}
                          description={this.state.description}
                          image={this.state.image}
                          isAvailable={this.state.isAvailable}
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

AddCenter.propTypes = {
  addCenter: PropTypes.func
};

/**
 * @description Redux connect parameter - mapDispatchToProps
 *
 * @param {function} dispatch
 *
 * @return {object} mapped dispatch
 */
const mapDispatchToProps = (dispatch) => ({
  addCenter: (centerData) => dispatch(userActions.addCenter(centerData))
});

const signReducer = connect(null, mapDispatchToProps)(AddCenter);

export default signReducer;
