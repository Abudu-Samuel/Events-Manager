import React from 'react';
import PropTypes from 'prop-types';
import { BarLoader } from 'react-spinners';

const AdminForm = ({
  handleChange,
  handleSubmit,
  errorStatus,
  handleUpload,
  errorMessage,
  name,
  capacity,
  location,
  loading,
  image,
  errors,
  toggleAvailability,
  price,
  state,
  description,
  imgPreviewSrc,
  isAvailable,
}) => (
  <form onSubmit={handleSubmit} className="signup add">
    <div className="row">
      <div className="col-md-12">
        <div className="md-form">
          <i className="fa fa-home prefix teal-text" />
          <input type="text" id="name" name="name" onChange={handleChange}
            className="form-control name" value={name} />
          <label htmlFor="orangeForm-name">Name</label>
          <p className="text-center error-msg">
            {
              errors.name && <span>{errors.name}</span>
            }
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-map-marker   prefix teal-text" />
          <input type="text" id="state" name="state" onChange={handleChange}
            className="form-control state" value={state} />
          <label htmlFor="orangeForm-name">State</label>
          <p className="text-center error-msg">
            {
              errors.state && <span>{errors.state}</span>
            }
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="">
          <p className="grey-text" style={{ marginLeft: 62, marginTop: -14 }}>
          Available</p>
          <div className="form-check form-check-inline">
            <input className="form-check-input available" type="radio" name="available"
              checked={isAvailable}
              onChange={toggleAvailability} />
            <label style={{ marginRight: 40 }} className="form-check-label"
              htmlFor="inlineRadio1">Yes</label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input notAvailable" name="notAvailable"
              type="radio"
              checked={!isAvailable}
              onChange={toggleAvailability} />
            <label className="form-check-label" htmlFor="inlineRadio2">No</label>
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-3">
        <div className="md-form">
          <i className="fa fa-map-marker prefix teal-text" />
          <input type="text" id="location" name="location"
            onChange={handleChange} className="form-control location" value={location} />
          <label htmlFor="orangeForm-name">Address</label>
          <p className="text-center error-msg">
            {
              errors.location && <span>{errors.location}</span>
            }
          </p>
        </div>
      </div>
      <div className="col-md-12">
        <div className="md-form form-sm">
          <i className="fa fa-pencil prefix teal-text" />
          <textarea type="text" className="md-textarea description" id="description"
            name="description" onChange={handleChange} value={description} />
          <label htmlFor="input-4">Description</label>
          <p className="text-center error-msg">
            {
              errors.description && <span>{errors.description}</span>
            }
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-group prefix teal-text" />
          <input type="text" id="capacity" className="form-control capacity"
            name="capacity" onChange={handleChange} value={capacity} />
          <label htmlFor="orangeForm-name">Capacity</label>
          <p className="text-center error-msg">
            {
              errors.capacity && <span>{errors.capacity}</span>
            }
          </p>
        </div>
      </div>

      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-money prefix teal-text" />
          <input type="text" id="price" name="price" className="form-control price"
            onChange={handleChange} value={price} />
          <label htmlFor="orangeForm-name">Price</label>
          <p className="text-center error-msg">
            {
              errors.price && <span>{errors.price}</span>
            }
          </p>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-camera prefix teal-text" />
          <div className="file-field lab">
            <div className="file-field lab">
              <div className="card prev file-path-wrapper"
                style={{ width: 390, marginLeft: 45 }}>
                {
                  imgPreviewSrc ? <img className="img-fluid hoverable max"
                    id="img-preview" src={imgPreviewSrc} /> :
                    <img className="img-fluid hoverable max" id="img-preview"
                      src={image ||
                       'https://res.cloudinary.com/leumas/image/upload/v1526641850/hovg22cucu1lghofxipa.jpg'} />
                }
              </div>
              <BarLoader
                style={{ width: 390, marginLeft: 45 }}
                color={'#00695c'}
                loading={loading}
              />
            </div>
            <div className="btn btn-mycolor fuvk mt-5 ml-3  btn-sm len-center"
              style={{ width: 390 }}>
              <input type="file" className="image" name="image" onChange={handleUpload} />
            </div>

            <p className="text-center fuvk error-msg"
              style={{ width: 392, marginTop: -16 }}>
              {
                errors.image && <span>{errors.image}</span>
              }
            </p>
          </div>
        </div>
      </div>
    </div>
    {
      errorStatus ?
        <h5 className="text-center font-weight-bold red-text">{errorMessage}</h5> :
        null
    }
    <div className="text-center">
      <button className="btn btn-mycolor added mb-3">Add Center<i className="fa fa-sign-in ml-1" /></button>
    </div>
  </form>
);

AdminForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  errorStatus: PropTypes.bool,
  handleUpload: PropTypes.func,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  capacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  location: PropTypes.string,
  errors: PropTypes.object,
  toggleAvailability: PropTypes.func,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  state: PropTypes.string,
  description: PropTypes.string,
  imgPreviewSrc: PropTypes.string,
  isAvailable: PropTypes.bool,
};

export default AdminForm;
