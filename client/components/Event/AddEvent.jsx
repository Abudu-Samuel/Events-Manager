import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';
import Form from '../common/forms/Form';
import { validateEvent } from '../Utils/Validator';

import * as userActions from '../../actions/actionCreator';

/**
 *
 *
 * @class AddEvent
 * @extends {React.Component}
 */
class AddEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      description: '',
      type: '',
      image: '',
      imgPreviewSrc: '',
      errorStatus: false,
      errors: {},
      redirect: false,
      editing: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    let imgPreview = document.getElementById('img-preview');
    let imgPreviewSrc = imgPreview.src
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/leumas/upload';
    const CLOUDINARY_UPLOAD_PRESET = 'cf3etily';
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

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
          image: res.data.secure_url,
          imgPreviewSrc: res.data.secure_url
        });
      })
      .catch((err) => {
        throw err
      });
  }

  handleSubmit = event => {
    event.preventDefault();
    const validationErrors = validateEvent(this.state).errors;
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
    this.setState({
      errorMessage: '',
      errorStatus: false
    });
    this.props.addEvent({ ...this.state, centerId: this.props.match.params.centerId })
      .then(() => {
        this.setState({
          errorStatus: false,
          errorMessage: ''
        });
        setTimeout(() => {
          this.setState({
            redirect: true
          });
        }, 1000);
      })
      .catch((error) => {
        this.setState({
          errorMessage: error.response.data.message,
          errorStatus: true
        });
      });
  }

  render() {
    return (
      this.state.redirect ?
        <Redirect to={`/centers/${this.props.match.params.centerId}`} /> :
        <div className="space">
          <Navbar />
          <div className="container add">
            <section>
              <h4 className="font-weight-bold text-center">Create An Event</h4>
            </section>
            <section>
              <div className="container">
                <Form
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                  handleUpload={this.handleUpload}
                  errorStatus={this.state.errorStatus}
                  errors={this.state.errors}
                  errorMessage={this.state.errorMessage}
                  editing={this.state.editing}
                  title={this.state.title}
                  date={this.state.date}
                  description={this.state.description}
                  type={this.state.type}
                  image={this.state.image}
                  imgPreviewSrc={this.state.imgPreviewSrc}
                />
              </div>
            </section>
          </div>
          <Footer />
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
    addEvent: (eventData) => dispatch(userActions.addEvent(eventData))
  };
}

export default connect(null, mapDispatchToProps)(AddEvent);
