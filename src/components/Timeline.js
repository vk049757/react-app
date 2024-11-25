import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './timeline.css'; // Import custom CSS for styles

const Timeline = () => {
    return (
        <section>
            <div className="container py-5">
                <div className="row text-center mt-4">
                    <div className="col-12 mb-5">
                        <h2 className="display-4 text-primary">Project Working Process</h2>
                        <p className="lead text-muted">
                            Discover how we turn your ideas into reality with a step-by-step approach tailored to your needs.
                        </p>
                    </div>
                </div>
                <div className="main-timeline">
                    {/* Timeline Item 1 */}
                    <div className="timeline left">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>Step 1: Project Understanding</h3>
                                <p className="mb-0">
                                    We begin by gathering all your requirements, understanding your vision, and defining the project scope to ensure alignment.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>Step 2: UI/UX Design</h3>
                                <p className="mb-0">
                                    Our design team creates intuitive and visually appealing mockups, focusing on user experience and brand identity.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="timeline left">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>Step 3: Development</h3>
                                <p className="mb-0">
                                    Our developers bring the designs to life with clean, efficient, and scalable code, ensuring optimal performance.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>Step 4: Testing & QA</h3>
                                <p className="mb-0">
                                    Rigorous testing is conducted to identify and fix any issues, ensuring a flawless product ready for launch.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 5 */}
                    <div className="timeline left">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>Step 5: Launch</h3>
                                <p className="mb-0">
                                    Once approved, we launch the project seamlessly, making it accessible to your target audience.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 6 */}
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>Step 6: Support & Maintenance</h3>
                                <p className="mb-0">
                                    We provide ongoing support and updates, ensuring your project stays updated and continues to perform excellently.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Timeline;


