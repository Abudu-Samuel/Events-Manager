import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navbar from './Navbar';

import * as userActions from '../actions/actionCreator';

class PopularEvent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            events: [],
            fetchingEvents: false
        };
    }
    componentWillMount() {
        this.props.getAllEvents();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.getEvents[0]) {
            this.setState({ events: nextProps.getEvents, fetchingEvents: false });
        } else {
            this.setState({ fetchingEvents: true });
        }
    }
    showEventDetails = () => {
        console.log('coming from the component')
        this.props.getSingleEvent();
        console.log('the component5 baba', userActions.getSingleEvent)
    }
    render() {
        return (
            <div className="container space">
                <Navbar />
                <section id="events">
                    <h2 className="mb-3 font-weight-bold grey-text">Popular Events</h2>
                    <div className="row mb-4">
                        {
                            this.state.events.map((event, key) => (
                                <div className="col-md-4 mb-4" key={event.id}>
                                    <div className="card text-center">
                                        <img className="img-fluid hoverable" src={event.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h4 className="card-title">{event.title}</h4>
                                            <p className="card-text">{event.description}</p>
                                            <p className="card-text">Date: {event.date}</p>
                                            <button onClick={this.showEventDetails} className="btn btn-mycolor btn-sm">Details</button>
                                            {/* <Link to="/eventdetails" className="usghjuo" onClick={this.showEventDetails} className="btn btn-mycolor btn-sm">Details</Link> */}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </section>
                <hr className="my-5" />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        getEvents: state.events.foundEvents
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getAllEvents: (eventData) => dispatch(userActions.getAllEvents(eventData)),
        getSingleEvent: (eventData) => dispatch(userActions.getSingleEvent(eventData))
    };
}

const PopularEvents = connect(mapStateToProps, mapDispatchToProps)(PopularEvent);

export default PopularEvents;
