import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <div>
      <header className="header">
        <nav className="navbar z-depth-2 navbar-expand-lg navbar-dark fixed-top" style={{ background: 'white' }}>
          <div className="container">
            <a href="#" className="font-weight-bold navbar-brand" style={{ color: '#00695c' }}>Events Manager</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto nav-flex-icons">
                <li className="nav-item">
                  <a href="#" className="nav-link font-weight-bold waves-effect waves-light" style={{ color: '#00695c' }}>Centers</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link  font-weight-bold waves-effect waves-light" style={{ color: '#00695c' }}>Events</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xl-4">
          <h1 className="adj font-weight-bold bab">Awww...Don’t Cry.
            <br />
          What you’re looking for may have been misplaced
          in Long Term Memory&nbsp;
          </h1>
        </div>
        <div className="col-xl-4">
          <img className="img-fluid not-found"
            src="https://static1.squarespace.com/static/51cdafc4e4b09eb676a64e68/t/57a119e3f5e23161e8daf73d/1470175723578/" alt=""/>
        </div>
        <div className="col-xl-4">
          <h1 className="text-center font-weight-bold bab">
          Click the button to return to the Home page
            <Link className="btn btn-mycolor btn-sm" to={'/'}>Home</Link>
          </h1>
        </div>
      </div>
      <h1 className="font-weight-bold text-center page-404">404 Page!</h1>

    </div>
  </div>
);

export default NotFoundPage;
