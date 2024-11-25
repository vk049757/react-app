import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure this is added for functionality


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light pt-4">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="/images/logo.png" // Path to your logo in public/images
              alt="MyApp Logo"
              className="d-inline-block align-text-top"
              style={{ height: '40px' }} // Adjust the height as needed
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Blogs</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
export default Navbar;
