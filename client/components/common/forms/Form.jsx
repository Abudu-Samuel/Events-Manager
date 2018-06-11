import React from 'react';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';

const Form = ({
  handleChange,
  handleSubmit,
  errorStatus,
  errorMessage,
  errors,
  loading,
  handleUpload,
  title,
  imgPreviewSrc,
  type,
  date,
  description,
  image,
}) => (

  <form onSubmit={handleSubmit} className="signup add">
    <div className="md-form">
      <i className="fa fa-ticket prefix teal-text" />
      <input type="text" name="title" onChange={handleChange} id="first-name"
        className="form-control title" value={title} />
      <label htmlFor="orangeForm-name">Event Title</label>
      <p className="text-center error-msg">
        {
          errors.title && <span>{errors.title}</span>
        }
      </p>
    </div>
    <div className="md-form">
      <i className="fa fa-clock-o prefix teal-text" />
      <input type="date" name="date" onChange={handleChange} id="username-name"
        className="form-control date" value={date}/>
      <label htmlFor="orangeForm-name">Event Date</label>
      <p className="text-center error-msg">
        {
          errors.date && <span>{errors.date}</span>
        }
      </p>
    </div>
    <div className="md-form">
      <i className="fa fa-clock-o prefix teal-text" />
      <input type="text" name="type" onChange={handleChange} id="ends-name"
        className="form-control type" value={type}/>
      <label htmlFor="orangeForm-name">Event Type</label>
      <p className="text-center error-msg">
        {
          errors.type && <span>{errors.type}</span>
        }
      </p>
    </div>
    <i className="fa fa-camera prefix teal-text"
      style={{ fontSize: 27, marginLeft: 3, marginBottom: 22 }}/>
    <div className="md-form myfile">
      <div className="file-field lab">
        <div className="file-field lab">
          <div className="card prev file-path-wrapper">
            {
              imgPreviewSrc ? <img className="img-fluid hoverable max-event"
                id="img-preview" src={imgPreviewSrc} /> :
                <img className="img-fluid hoverable max-event" id="img-preview"
                  src={image ||
                     'https://res.cloudinary.com/leumas/image/upload/v1526641850/hovg22cucu1lghofxipa.jpg'}/>
            }
          </div>
          <BarLoader
            style={{ width: 390, marginLeft: 45 }}
            color={'#00695c'}
            loading={loading}
          />
        </div>
        <div className="btn btn-mycolor mt-5 ml-3  btn-sm len">
          <input type="file" className="image" name="image" onChange={handleUpload} />
        </div>
        <p className="text-center error-msg">
          {
            errors.image && <span>{errors.image}</span>
          }
        </p>
      </div>
    </div>
    <div className="md-form form-sm">
      <i className="fa fa-pencil prefix teal-text" />
      <textarea type="text" name="description" onChange={handleChange}
        className="md-textarea description" id="input-4" value={description}/>
      <label htmlFor="input-4">Event Description</label>
      <p className="text-center error-msg">
        {
          errors.description && <span>{errors.description}</span>
        }
      </p>
    </div>
    {
      errorStatus ?
        <h5 className="text-center font-weight-bold red-text">
          {errorMessage}</h5> :
        null
    }
    <div className="text-center">
      <button className="btn btn-mycolor edit-event mb-3">Make your event live
        <i className="fa fa-sign-in ml-1" /></button>
    </div>
  </form>
);

Form.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorStatus: PropTypes.bool,
  errorMessage: PropTypes.string,
  errors: PropTypes.object,
  handleUpload: PropTypes.func,
  title: PropTypes.string,
  imgPreviewSrc: PropTypes.string,
  type: PropTypes.string,
  date: PropTypes.string,
  description: PropTypes.string,
};

export default Form;
