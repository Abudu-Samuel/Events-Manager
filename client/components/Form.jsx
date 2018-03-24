import React from 'react';

const Form = ({
  handleChange,
  handleSubmit,
  errorStatus,
  errorMessage,
  editing,
  title,
  time,
  type,
  date,
  image,
  description,
}) => (

  <form onSubmit={handleSubmit} className="signup add">
    <div className="md-form">
      <i className="fa fa-ticket prefix teal-text" />
      <input type="text" name="title" onChange={handleChange} id="first-name" className="form-control" value={title} />
      <label htmlFor="orangeForm-name">Event Title</label>
    </div>
    <div className="md-form">
      <i className="fa fa-clock-o prefix teal-text" />
      <input type="date" name="date" onChange={handleChange} id="username-name" className="form-control" value={date}/>
      <label htmlFor="orangeForm-name">Event Date</label>
    </div>
    <div className="md-form">
      <i className="fa fa-clock-o prefix teal-text" />
      <input type="text" name="time" onChange={handleChange} id="ends-name" className="form-control" value={time}/>
      <label htmlFor="orangeForm-name">Event Time</label>
    </div>
    <div className="md-form">
      <i className="fa fa-clock-o prefix teal-text" />
      <input type="text" name="type" onChange={handleChange} id="ends-name" className="form-control" value={type}/>
      <label htmlFor="orangeForm-name">Event Type</label>
    </div>
    <div className="md-form myfile">
      <i className="fa fa-camera-retro prefix teal-text" />
      <input type="text" id="image" name="image" className="form-control" onChange={handleChange} value={image}/>
      <label htmlFor="orangeForm-name">Image</label>
    </div>
    <div className="md-form form-sm">
      <i className="fa fa-pencil prefix teal-text" />
      <textarea type="text" name="description" onChange={handleChange} className="md-textarea" id="input-4" value={description}/>
      <label htmlFor="input-4">Event Description</label>
    </div>
    {
      errorStatus ?
        <h5 className="text-center font-weight-bold red-text">{errorMessage}</h5> :
        null
    }
    <div className="text-center">
      <button className="btn btn-mycolor mb-3">Make your event live<i className="fa fa-sign-in ml-1" /></button>
    </div>
  </form>
);

export default Form;
