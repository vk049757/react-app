import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './timeline.css'; // Import custom CSS for styles

const Timeline = () => {
    return (
        <section className="timeline-section py-5 bg-light mt-5">
            <div className="container">

                <div className='row'>
                    <div className="col-12 mb-5">
                        <h2 className="display-4 text-primary">Project Timeline</h2>
                        <p className="lead text-muted">
                            Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
                        </p>
                    </div>
                </div>
                <ul className="timeline-with-icons">
                    {/* Timeline Item 1 */}
                    <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                           <img src="/images/dot.png" alt="JavaScript" className="img-fluid" style={{ height: '20px' }} />
                        </span>
                        <h5 className="fw-bold">Step 1</h5>
                       
                        <p className="text-muted">
                        Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
                            et urna sit amet massa dapibus tristique non finibus ligula. Nam
                            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
                            vulputate mattis.
                        </p>
                    </li>

                    {/* Timeline Item 2 */}
                    <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                            <img src="/images/dot.png" alt="JavaScript" className="img-fluid" style={{ height: '20px' }} />
                        </span>
                        <h5 className="fw-bold">Step 2</h5>
                        <p className="text-muted">
                        Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
                            et urna sit amet massa dapibus tristique non finibus ligula. Nam
                            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
                            vulputate mattis.
                        </p>
                    </li>

                    {/* Timeline Item 3 */}
                    <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                            <img src="/images/dot.png" alt="JavaScript" className="img-fluid" style={{ height: '20px' }} />
                        </span>
                        <h5 className="fw-bold">Step 3</h5>
                        <p className="text-muted">
                        Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
                            et urna sit amet massa dapibus tristique non finibus ligula. Nam
                            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
                            vulputate mattis.
                        </p>
                    </li>

                    {/* Timeline Item 4 */}
                    <li className="timeline-item mb-5">
                        <span className="timeline-icon">
                            <img src="/images/dot.png" alt="JavaScript" className="img-fluid" style={{ height: '20px' }} />
                        </span>
                        <h5 className="fw-bold">Step 4</h5>
                        <p className="text-muted">
                            Nulla ac tellus convallis, pulvinar nulla ac, fermentum diam. Sed
                            et urna sit amet massa dapibus tristique non finibus ligula. Nam
                            pharetra libero nibh, id feugiat tortor rhoncus vitae. Ut suscipit
                            vulputate mattis.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Timeline;
