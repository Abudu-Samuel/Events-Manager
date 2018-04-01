import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import LoggedInNavbar from '../common/LoggedInNavbar';
import SideBar from '../common/SideBar';
import AdminForm from '../common/forms/AdminForm';
import * as userActions from '../../actions/actionCreator';

class EditCenter extends React.Component {
  constructor(props) {
    super(props);
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

  componentDidMount() {
    console.log(this.props.match, '1');
    this.props.singleCenter(this.props.match.params.centerId);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.getSingleCenter.image, '#');
    if (nextProps.getSingleCenter) {
      this.setState({
        name: nextProps.getSingleCenter.name,
        centerId: nextProps.getSingleCenter.id,
        capacity: nextProps.getSingleCenter.capacity,
        location: nextProps.getSingleCenter.location,
        price: nextProps.getSingleCenter.price,
        state: nextProps.getSingleCenter.state,
        description: nextProps.getSingleCenter.description,
        image: nextProps.getSingleCenter.image,
        isAvailable: nextProps.getSingleCenter.isAvailable,


      });
    }
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
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
        console.log(res.data.secure_url);
        this.setState({
          image: res.data.secure_url
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

handleSubmit = (event) => {
  console.log(this.props.match, 'tested okay');
  const centerId = this.props.match.params.centerId;
  event.preventDefault();
  this.setState({
    errorMessage: '',
    errorStatus: false
  });
  this.props.editCenter({ data: this.state, centerId: centerId })
    .then(() => {
      this.setState({
        errorStatus: false,
        errorMessage: ''
      });
      setTimeout(() => {
        this.setState({
          redirect: true
        });
      }, 100);
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
      <Redirect to="/manage/center" /> :
      <div>
        <LoggedInNavbar />
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


function mapStateToProps(state, ownProps) {
  return {
    getSingleCenter: state.centers.center
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singleCenter: centerData => dispatch(userActions.singleCenter(centerData)),
    editCenter: centerData => dispatch(userActions.editCenter(centerData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCenter);
