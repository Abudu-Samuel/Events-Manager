import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import axios from 'axios';
import Form from '../common/forms/Form';
import { validateEvent } from '../Utils/Validator';
import Navbar from '../common/Navbar';
import * as userActions from '../../actions/actionCreator';

export class EditEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      date: '',
      description: '',
      type: '',
      image: '',
      errorStatus: false,
      redirect: false,
      editing: false,
      loading: false,
      imgPreviewSrc: '',
      errors: {},
      errorMessage: '',
      centerId: ''
    };
  }

  componentDidMount() {
    this.props.singleEvent(this.props.match.params.eventId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getSingleEvent) {
      this.setState({
        title: nextProps.getSingleEvent.event.title,
        centerId: nextProps.getSingleEvent.event.centerId,
        date: nextProps.getSingleEvent.event.date,
        description: nextProps.getSingleEvent.event.description,
        type: nextProps.getSingleEvent.event.type,
        image: nextProps.getSingleEvent.event.image,
      });
    }
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

handleSubmit = (event) => {
  const eventId = this.props.match.params.eventId;
  event.preventDefault();
  const validationErrors = validateEvent(this.state).errors;
  if (Object.keys(validationErrors).length > 0) {
    this.setState({ errors: validationErrors });
    return;
  }
  this.setState({
    errorMessage: '',
    errorStatus: false,
  });
  this.props.editEvent({ data: this.state, eventId: eventId })
    .then(() => {
      this.setState({
        errorStatus: false,
        errorMessage: '',
        redirect: true
      });
    })
    .catch((error) => {
      this.setState({
        errorMessage: error.response.data.message,
        errorStatus: true
      });
    });
}

handleUpload = (event) => {
  event.preventDefault();
  const file = event.target.files[0];
  let imgPreview = document.getElementById('img-preview') || { src: '' };
  let imgPreviewSrc = imgPreview.src
  const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/leumas/upload';
  const CLOUDINARY_UPLOAD_PRESET = 'cf3etily';
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
  this.setState({
    loading: true
  })

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
        imgPreviewSrc: res.data.secure_url,
        loading: false
      });
    })
    .catch((err) => {
      throw err
    });
}

render() {
  return (
    this.state.redirect ?
      <Redirect to="/manage/events" /> :
      <div className="space">
      <Navbar /> 
        <div className="container add">
          <section>
            <h4 className="font-weight-bold text-center">Edit Event</h4>
          </section>
          <section>
            <div className="container">
              <Form
                editing={this.state.editing}
                errorStatus={this.state.errorStatus}
                errorMessage={this.state.errorMessage}
                title={this.state.title}
                errors={this.state.errors}
                handleUpload={this.handleUpload}
                date={this.state.date}
                loading={this.state.loading}
                description={this.state.description}
                type={this.state.type}
                image={this.state.image}
                imgPreviewSrc={this.state.imgPreviewSrc}                
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
            </div>
          </section>
        </div>
      </div>
  );
}
}

const mapStateToProps = state => {
  return {
    getSingleEvent: state.events.event
  };
}

export const mapDispatchToProps = dispatch => bindActionCreators({
  singleEvent: eventData => userActions.singleEvent(eventData),
  editEvent: eventData => userActions.editEvent(eventData)
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
