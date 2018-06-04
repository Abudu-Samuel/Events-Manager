import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import SideBar from '../common/SideBar';
import AdminForm from '../common/forms/AdminForm';
import Navbar from '../common/Navbar';
import { validateCenter } from '../Utils/Validator';
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
export class AddCenter extends React.Component {
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
      imgPreviewSrc: '',
      isAvailable: false,
      errorStatus: false,
      redirect: false,
      redirectMessage: '',
      errors: {},
      showRedirectMessage: false
    };
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  toggleAvailability = ({ target: { name, value } }) => {
    if (name === 'available') {
      this.setState({
        isAvailable: true
      })
      return;
    }
    this.setState({
      isAvailable: false
    })
    console.log("State", this.state.isAvailable);
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
      }
      );
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
    const validationErrors = validateCenter(this.state).errors;
    if (Object.keys(validationErrors).length > 0) {
      this.setState({ errors: validationErrors });
      return;
    }
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
    console.log("State", this.state.isAvailable);
    return (
      this.state.redirect ?
        <Redirect to="/manage/centers" /> :
        <div>
          <Navbar />
          <div className="space">
            <div className="container space">
              <div className="row">
                <SideBar />
                <div className="col-md-8" style={{ marginTop: 19 }}>
                  <div className="container z-depth-1-half">
                    <div className="container adm z-depth-1-half">
                      <div className="adm ">
                        <br />
                        <h5 className="font-weight-bold white-text text-center">
                          Add Center</h5>
                        <hr />
                      </div>
                    </div>
                    <AdminForm
                      handleChange={this.handleChange}
                      handleSubmit={this.handleSubmit}
                      handleUpload={this.handleUpload}
                      toggleAvailability={this.toggleAvailability}
                      errorStatus={this.state.errorStatus}
                      errorMessage={this.state.errorMessage}
                      errors={this.state.errors}
                      name={this.state.name}
                      capacity={this.state.capacity}
                      location={this.state.location}
                      price={this.state.price}
                      state={this.state.state}
                      imgPreviewSrc={this.state.imgPreviewSrc}
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
const mapDispatchToProps = (dispatch) => ({
  addCenter: (centerData) => dispatch(userActions.addCenter(centerData))
});

const signReducer = connect(null, mapDispatchToProps)(AddCenter);

export default signReducer;
