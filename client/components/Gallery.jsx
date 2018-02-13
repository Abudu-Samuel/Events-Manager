import React from 'react';

const Gallery = () => (
  <div className="container">
    <section id="gallery">
      <h2 className="mb-5 font-weight-bold text-center">Gallery</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div id="carousel-example-1z" className="carousel slide carousel-fade" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#carousel-example-1z" data-slide-to="0" className="active" />
              <li data-target="#carousel-example-1z" data-slide-to="1" />
              <li data-target="#carousel-example-1z" data-slide-to="2" />
            </ol>
            <div className="carousel-inner z-depth-1-half" role="listbox">
              <div className="carousel-item active">
                <img className="d-block w-100" src="https://static.pexels.com/photos/210620/pexels-photo-210620.jpeg" alt="First slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://static.pexels.com/photos/12574/SW_Dylan%2BRives.jpg" alt="Second slide" />
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="https://static.pexels.com/photos/167605/pexels-photo-167605.jpeg" alt="Third slide" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <a href="#" className="grey-text">
            <h6 className="mb-4"><i className="fa fa-heart red-text mr-2" /><strong>Testimonials</strong><i className="fa fa-heart red-text ml-2" /></h6>
          </a>
          <h4 className="mb-3"><strong>What our clients are saying</strong></h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo adipisicing
                            elit, sed adipisicing elit, sed adipisicing elit, sed adipi.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure.</p>
          <a className="btn btn-default btn-sm">Read More</a>
        </div>
      </div>
    </section>
    <hr className="my-5" />
  </div>
);

export default Gallery;
