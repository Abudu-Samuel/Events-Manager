import React from 'react';

const AdminForm = ({
  handleChange,
  handleSubmit,
  errorStatus,
  center,
  errorMessage,
  name,
  capacity,
  location,
  price,
  state,
  description,
  image,
  isAvailable,
  redirect,
  redirectMessage,
  showRedirectMessage


}) => (
  <form onSubmit={handleSubmit} className="signup add">
    <div className="row">
      <div className="col-md-12">
        <div className="md-form">
          <i className="fa fa-home prefix teal-text" />
          <input type="text" id="name" name="name" onChange={handleChange} className="form-control" value={name}/>
          <label htmlFor="orangeForm-name">Name</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-map-marker   prefix teal-text" />
          <input type="text" id="state" name="state" onChange={handleChange} className="form-control" value={state}/>
          <label htmlFor="orangeForm-name">State</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-map-marker prefix teal-text" />
          <input type="text" id="location" name="location" onChange={handleChange} className="form-control" value={location}/>
          <label htmlFor="orangeForm-name">Location</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form form-sm">
          <i className="fa fa-pencil prefix teal-text" />
          <textarea type="text" className="md-textarea" id="isAvailable" name="isAvailable" onChange={handleChange} value={isAvailable}/>
          <label htmlFor="input-4">Available</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form form-sm">
          <i className="fa fa-pencil prefix teal-text" />
          <textarea type="text" className="md-textarea" id="description" name="description" onChange={handleChange} value={description}/>
          <label htmlFor="input-4">Description</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-group prefix teal-text" />
          <input type="text" id="capacity" className="form-control" name="capacity" onChange={handleChange} value={capacity}/>
          <label htmlFor="orangeForm-name">Capacity</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-money prefix teal-text" />
          <input type="text" id="image" name="image" className="form-control" onChange={handleChange} value={image}/>
          <label htmlFor="orangeForm-name">Image</label>
        </div>
      </div>
      <div className="col-md-6">
        <div className="md-form">
          <i className="fa fa-money prefix teal-text" />
          <input type="text" id="price" name="price" className="form-control" onChange={handleChange} value={price}/>
          <label htmlFor="orangeForm-name">Price</label>
        </div>
      </div>
    </div>
    {
      errorStatus ?
        <h5 className="text-center font-weight-bold red-text">{errorMessage}</h5> :
        null
    }
    {/* {
      this.state.showRedirectMessage ?
        <h5 className="text-center white-text">{this.state.redirectMessage}</h5> :
        null
    } */}
    <div className="text-center">
      <button className="btn btn-mycolor mb-3">Add Center<i className="fa fa-sign-in ml-1" /></button>
    </div>
  </form>
);

export default AdminForm;