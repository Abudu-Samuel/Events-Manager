import React from 'react';

const Body = () => (
  <div>
    <div id="intro" className="view hm-black-strong">
      <div className="container-fluid full-bg-img d-flex
       align-items-center justify-content-center">
        <div className="row d-flex land justify-content-center">
          <div className="text-center">
            <ul className="mb-5">
              <li>
                <h1 className="h2-responsive animated wow fadeInUp
                 font-weight-bold title white-text mr-5 mb-3">
                 Hey, wanna book an event center ?</h1>
                <h3 className="h3-responsive wow font-weight-bold animated
                 fadeInUp white-text mr-5 mb-4">Find your next experience</h3>
              </li>
              <li>
                <div className="row wow fadeIn mr-2" data-wow-delay="0.4s">
                  <div style={{ margin: '0px auto' }}>
                    <a href="#latest"><img className="img-fluid animated
                     bounce infinite" style={{ height: 50, bottom: -200 }} src="http://res.cloudinary.com/leumas/image/upload/v1527453763/zf9bspuveypekkdlhuzt.png" />
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <main className="mt-3">
      <div className="container">
        <section id="latest" className="text-center">
          <h2 className="mb-3 font-weight-bold text-center">How it works</h2>
          <div className="row d-flex justify-content-center mb-4">
            <div className="col-md-4">
              <i className="fa fa-search fa-4x orange-text mb-2" />
              <h4 className="font-weight-bold">Search</h4>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa fa-bolt fa-4x indigo-text mb-2" />
              <h4 className="font-weight-bold">Availability</h4>
            </div>
            <div className="col-md-4 mb-4">
              <i className="fa fa-check fa-4x blue-text mb-2" />
              <h4 className="font-weight-bold">Book</h4>
            </div>
          </div>
        </section>
        <hr className="my-1" />
      </div>
    </main>
  </div>
);

export default Body;
