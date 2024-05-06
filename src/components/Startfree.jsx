import React, { useState } from 'react';
import image27 from "../image/col27.png";

function StartFreeTrial() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling the start free trial submission here
    console.log('Email:', email);
    // Reset form field
    setEmail('');
  };

  return (
<>
<div className="container-fluid1 b">
      <div className="container-fluid1 b">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="/Home">
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
                  <a className="nav-link1" href="/pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link1" href="/customer-love">
                    Customer Love
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link1" href="/blog">
                    Blog
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link1" href="/contact">
                    Contact Us
                  </a>
                </li>
                <li className="nav-item">
                <form className="d-flex">
            <a className="btn btn-outline-success mx-2 "   href="/login">Sign In</a>
            
          </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>
    <div className='start-free-trial-container1'>
    <img src={image27} alt="Your Image" className="img-fluid sidedown22" />
    </div>
    <div className="start-free-trial-container">
      <h2>Your Community Name</h2>
      <form onSubmit={handleSubmit} className="start-free-trial-form">
        <div className="form-group">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Start Free Trial</button>
      </form>
    </div>
    <div className='demo3 down56'>
        <p className='demo45'>Copyright 2024 | All Rights Reserved</p>
      </div>
    </>
  );
}

export default StartFreeTrial;
