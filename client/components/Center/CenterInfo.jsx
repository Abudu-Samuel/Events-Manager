import React from 'react';
import { Link } from 'react-router-dom';

import Event from '../Event/Event';

/**
 * creates Navbar component
 * @returns {funct} Popular Center
 */
const CenterInfo = ({
  center,
  events,
  noCenter
}) => (
  <div className="container-fluid">
    {
      noCenter ?
        <h5>No center info to display</h5> :
        <div>
          <section>
            <div className="row">
              <div className="col-xl-6 mb-4">
                <img className="img-fluid" src={center.image} alt="Card image cap" />
              </div>
              <div className="col-xl-6">
                <h4 className="mb-2 font-weight-bold"><i className="fa fa-bolt indigo-text mr-2 fa-1x" /><strong>{center.name}</strong></h4>
                <h5>Available</h5>
                <Link to={`/center/${center.id}/addevent`} className="btn btn-mycolor btn-sm">Book</Link>
                <h6><i className="fa fa-map-marker grey-text mr-2 fa-2x" /><strong>{center.location}</strong> <i className="fa fa-group grey-text ml-2 mr-2 fa-2x" /><strong>{center.capacity} Guests</strong></h6>
                <p className="text-justify">{center.description}
                </p>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <h6>Facilities</h6>
                  </div>
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-4">
                        <p><img src="img/svg/policeman.svg" alt="" /> Security</p>
                      </div>
                      <div className="col-md-4">
                        <p><img src="img/svg/towel-on-hanger.svg" alt="" /> changing-room</p>
                      </div>
                      <div className="col-md-4">
                        <p><img src="img/svg/light-bulb.svg" alt="" /> Lights</p>
                      </div>
                      <div className="col-md-4">
                        <p><img src="img/svg/man-sitting-in-the-bathroom.svg" alt="" /> Rest-room</p>
                      </div>
                      <div className="col-md-4">
                        <p><img src="img/svg/power-cord.svg" alt="" /> Power-supply</p>
                      </div>
                      <div className="col-md-4">
                        <p><img src="img/svg/restaurant-table-and-chairs.svg" alt="" /> Tables & chairs</p>
                      </div>
                      <div className="col-md-4">
                        <p><img src="img/svg/minisplit.svg" alt="" /> Air-conditioner</p>
                      </div>
                      <div className="col-md-4">
                        <p><img src="img/svg/parked-car.svg" alt="" /> Parking space</p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-md-2">
                    <h6>Charges</h6>
                  </div>
                  <div className="col-md-10">
                    <div className="row">
                      <div className="col-md-6">
                        <h6><strong>Tax</strong></h6>
                        <p>5% VAT and 5% consumption TAX</p>
                      </div>
                      <div className="col-md-6">
                        <h6><strong>Cleaning Fee</strong></h6>
                        <p>inclusive</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <hr className="my-5" />
          <section>
            <h3 className="mb-3 font-weight-bold text-center">Upcoming Events</h3>
            <div className="container">
              {center.events && center.events.map(event => <Event key={event.id} event={event} />)}
            </div>
          </section>
        </div>
    }
  </div>
);

export default CenterInfo;
