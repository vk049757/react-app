import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const TechnologyStack = () => {
    return (
        <section className="services-section py-5 bg-light">
            <div className="container py-4"> {/* Apply white background to container */}
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h3 className="display-4 text-primary">Technology Stack</h3>
                        <p className="lead text-muted">
                            Explore our expertise in mobile app and web development technologies.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center"> {/* Added align-items-center for vertical centering */}
                    {/* First Column: Mobile App Development */}
                    <div className="col-md-6 mb-4">
                        <div className="p-4">
                            <h5 className="text-primary">Mobile App Development</h5>
                            <p className="text-muted">
                                Mobile application development is the process of creating software applications that run on a mobile device. A typical mobile application utilizes a network connection to work with remote computing resources.
                            </p>
                        </div>
                    </div>

                    {/* Second Column: Technology Stack Images */}
                    <div className="col-md-6">
                        <div className="row row-cols-3 g-4">
                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/service/android.png"
                                        className="img-fluid"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/service/hybrid-development.png"
                                        className="img-fluid"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/service/apple.png"
                                        className="img-fluid"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/service/python.png"
                                        className="img-fluid"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/service/web-development.png"
                                        className="img-fluid"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="d-flex justify-content-center">
                                    <img
                                        src="/service/laravel.png"
                                        className="img-fluid"
                                        style={{ width: '100px', height: '100px' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyStack;
