import React from 'react';

const ContacUs = () => (
  <div className="container">
    <section id="contact">
      <h2 className="mb-5 font-weight-bold text-center">Contact Us</h2>
      <div className="row">
        <div className="col-lg-5 col-md-12">
          <form className="p-5">
            <div className="md-form form-sm">
              <i className="fa fa-user prefix teal-text" />
              <input type="text" className="form-control" id="input-1" name="" />
              <label htmlFor="input-1">Your Name</label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-envelope prefix teal-text" />
              <input type="text" className="form-control teal-text" id="input-2" name="" />
              <label htmlFor="input-2">Your Email</label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-tag prefix teal-text" />
              <input type="text" className="form-control" id="input-3" name="" />
              <label htmlFor="input-3">Subject</label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-pencil prefix teal-text" />
              <textarea type="text" className="md-textarea" id="input-4" name="" />
              <label htmlFor="input-4">Your Message</label>
            </div>

            <div className="text-center">
              <button className="btn btn-mycolor">Send<i className="fa fa-paper-plane-o ml-2" /></button>
            </div>
          </form>
        </div>
        <div className="col-lg-7 col-md-12">
          <div className="row text-center">
            <div className="col-md-4 mb-3">
              <p><i className="fa fa-map mr-2 grey-text" />Anthony, NIG</p>
            </div>
            <div className="col-md-4 mb-3">
              <p><i className="fa fa-building mr-2 grey-text" />Mon - Fri, 8:00-22:00</p>
            </div>
            <div className="col-md-4 mb-3">
              <p><i className="fa fa-phone mr-2 grey-text" />+234 6646 453</p>
            </div>
          </div>
          <div id="map-container" className="map-container z-depth-1-half" />
        </div>
      </div>
    </section>
  </div>
);

export default ContacUs;
