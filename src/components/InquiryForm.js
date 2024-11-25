import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const InquiryForm = () => {
    return (
        <section className="inquirySection py-5 bg-light"  >
            <div className="container py-5">
                <div className="row">
                    {/* Contact Info Section */}
                    <div className="col-md-4 p-4 rounded"  style={{ backgroundColor :  '#d5e4fb'}}>
                        <h3>Let's get in touch</h3>
                        <p>We're open for any suggestion or just to have a chat.</p>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <i className="fa fa-map-marker me-2" aria-hidden="true"></i>
                                Noida 4, UP, IN
                            </li>
                            <li className="mb-3">
                                <i className="fa fa-phone me-2" aria-hidden="true"></i>
                                Phone: +91 9310276998
                            </li>
                            <li className="mb-3">
                                <i className="fa fa-envelope me-2" aria-hidden="true"></i>
                                Email: info@digitechip.com
                            </li>
                            <li className="mb-3">
                                <i className="fa fa-globe me-2" aria-hidden="true"></i>
                                Website: digitechip.com
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form Section */}
                    <div className="col-md-8 p-4">
                        <h3 className="mb-4">Get in touch</h3>
                        <form>
                            <div className="row mb-3">
                                <div className="col-md-6">
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                    />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="subject"
                                    className="form-control"
                                    placeholder="Subject"
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="message"
                                    className="form-control"
                                    rows="4"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default InquiryForm;
