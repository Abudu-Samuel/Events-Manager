import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const PopularEvents = ({
  events
}) => (
    <div className="container space">
        <Navbar />
        <section id="events">
            <h2 className="mb-3 font-weight-bold grey-text">Popular Events</h2>
            <div className="row mb-4">
                {
                    events.map((event, key) => (
                   <div className="col-md-4 mb-4" key={event.id}>
                            <div className="card text-center">
                                <img className="img-fluid hoverable" src={event.image} alt="Card image cap" />
                                <div className="card-body">
                                    <h4 className="card-title">{event.title}</h4>
                                    <p className="card-text">{event.description}</p>
                                    <p className="card-text">Date: {event.date}</p>
                                    {/* <button onClick={this.showEventDetails} className="btn btn-mycolor btn-sm">Details</button> */}
                                    <Link to="/eventdetails" className="btn btn-mycolor btn-sm">Details</Link>
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
export default PopularEvents;