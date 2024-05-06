import React from 'react';
import Datascroll from "./Datascroll";
import Footer from './footer';


const CenteredContainer = () => {

    
  return (
    <>
  <div className="container-fluid101 ">
      <div className="container-fluid101 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand " href="/Home ">
              ADDA ERP
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/customer-love">
                    Customer Love
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                <form className="d-flex">
            <a className="btn btn-outline-success mx-2  "   href="/login">Sign In</a>
            <a className="btn btn-outline-success me-2 mx-2 "  href="/search-name" >Start Free Trial</a>
          </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>


    <div className="centered-container99">
      <h2 className="centered-heading99">HAPPY<p>COMMUNITY LIVING!</p>
</h2>
      <p className="centered-text99">The <span className='yellow'>Most Recommended Society Management Software</span> for Residential Communities</p>
      <div className="button-container99">
       <a href="/search-name"> <button className="custom-button99">Start Free Trial </button></a>
       <a href="/contact"> <button className="custom-button91">Schedule Free Demo</button></a>
      </div>
      <Datascroll/>
    </div>
    
    </>
  );
};

export default CenteredContainer;
