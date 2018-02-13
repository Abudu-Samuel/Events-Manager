import React from 'react';

const Body = () => (
  <div>
    <div id="intro" className="view hm-black-strong">
      <div className="container-fluid full-bg-img d-flex align-items-center justify-content-center">
        <div className="row d-flex justify-content-center">
          <div className="col-md-12 text-center">
            <ul>
              <li>
                <h1 className="h1-responsive wow fadeInUp title white-text mr-5 mb-3"><strong>Hey, wanna book an event center ?</strong></h1>
                <h3 className="h3-responsive wow fadeInUp white-text mr-5 mb-4">Find your next experience</h3>
              </li>
              <li>
                <div className="row wow fadeIn mr-2" data-wow-delay="0.4s">
                  <div className="col-md-3">
                    <div className="md-form">
                      <input type="text" id="form1" className="form-control validate white-text" />
                      <label htmlFor="form1">Location</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="md-form">
                      <input type="text" id="form2" className="form-control validate white-text" />
                      <label htmlFor="form2">Number of Guests</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="md-form">
                      <input type="text" id="form3" className="form-control validate white-text" />
                      <label htmlFor="form3">Type of Event</label>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="md-form">
                      <button className="btn btn-lg btn-mycolor">Search</button>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <main className="mt-5">
      <div className="container">
        <section id="how it works" className="text-center">
          <h2 className="mb-5 font-weight-bold text-center">How it works</h2>
          <div className="row d-flex justify-content-center mb-4">
            <div className="col-md-4">
              <i className="fa fa-search fa-4x orange-text mb-2" />
              <h4 className="font-weight-bold">Search</h4>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa fa-bolt fa-4x indigo-text mb-2" />
              <h4 className="font-weight-bold">Availability</h4>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa fa-check fa-4x blue-text mb-2" />
              <h4 className="font-weight-bold">Book</h4>
              <p className="grey-text">Lorem ipsum dolor sit amet, consectetur</p>
            </div>
          </div>
        </section>
        <hr className="my-5" />
      </div>
    </main>
  </div>
);

export default Body;
