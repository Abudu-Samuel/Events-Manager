import React from 'react';
import { connect } from 'react-redux';
import LoggedInNavbar from '../components/LoggedInNavbar';
import * as userActions from '../actions/actionCreator';


class UserEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      noEvent: false,
      centerid: '',
      fetchingCenter: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillMount() {
    this.props.userEvents();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.getUserEvents && nextProps.getUserEvents > 0) {
      this.setState({
        events: nextProps.getUserEvents,
        fetchingCenter: false
      });
    } else {
      this.setState({ 
        fetchingCenter: true,
        noEvent: true 
      });
    }
  }

  handleDelete(event){
    console.log(event);

    // event.preventDefault();
    this.setState({
      centerid: parseInt(event, 10)
    });
    this.props.deleteEvent(event);
  }

  render() {
    const { events } = this.state;
    return (
      <div className="space">
        <LoggedInNavbar />
        {
          this.state.noEvent ?
            <h5>No center info to display</h5> :
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h2 className="mb-3 font-weight-bold grey-text text-center" style={{ marginLeft: 300, marginTop: 20 }}>My Events</h2>
                </div>
              </div>
              <div className="row">
                {
                  events.map((event, key) => (

                    <div className="col-xl-4 mb-4" key={event.id}>
                      <div className="card">
                        <img className="img-fluid" src={event.image} alt="Card image cap" />
                        <div className="card-body">
                          <h6 className="grey-text" style={{ textAlign: "center" }}><i className="fa fa-clock-o grey-text mr-2" /><strong>Starts {event.date} - Ends {event.date}</strong></h6>
                          <h4 className="card-title pt-1 text-center">{event.title}</h4>
                          <h6 className="grey-text" style={{ textAlign: "center" }}>Created: {event.createdAt.slice(0, 10)}</h6>

                          <div style={{ textAlign: "center" }}>
                            <button className="btn btn-default btn-sm">Edit</button>
                            <button onClick={() => this.handleDelete(event.id)} className=
                              "btn btn-danger btn-sm">Delete</button>
                          </div>
                        </div>
                      </div>
                      <hr className="my-5" />
                    </div>
                  ))
                }
              </div>
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    getUserEvents: state.events.userEvents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userEvents: eventData => dispatch(userActions.userEvents(eventData)),
    deleteEvent: eventData => dispatch(userActions.deleteEvent(eventData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEvent);
