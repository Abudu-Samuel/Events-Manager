import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../common/Navbar';

const PopularEvents = ({
  events,
  getEventId
}) => (
  <div className="container space">
    <Navbar />
    <section id="events">
      <h2 className="mb-3 slot text-center font-weight-bold">Latest Events</h2>
      <div className="row mb-4">
        {
          events.event.map((event, key) => (
            <div className="col-md-4 mb-4" key={event.id}>
              <div className="card hoverable text-center">
                <img className="img-fluid hoverable max" src={event.image} alt="Card image cap" />
                <div className="card-body">
                  <h4 className="card-title"> {
                    event.title.split('').length > 17 ? `${event.title.slice(0, 27)}...` : event.title
                  }</h4>
                  <p className="card-text">
                    {
                      event.description.split('').length > 40 ? `${event.description.slice(0, 40)  }...` : event.description
                    }
                  </p>
                  <p className="card-text">Date: {event.date}</p>
                  <button
                    className="btn btn-mycolor btn-sm"
                    data-centerid={event.id}
                    onClick={getEventId}>
                    <Link to={`/events/${event.id}`}>Details</Link>
                  </button>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  </div>
);
export default PopularEvents;
