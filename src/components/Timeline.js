import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'; // Import Font Awesome CSS
import './timeline.css'; // Import custom CSS for styles

const Timeline = () => {
    return (
        <section style={{ backgroundColor: '#F0F2F5' }}>
            <div className="container py-5">
                <div className="main-timeline">
                    {/* Timeline Item 1 */}
                    <div className="timeline left">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2017</h3>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
                                    vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
                                    habeo iusto primis ea eam.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 2 */}
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2016</h3>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
                                    vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
                                    habeo iusto primis ea eam.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 3 */}
                    <div className="timeline left">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2015</h3>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
                                    vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
                                    habeo iusto primis ea eam.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 4 */}
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2012</h3>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
                                    vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
                                    habeo iusto primis ea eam.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 5 */}
                    <div className="timeline left">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2011</h3>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
                                    vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
                                    habeo iusto primis ea eam.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline Item 6 */}
                    <div className="timeline right">
                        <div className="card">
                            <div className="card-body p-4">
                                <h3>2007</h3>
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum,
                                    vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per,
                                    habeo iusto primis ea eam.
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
