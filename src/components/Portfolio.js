import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './portfolio.css'; // Import the custom CSS for the portfolio section

const Portfolio = () => {
    return (
        <section className="portfolio-section py-5 bg-light">
            <div className="container">
                <div className="row">

                    <div className="col-12 mb-5 text-center">
                        <h2 className="display-4 text-primary">Our Portfolio</h2>
                        <p className="lead text-muted">
                            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
                        </p>
                    </div>
                    
                    <div className="col-md-6 mb-4 portFolioGrid">
                        <div
                            className="portfolio-item"
                            style={{
                                backgroundImage: 'url(/portfolio/web-development-portfolio.png)', // Replace with your image path
                            }}
                        >
                            <div className="portfolio-text">
                                <h5 className='projectTitle'>Project Title</h5>
                                <p className='projectDesc'>Description of the project.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-6 mb-4 portFolioGrid">
                        <div
                            className="portfolio-item"
                            style={{
                                backgroundImage: 'url(/portfolio/graphic-design.png)', // Replace with your image path
                            }}
                        >
                            <div className="portfolio-text">
                                <h5 className='projectTitle'>Project Title</h5>
                                <p className='projectDesc'>Description of the project.</p>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 mb-4 portFolioGrid">
                        <div
                            className="portfolio-item"
                            style={{
                                backgroundImage: 'url(/portfolio/system-design.png)', // Replace with your image path
                            }}
                        >
                            <div className="portfolio-text">
                                <h5 className='projectTitle'>Project Title</h5>
                                <p className='projectDesc'>Description of the project.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-md-6 mb-4 portFolioGrid">
                        <div
                            className="portfolio-item"
                            style={{
                                backgroundImage: 'url(/portfolio/product-design.png)', // Replace with your image path
                            }}
                        >
                            <div className="portfolio-text">
                                <h5 className='projectTitle'>Project Title</h5>
                                <p className='projectDesc'>Description of the project.</p>
                            </div>
                        </div>
                    </div>

                    {/* Add more portfolio items as needed */}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
