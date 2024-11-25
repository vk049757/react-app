import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this is added for functionality

const HeroSection = () => {
    return (
        <section className="hero-section py-5 bg-light">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Side: Text and Button */}
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="mb-4">
                            Create your <br />
                            website today with <span className="text-primary">Digite Chip IT Services</span>
                        </h1>
                        <p className="mb-4">
                        Lorem Ipsum is built on top of Dolor Sit, a robust library that offers versatile, adaptable, and user-friendly components. It simplifies development and enhances design flexibility.
                        </p>
                        <a
                            href="https://www.figma.com/design/NnFigTvU16Mk9lsLZR7bzR/%5BPreview%5D-Zone_Web.v3.0.0"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary btn-lg"
                        >
                            Contact Us
                        </a>

                        <div className="mt-4">
                            <p>Available Services</p>

                            {/* Images in a horizontal row */}
                            <div className="d-flex justify-content-start gap-3">
                                <img src="/images/js.png" alt="JavaScript" className="img-fluid" style={{ width: '50px', height: '50px' }} />
                                <img src="/images/react.png" alt="React" className="img-fluid" style={{ width: '50px', height: '50px' }} />
                                <img src="/images/figma.png" alt="Figma" className="img-fluid" style={{ width: '50px', height: '50px' }} />
                            </div>

                        </div>
                    </div>

                    {/* Right Side: Images */}
                    <div className="col-lg-6 d-flex flex-wrap justify-content-center">
                        <img
                            src="/images/react-hero-section-img.png"
                            alt="Home hero"
                            className="img-fluid m-2"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
