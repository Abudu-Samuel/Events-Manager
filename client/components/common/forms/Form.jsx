import React from 'react';

const Form = ({
  handleChange,
  handleSubmit,
  errorStatus,
  errorMessage,
  editing,
  errors,
  handleUpload,
  title,
  imgPreviewSrc,
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
      <p className="text-center error-msg">
        {
          errors.title && <span>{errors.title}</span>
        }
      </p>
    </div>
    <div className="md-form">
      <i className="fa fa-clock-o prefix teal-text" />
      <input type="date" name="date" onChange={handleChange} id="username-name" className="form-control" value={date}/>
      <label htmlFor="orangeForm-name">Event Date</label>
      <p className="text-center error-msg">
        {
          errors.date && <span>{errors.date}</span>
        }
      </p>
    </div>
    <div className="md-form">
      <i className="fa fa-clock-o prefix teal-text" />
      <input type="text" name="type" onChange={handleChange} id="ends-name" className="form-control" value={type}/>
      <label htmlFor="orangeForm-name">Event Type</label>
      <p className="text-center error-msg">
        {
          errors.type && <span>{errors.type}</span>
        }
      </p>
    </div>
    <i className="fa fa-camera prefix teal-text" style={{ fontSize: 27, marginLeft: 3, marginBottom: 22 }}/>
    <div className="md-form myfile">
      {/* <i className="fa fa-camera-retro prefix teal-text" />
      <input type="text" id="image" name="image" className="form-control" onChange={handleChange} value={image}/>
      <label htmlFor="orangeForm-name">Image</label> */}
      <div className="file-field lab">
        <div className="file-field lab">
          <div className="card prev file-path-wrapper">
            {
              imgPreviewSrc ? <img className="img-fluid hoverable max-event" id="img-preview" src={imgPreviewSrc} alt="Card image cap" /> :
                <img className="img-fluid hoverable max-event" id="img-preview" src="http://res.cloudinary.com/leumas/image/upload/v1526641850/hovg22cucu1lghofxipa.jpg" alt="Card image cap" />
            }
          </div>
        </div>
        <div className="btn btn-mycolor mt-5 ml-3  btn-sm len">
          <input type="file" name="image" onChange={handleUpload} />
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
      <textarea type="text" name="description" onChange={handleChange} className="md-textarea" id="input-4" value={description}/>
      <label htmlFor="input-4">Event Description</label>
      <p className="text-center error-msg">
        {
          errors.description && <span>{errors.description}</span>
        }
      </p>
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
