import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './design.css'; // Import the custom CSS for the portfolio section

const DesignSolution = () => {
    return (
        <section className="services-section py-5 bg-light">
            <div className="container py-4"> {/* Apply white background to container */}
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h3 className="display-4 text-primary">We provide effectivedesign solutions</h3>
                        <p className="lead text-muted">
                            Explore our expertise in mobile app and web development technologies.
                        </p>
                    </div>
                </div>

                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <div className="p-4 innerDesignDiv">
                            <img
                                src="/design/ui-ux.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '70px', height: '70px' }}
                            />
                            <p className="DesignTitle">
                                UI/UX Design
                            </p>

                            <p className="DesignDesc">
                                Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.
                            </p>


                            <img
                                src="/design/right-arrow.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '25px', height: '25px' }}
                            />


                        </div>
                    </div>




                    <div className="col-md-6 mb-4">
                        <div className="p-4 innerDesignDiv">
                            <img
                                src="/design/graphic.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '70px', height: '70px' }}
                            />
                            <p className="DesignTitle">
                                Graphic Design
                            </p>

                            <p className="DesignDesc">
                                Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.
                            </p>


                            <img
                                src="/design/right-arrow.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '25px', height: '25px' }}
                            />


                        </div>
                    </div>



                    <div className="col-md-6 mb-4">
                        <div className="p-4 innerDesignDiv">
                            <img
                                src="/design/web-design.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '70px', height: '70px' }}
                            />
                            <p className="DesignTitle">
                                Web Design
                            </p>

                            <p className="DesignDesc">
                                Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.
                            </p>

                            <img
                                src="/design/right-arrow.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '25px', height: '25px' }}
                            />



                        </div>
                    </div>


                    <div className="col-md-6 mb-4">
                        <div className="p-4 innerDesignDiv">
                            <img
                                src="/design/motion-graphic.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '70px', height: '70px' }}
                            />
                            <p className="DesignTitle">
                                Motion Design
                            </p>

                            <p className="DesignDesc">
                                Focusing on user interface (UI) and user experience (UX) design enhance the usability and accessibility of digital products & app.
                            </p>

                            <img
                                src="/design/right-arrow.png"
                                alt="Android Development"
                                className="card-img-top"
                                style={{ width: '25px', height: '25px' }}
                            />


                        </div>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default DesignSolution;
