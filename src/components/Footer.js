import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'; // Import custom CSS for footer styles

const Footer = () => {
  return (
    <footer className="footer-section bg-body-tertiary text-muted">
     
      

      <section>
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
         
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
              <img
              src="/images/logo.png"
              alt="MyApp Logo"
              className="d-inline-block align-text-top"
              style={{ height: '40px' }} 
            />
              </h6>
              <p>
                Your trusted partner in web development and digital marketing.
              </p>
            </div>

         
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Technology</h6>
              <p><a href="#!" className="text-reset">Angular</a></p>
              <p><a href="#!" className="text-reset">React</a></p>
              <p><a href="#!" className="text-reset">Vue</a></p>
              <p><a href="#!" className="text-reset">Laravel</a></p>
            </div>

          
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p><a href="#!" className="text-reset">Home</a></p>
              <p><a href="#!" className="text-reset">Abouts </a></p>
              <p><a href="#!" className="text-reset">Blogs</a></p>
              <p><a href="#!" className="text-reset">Services</a></p>
            </div>

            
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p><i className="fas fa-home me-3"></i> Noida Sector 4, UP</p>
              <p><i className="fas fa-envelope me-3"></i> info@digitechip.com</p>
              <p><i className="fas fa-phone me-3"></i> +91 9310276998</p>
            </div>
          </div>
        </div>
      </section>

      <section className="d-flex justify-content-center  p-4 border-bottom">
      
        <div>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>
   

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: 
        <a className="text-reset fw-bold" href="https://digitechip.com/">digitechip.com</a>
      </div>

    </footer>
  );
};

export default Footer;
