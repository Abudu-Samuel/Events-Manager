import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const TrendingCenter = ({
  centers,
  isAuthenticated,
  getCenterId,
}) => (
  <div className="container">
    <section id="popular centers">
      <h2 className="mb-3 slot font-weight-bold text-center">{
        isAuthenticated ? 'Centers' : 'Latest Centers'
      }</h2>
      <div className="row mb-4">
        {
          centers.center.map(center => (<div className="col-md-4 mb-4"
            key={center.id}>
            <div className="card hoverable text-center">
              <img className="img-fluid hoverable max" src={center.image} />
              <div className="card-body">
                <h4 className="card-title">{center.name}</h4>
                <p className="card-text">
                  {
                    center.description.split('').length > 40 ?
                      `${center.description.slice(0, 40)}...` :
                      center.description
                  }
                </p>
                <button
                  id="viewCenter"
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

TrendingCenter.propTypes = {
  centers: PropTypes.object,
  isAuthenticated: PropTypes.bool,
  getCenterId: PropTypes.func
};

export default TrendingCenter;
