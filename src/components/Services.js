import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Services = () => {
    return (
        <section className="services-section py-5 bg-light">
            <div className="container">
                <div className="row text-center">
                    <div className="col-12 mb-5">
                        <h2 className="display-4 text-primary">Our Services</h2>
                        <p className="lead text-muted">
                            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
                        </p>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm border-light rounded p-5" style={{ backgroundColor: 'transparent' }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src="/service/android.png" 
                                    alt="Android Development" 
                                    className="card-img-top" 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Android Development</h5>
                                <p className="card-text">
                                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm border-light rounded p-5" style={{ backgroundColor: 'transparent' }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src="/service/apple.png" 
                                    alt="iOS Development" 
                                    className="card-img-top" 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">iOS Development</h5>
                                <p className="card-text">
                                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm border-light rounded p-5" style={{ backgroundColor: 'transparent' }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src="/service/web-development.png" 
                                    alt="Web Development" 
                                    className="card-img-top" 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Web Development</h5>
                                <p className="card-text">
                                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm border-light rounded p-5" style={{ backgroundColor: 'transparent' }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src="/service/python.png" 
                                    alt="Python" 
                                    className="card-img-top" 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Python</h5>
                                <p className="card-text">
                                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm border-light rounded p-5" style={{ backgroundColor: 'transparent' }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src="/service/hybrid-development.png" 
                                    alt="Hybrid Development" 
                                    className="card-img-top" 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Hybrid Development</h5>
                                <p className="card-text">
                                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 mb-4">
                        <div className="card shadow-sm border-light rounded p-5" style={{ backgroundColor: 'transparent' }}>
                            <div className="d-flex justify-content-center align-items-center">
                                <img 
                                    src="/service/laravel.png" 
                                    alt="Laravel Development" 
                                    className="card-img-top" 
                                    style={{ width: '100px', height: '100px' }} 
                                />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Laravel Development</h5>
                                <p className="card-text">
                                    Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
