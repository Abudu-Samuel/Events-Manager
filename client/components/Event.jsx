import React from 'react';

const Event = ({ event }) => ((
  <div className="row">
    <div className="col-xl-4 mb-4">
      <div className="card">
        <img className="img-fluid" src={event.image} alt="Card image cap" />
        <div className="card-body">
          <p className="grey-text">{event.date}</p>
          <h4 className="card-title pt-1 text-center">{event.title}</h4>
        </div>
      </div>
    </div>
    <div className="col-xl-8">
      <h5 className="mb-2 font-weight-bold grey-text">The coming of Kings</h5>
      <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                                      elit, sed adipioris nisi.
      </p>
      <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                                      elit, sed adipim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <p className="grey-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                                      elit, sed adipim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.
      </p>
      <a className="btn btn-default btn-sm">Read More</a>
    </div>
  </div>
));

export default Event;
