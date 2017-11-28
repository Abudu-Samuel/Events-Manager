import React from 'react';

/**
 * creates Body component
 * @returns {funct} Body
 */
const Body = () => (
    <div>
        <main className="mt-5">
            <div className="container">
                <section id="how it works" className="text-center">
                    <h2 className="mb-5 font-weight-bold text-center">How it works</h2>
                    <div className="row d-flex justify-content-center mb-4">
                        <div className="col-md-4">
                            <i className="fa fa-search fa-4x orange-text mb-2" />
                            <h4 className="font-weight-bold">Search</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fa fa-bolt fa-4x indigo-text mb-2" />
                            <h4 className="font-weight-bold">Availability</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                        <div className="col-md-4 mb-4">
                            <i className="fa fa-check fa-4x blue-text mb-2" />
                            <h4 className="font-weight-bold">Book</h4>
                            <p className="grey-text">Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </section>
            </div>
            <hr className="my-5" />
        </main>
    </div>
);

export default Body;
