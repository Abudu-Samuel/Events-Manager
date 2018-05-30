import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import Navbar from '../common/Navbar';


const TrendingCenter = ({
  centers,
  getCenterId,
}) => (
  <div className="container">
    <Navbar />
    <section id="popular centers">
      <h2 className="mb-3 slot font-weight-bold text-center">Latest Centers</h2>
      <div className="row mb-4">
        {
          centers.center.map((center, key) => (<div className="col-md-4 mb-4" key={center.id}>
            <div className="card hoverable text-center">
              <img className="img-fluid hoverable max" src={center.image} alt="Card image cap" />
              <div className="card-body">
                <h4 className="card-title">{center.name}</h4>
                <p className="card-text">
                  {
                    center.description.split('').length > 40 ? `${center.description.slice(0, 40)}...` : center.description
                  }
                </p>
                <button
                  className="btn btn-mycolor btn-sm"
                  data-centerid={center.id}
                  onClick={getCenterId}>
                  <Link to={`/centers/${center.id}`}>Details</Link>
                </button>
              </div>
            </div>
          </div>))
        }
      </div>
    </section>
  </div>
);
export default TrendingCenter;
