import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * creates Navbar component
 * @returns {funct} Popular Center
 */
const CenterInfo = ({
  center,
  upcomingEventsData,
  getEventId,
}) => (
  <div className="container-fluid">
    <div>
      <section>
        <div className="row" style={{ marginTop: 99 }}>
          <div className="col-xl-6 mb-4">
            <img className="img-fluid" src={center.image} />
          </div>
          <div className="col-xl-6 text-center">
            <h4 className="mb-2 text-center font-weight-bold"><strong>
              {center.name}</strong></h4>
            <h5 className="text-center">
              {
                center.isAvailable ?
                  <div> <i className="fa fa-bolt indigo-text mr-2 fa-1x" />
                       Available
                  </div>
                  :
                  <div><i className="fa fa-close mr-2 fa-1x red-text"
                    aria-hidden="true" /> Not Avaiable</div>
              }
              {
                center.isAvailable ?
                  <Link to={`/center/${center.id}/addevent`}
                    className="btn btn-mycolor btn-sm add" >Book</Link> :
                  <Link to={`/center/${center.id}/addevent`}
                    className="btn disabled btn-mycolor btn-sm">Book</Link>
              }
            </h5>
            <h6><i className="fa fa-map-marker grey-text mr-2 fa-2x" />
              <strong className="mr-3">{center.location}</strong>
              <i className="fa ml-3 fa-group grey-text ml-2 mr-2 fa-2x" />
              <strong>{center.capacity} Guests</strong></h6>
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
                    <p>
                      <img src="img/svg/policeman.svg" alt="" /> Security
                    </p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <img src="img/svg/towel-on-hanger.svg" alt="" />
                           changing-room</p>
                  </div>
                  <div className="col-md-4">
                    <p><img src="img/svg/light-bulb.svg" alt="" /> Lights</p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <img src="img/svg/man-sitting-in-the-bathroom.svg"
                        alt="" /> Rest-room</p>
                  </div>
                  <div className="col-md-4">
                    <p>
                      <img src="img/svg/power-cord.svg" alt="" />
                          Power-supply</p>
                  </div>
                  <div className="col-md-4">
                    <p><img src="img/svg/restaurant-table-and-chairs.svg"
                      alt="" /> Tables & chairs</p>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <button className="btn btn-mycolor btn-sm" type="button"
              data-toggle="collapse"
              data-target="#collapseExample" aria-expanded="false"
              aria-controls="collapseExample">
                  View Booked Dates
            </button>
            <div className="mb-4">
              <div className="collapse" id="collapseExample">
                <div className="">
                  {
                    upcomingEventsData.upcomingEvent.length > 0 ?
                      <table className="table">
                        <thead className="table-color">
                          <tr className="text-white">
                            <th>#</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Type</th>
                          </tr>
                        </thead>
                        {
                          upcomingEventsData.upcomingEvent.map(event => (
                            <tbody key={event.id}>
                              <tr>
                                <th scope="row">{event.id}</th>
                                <td>Aprroved <span className="badge
                                     badge-default"><i className="fa fa-check"
                                    style={{ marginTop: 1, marginBottom: 1 }}
                                    aria-hidden="true" /></span></td>
                                <td>{event.date}</td>
                                <td>{event.type}</td>
                              </tr>
                            </tbody>
                          ))
                        }
                      </table> :
                      <h5 className="mt-3">
                          No Date has been booked for this Center!
                      </h5>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className="my-4" />
      <section>
        <h3 className="mb-3 font-weight-bold text-center">Upcoming Events</h3>
        <div className="container">
          <div className="row" style={{ justifyContent: 'center' }}>
            {
              upcomingEventsData.upcomingEvent.map(event => (
                <div className="col-md-6 mb-4" key={event.id}>
                  <div className="card hoverable text-center">
                    <img className="img-fluid hoverable max"
                      src={event.image} alt="Card image cap" />
                    <div className="card-body">
                      <h4 className="card-title">{event.title}</h4>
                      <p className="card-text">
                        {
                          event.description.split('').length > 20 ?
                            `${event.description.slice(0, 54)}...` :
                            event.description
                        }
                      </p>
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

        </div>
      </section>
    </div>
  </div>
);

CenterInfo.propTypes = {
  center: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  upcomingEventsData: PropTypes.object,
  getEventId: PropTypes.object,
  noCenter: PropTypes.object
};

export default CenterInfo;
