import React from 'react';


const EventDetails = ({
  event,
  noEvent
}) => (
  <div>
    <div className="space">
      <div className="container" style={{ marginTop: 99 }}>
        <h2 className="mb-5 font-weight-bold  text-center">{event.title}</h2>
        <div className="row">
          <div className="col-xl-6 mb-4">
            <div className="card prev">
              <img className="img-fluid equal" src={event.image} alt="Card image cap" />
            </div>
          </div>
          <div className="col-xl-6 text-justify">
            <div className="row mb-5">
              <div className="col-xl-4">
                <p className="mb-2 font-weight-bold ">{event.title}</p>
              </div>
              <div className="col-xl-4">
                <p className="font-weight-bold">Type: {event.type}</p>
              </div>
              <div className="col-xl-4">
                <h6 className="font-weight-bold">Date: {event.date}</h6>
              </div>
            </div>
            <p className="text-center font-weight-bold">Description</p>
            <p className="font-weight-bold">{event.description}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EventDetails;
