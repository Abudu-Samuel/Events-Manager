import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import LoggedInNavbar from '../common/LoggedInNavbar';
import SideBar from '../common/SideBar';
import * as userActions from '../../actions/actionCreator';


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
    this.onPageDataChange = this.onPageDataChange.bind(this);

  }
  onPageDataChange(pageData) {
    const nextCenterPage = pageData.selected + 1;
    this.props.getAllCenters(nextCenterPage);

  }

  componentWillMount() {
    this.props.getAllCenters(1);
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
                    <ReactPaginate
                      previousLabel="Previous"
                      nextLabel="Next"
                      breakLabel={<a href="">...</a>}
                      breakClassName="page-link"
                      onPageChange={this.onPageDataChange}
                      pageCount={this.props.pages}
                      containerClassName="pagination pagination-lg custom-pagination"
                      pageLinkClassName="page-link"
                      nextLinkClassName="page-link"
                      previousLinkClassName="page-link"
                      disabledClassName="disabled"
                      pageClassName="page-item"
                      previousClassName="page-item"
                      nextClassName="page-item"
                      activeClassName="active"
                      subContainerClassName="pages pagination"
                    />
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
    getUserCenters: state.centers.center,
    pages: state.centers.pages

  };
}

function mapDispatchToProps(dispatch) {
  return {
    getAllCenters: centerData => dispatch(userActions.getAllCenters(centerData)),
    // deleteEvent: eventData => dispatch(userActions.deleteEvent(eventData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCenter);

