import React from 'react';
import { Link } from 'react-router-dom';


const SideBar = () => (
  <div className="col-md-4 adm mb-4">
    <div className="col-xl-5 col-md-4 mb-3 try text-center">
      <img src="http://res.cloudinary.com/leumas/image/upload/v1522632122/mn5bz05wvv7qfkozmzmc.png" className="img-fluid mb-3 teal-text z-depth-1 rounded-circle admpro" alt="Responsive image" />
      <h5 className="font-weight-bold white-text">Admin</h5>
    </div>
    {/* <h6 className="font-weight-bold white-text text-center">adminuser@gmail.com</h6> */}
    <hr className="font-weight-bold" />
    <div className="">
      <ul className="mr-6">
        <li className="white-text mb-3">
          <a className="btn btn-mycolor btn-block mr-2" href="#"><i className="fa fa-dashboard mr-2 white-text" />Dashboard</a>
        </li>
        {/* <li className="white-text mb-3">
          <a className="btn btn-mycolor btn-block mr-4" href="#"><i className="fa fa-user mr-2 white-text" />Profile</a>
        </li> */}
        <li className="white-text mb-3">
          <Link className="btn btn-mycolor btn-block mr-4" to="/addcenter"><i className="fa fa-plus mr-2 white-text" />Add Center</Link>
        </li>
        <li className="white-text mb-3">
          <Link to="/manage/center" className="btn btn-mycolor btn-block mr-4"><i className="fa fa-street-view mr-2 white-text" />View Centers</Link>
        </li>
        {/* <li className="white-text mb-3">
          <a className="btn btn-mycolor btn-block mr-4" href="#"><i className="fa fa-cog mr-2 white-text" />Settings</a>
        </li> */}
      </ul>
    </div>
  </div>
);

export default SideBar;
