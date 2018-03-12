import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Navbar from '../components/Navbar';
import * as userActions from '../actions/actionCreator';

class EditCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      centers: [],
      fetchingCenters: false,
    };
  }

  componentDidMount() {
    this.props.getTrendingCenters();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getCenters[0]) {
      this.setState({ centers: nextProps.getCenters, fetchingCenters: false });
    } else {
      this.setState({ fetchingCenters: true });
    }
  }

  render() {
    const centers = this.state.centers;
    return (
      <div>
        <Navbar />
        <main>
          <div className="container space">
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
                      <Link className="btn btn-mycolor btn-block mr-4" to="/addcenter"><i className="fa fa-plus mr-2 white-text" />Add Center</Link>
                    </li>
                    <li className="white-text mb-3">
                      <Link to="/edit/center" className="btn btn-mycolor btn-block mr-4"><i className="fa fa-street-view mr-2 white-text" />View Centers</Link>
                    </li>
                    <li className="white-text mb-3">
                      <a className="btn btn-mycolor btn-block mr-4" href="#"><i className="fa fa-cog mr-2 white-text" />Settings</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-8">
                <div className="z-depth-1-half">
                  <div className="container adm z-depth-1-half">
                    <div className="adm ">
                      <br />
                      <h5 className="font-weight-bold white-text text-center mb-3">Event Centers</h5>
                      <hr />
                    </div>
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Center Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        centers.map((center, key) => (
                          <tr key={center.id}>

                            <th scope="row" >{center.id}</th>
                            <td>{center.name}</td>
                            <td>{center.price}</td>
                            <td><a className="teal-text px-1" role="btn" data-toggle="modal" data-target="#modalContactForm" data-placement="top" title="Edit"><i className="fa fa-pencil" /></a>

                              <div className="modal fade" id="modalContactForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                                <div className="modal-dialog cascading-modal" role="document">

                                  <div className="modal-content">
                                    <div className="modal-header btn-mycolor darken-3 white-text">
                                      <h4 className="title"><i className="fa fa-pencil" /> Edit Center</h4>
                                      <button type="button" className="close waves-effect waves-light" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                      </button>
                                    </div>

                                    <div className="modal-body">
                                      <form className="signup add">
                                        <div className="row">
                                          <div className="col-md-12">
                                            <div className="md-form">
                                              <i className="fa fa-home prefix teal-text" />
                                              <input type="text" placeholder={center.name} id="first-name" className="form-control" />
                                              <label htmlFor="orangeForm-name">Name</label>
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="md-form">
                                              <i className="fa fa-group prefix teal-text" />
                                              <input type="text" placeholder={center.capacity} id="username-name" className="form-control" />
                                              <label htmlFor="orangeForm-name">Capacity</label>
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="md-form">
                                              <i className="fa fa-money prefix teal-text" />
                                              <input type="text" placeholder={center.price} id="df-name" className="form-control" />
                                              <label htmlFor="orangeForm-name">Price</label>
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="md-form">
                                              <i className="fa fa-map-marker
                                                                                                  prefix teal-text" />
                                              <input type="text" placeholder={center.state} id="last-name" className="form-control" />
                                              <label htmlFor="orangeForm-name">State</label>
                                            </div>
                                          </div>
                                          <div className="col-md-6">
                                            <div className="md-form">
                                              <i className="fa fa-map-marker
                                                                              prefix teal-text" />
                                              <input type="text" placeholder={center.location} id="er-name" className="form-control" />
                                              <label htmlFor="orangeForm-name">Address</label>
                                            </div>
                                          </div>
                                          <div className="col-md-12 mb-4">
                                            <div className="md-form form-sm">
                                              <i className="fa fa-pencil prefix teal-text" />
                                              <textarea style={{ height: 1 }} type="text" placeholder={center.description} className="md-textarea text" id="input-5" name="" />
                                              <label htmlFor="input-4">Description</label>
                                            </div>
                                          </div>

                                          <div className="col-md-12">
                                            <div className="md-form myfile-2">
                                              <i className="fa fa-camera-retro prefix teal-text" />
                                              <label className="custom-file">
                                                <input type="file" id="file2" className="custom-file-input" />
                                                <span className="custom-file-control" />
                                              </label>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="text-center mt-1-half">
                                          <button className="btn btn-mycolor">Update <i className="fa fa-send ml-1" /></button>
                                        </div>
                                      </form>
                                    </div>
                                  </div>

                                </div>
                              </div>

                              <a className="red-text px-1" role="btn" data-toggle="modal" data-target="#modalConfirmDelete" data-placement="top" title="Delete"><i className="fa fa-trash" /></a>

                              <div className="modal fade" id="modalConfirmDelete" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-md modal-notify modal-danger" role="document">

                                  <div className="modal-content text-center">

                                    <div className="modal-header d-flex justify-content-center">
                                      <p className="heading">Are you sure?</p>
                                    </div>
                                    <div className="modal-body">

                                      <i className="fa fa-times fa-4x animated rotateIn" />

                                    </div>

                                    <div className="modal-footer flex-center">
                                      <a href="editcenter.html" className="btn  btn-outline-secondary-modal">Yes</a>
                                      <a type="button" className="btn  btn-primary-modal waves-effect" data-dismiss="modal">No</a>
                                    </div>
                                  </div>

                                </div>
                              </div>

                            </td>
                          </tr>
                        ))
                      }

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    getCenters: state.centers.foundCenters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTrendingCenters: (centerData) => dispatch(userActions.getTrendingCenters(centerData)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditCenter);

