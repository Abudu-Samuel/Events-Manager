import React from 'react';

const EditEvent = () => (
  <div className="space">
    <div className="container add">
      <section>
        <h4 className="font-weight-bold text-center">Edit Event</h4>
      </section>
      <section>
        <div className="container">
          <form className="signup add">
            <div className="md-form">
              <i className="fa fa-ticket prefix teal-text" />
              <input type="text" id="first-name" placeholder="The Coming of Kings" className="form-control" />
              <label htmlFor="orangeForm-name">Event Title</label>
            </div>
            <div className="md-form">
              <i className="fa fa-map-marker prefix teal-text" />
              <input type="text" placeholder="Anthony, Lagos" id="last-name" className="form-control" />
              <label htmlFor="orangeForm-name">Location</label>
            </div>
            <div className="md-form">
              <i className="fa fa-clock-o prefix teal-text" />
              <input type="text" placeholder="20/11/2014" id="username-name" className="form-control" />
              <label htmlFor="orangeForm-name">Starts</label>
            </div>
            <div className="md-form">
              <i className="fa fa-clock-o prefix teal-text" />
              <input type="text" placeholder="20/11/2014" id="ends-name" className="form-control" />
              <label htmlFor="orangeForm-name">Ends</label>
            </div>
            <div className="md-form myfile">
              <i className="fa fa-camera-retro prefix teal-text" />
              <label className="custom-file">
                <input type="file" id="file2" placeholder="img" className="custom-file-input" />
                <span className="custom-file-control" />
              </label>
            </div>

            <div className="md-form form-sm">
              <i className="fa fa-pencil prefix teal-text" />
              <textarea type="text" className="md-textarea" id="input-4" name="" />
              <label htmlFor="input-4">Event Description</label>
            </div>
            <div className="text-center">
              <button type="button" data-toggle="modal" data-target="#centralModalSuccess" className="btn btn-mycolor">Make your event live<i className="fa fa-sign-in ml-1" /></button>

              <div className="modal fade" id="centralModalSuccess" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-notify modal-success" role="document">

                  <div className="modal-content">

                    <div className="modal-header">
                      <p className="heading lead">Event Editted Successfully</p>

                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true" className="white-text">&times;</span>
                      </button>
                    </div>

                    <div className="modal-body">
                      <div className="text-center">
                        <i className="fa fa-check fa-4x mb-3 animated rotateIn" />
                      </div>
                    </div>

                    <div className="modal-footer justify-content-center">
                      <a type="button" href="userevent.html" className="btn btn-primary-modal">OK</a>
                    </div>
                  </div>

                </div>
              </div>

            </div>

          </form>
        </div>
      </section>
    </div>
  </div>
);

export default EditEvent;
