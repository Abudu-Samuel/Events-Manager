import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoggedInNavbar from '../common/LoggedInNavbar';
import Form from '../common/forms/Form';
import * as userActions from '../../actions/actionCreator';


class EditEvent extends React.Component {
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
  this.setState({
    errorMessage: '',
    errorStatus: false
  });
  this.props.editEvent({ data: this.state, eventId: eventId })
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
      <Redirect to="/manage/events" /> :
      <div className="space">
        <LoggedInNavbar />
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
                date={this.state.date}
                description={this.state.description}
                type={this.state.type}
                image={this.state.image}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}/>
            </div>
          </section>
        </div>
      </div>
  );
}
}

function mapStateToProps(state, ownProps) {
  return {
    getSingleEvent: state.events.event
  };
}

function mapDispatchToProps(dispatch) {
  return {
    singleEvent: eventData => dispatch(userActions.singleEvent(eventData)),
    editEvent: eventData => dispatch(userActions.editEvent(eventData))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEvent);
