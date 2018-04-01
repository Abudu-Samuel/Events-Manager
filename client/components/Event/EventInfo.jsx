import React from 'react';


const EventDetails = ({
  event,
  noEvent
}) => (
  <div>
    <div className="space">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="mb-5 font-weight-bold grey-text text-center">{event.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-4 mb-4">
            <div className="card">
              <img className="img-fluid" src={event.image} alt="Card image cap" />
              <div className="card-body">
                <p className="grey-text">{event.date} <br /> {event.time}</p>
                <h4 className="card-title pt-1 grey-text text-center">{event.title}</h4>
              </div>
            </div>
          </div>
          <div className="col-xl-8 text-justify">
            <h5 className="mb-2 font-weight-bold grey-text">{event.title}</h5>
            <p className="grey-text">{event.description}
            </p>
            <p className="grey-text">Lorem psused do eiusmod tUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing elit,sed sed adipmod tempor incididu nsectipsum dolor icing elit, sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing elit, sed adipioris nisi nsectetur adir adipisicing elit, sed do eiusmod tempor incididu.
            </p>
            <h6 className="grey-text"><i className="fa fa-map-marker grey-text mr-2 fa-2x" /><strong>Ikeja, Lagos</strong></h6>
            <h6 className="grey-text"><i className="fa fa-clock-o grey-text mr-2 fa-2x" /><strong>Starts {event.date} - Ends {event.date}</strong></h6>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventDetails;
