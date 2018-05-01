import React from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

import { Link } from 'react-router-dom';
import LoggedInNavbar from '../common/LoggedInNavbar';
import * as userActions from '../../actions/actionCreator';


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
    this.props.userEvents(1);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps, '@@@@@@@');
    if (nextProps.getUserEvents && nextProps.getUserEvents.length > 0) {
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

  handleDelete(event) {
    console.log(event, 'handlebutton');
    this.setState({
      centerid: parseInt(event, 10)
    });
    this.props.deleteEvent(event);
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Poof! Your imaginary file has been deleted!', {
            icon: 'success',
          });
        } else {
          swal('Your imaginary file is safe!');
        }
      });
  }

  render() {
    const { events } = this.state;
    return (
      <div className="space">
        <LoggedInNavbar />
        {
          this.state.noEvent ? <div className="space text-center">
            <i className="fa fa-exclamation-triangle fad" />
            <h5 className="font-weight-bold grey-text">No Event to display. Add to make your Event go live</h5>
          </div> :
            <div className="container">
              <h2 className="mb-3 font-weight-bold grey-text text-center">My Events</h2>
              <div className="row">
                {
                  events.map((event, key) => (

                    <div className="col-xl-4 mb-4" key={event.id}>
                      <div className="card">
                        <img className="img-fluid" src={event.image} alt="Card image cap" />
                        <div className="card-body">
                          <h6 className="grey-text"><i className="fa fa-clock-o grey-text mr-2" /><strong>Starts {event.date} - Ends {event.date}</strong></h6>
                          <h4 className="card-title pt-1 text-center">{event.title}</h4>
                          <h6 className="grey-text" style={{ textAlign: 'center' }}>Created: {event.createdAt.slice(0, 10)}</h6>

                          <div style={{ textAlign: 'center' }}>
                            <button className="btn btn-default btn-sm"><Link to={`/events/${event.id}/edit`}>Edit</Link></button>
                            <button onClick={() => swal.setActionValue(this.handleDelete(event.id))} className=
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
  console.log('>>>>>>>****', state.events.userEvents);
  return {
    getUserEvents: state.events.UserEvents
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userEvents: eventData => dispatch(userActions.userEvents(eventData)),
    deleteEvent: eventData => dispatch(userActions.deleteEvent(eventData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserEvent);
