import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LoggedInNavbar from '../components/LoggedInNavbar';
import SideBar from '../components/SideBar';
import * as userActions from '../actions/actionCreator';


class UserCenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      centers: [],
      noCenter: false,
      centerid: '',
      fetchingCenter: false
    };
    // this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillMount() {
    this.props.getAllCenters();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, 'center for user');
    if (nextProps.getUserCenters && nextProps.getUserCenters.length > 0) {
      this.setState({
        centers: nextProps.getUserCenters,
        fetchingCenter: false
      });
    } else {
      this.setState({
        fetchingCenter: true,
        noCenter: true
      });
    }
  }

  // handleDelete(event) {
  //   console.log(event, 'handlebutton');
  //   this.setState({
  //     centerid: parseInt(event, 10)
  //   });
  //   this.props.deleteCenter(event);
  // }

  render() {
    const { centers } = this.state;
    return (
      <div>
        <LoggedInNavbar />
        <main>
          <div className="container space">
            <div className="row">
              <SideBar />
              <div className="col-md-8">
                <div className="z-depth-1-half">
                  <div className="container adm z-depth-1-half">
                    <div className="adm ">
                      <br />
                      <h5 className="font-weight-bold white-text text-center mb-3">Event Centers</h5>
                      <hr />
                    </div>
                  </div>
                  <div className="row mb-4">
                    {
                      centers.map((center, key) => (<div className="col-md-4 mb-4" key={center.id}>
                        <div className="card text-center">
                          <img className="img-fluid hoverable" src={center.image} alt="Card image cap" />
                          <div className="card-body">
                            <h4 className="card-title">{center.name}</h4>
                            <p className="card-text">{center.description}</p>
                            <div style={{ textAlign: "center" }}>
                              <button className="btn btn-default btn-sm"><Link to={`/centers/${center.id}/edit`}>Edit</Link></button>
                              {/* <button onClick={() => this.handleDelete(event.id)} className=
                                "btn btn-danger btn-sm">Delete</button> */}
                            </div>
                          </div>
                        </div>
                      </div>))
                    }
                  </div>
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
    getUserCenters: state.centers.foundCenters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCenters: centerData => dispatch(userActions.getAllCenters(centerData)),
    // deleteEvent: eventData => dispatch(userActions.deleteEvent(eventData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);
