import React, { useState } from 'react';

function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false); // State for handling submission confirmation

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)

    // For demonstration, log the form data to console
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('City:', city);
    console.log('Comments:', comments);

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setCity('');
    setComments('');

    // Set submitted state to true to display thanks message
    setSubmitted(true);

    // You can optionally add additional logic here (e.g., API call, redirect)
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
            <a className="btn btn-outline-success mx-2 "   href="/login">Sign In</a>
            <a className="btn btn-outline-success me-2 mx-2 "  href="/search-name" >Start Free Trial</a>
          </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>
      <h1 className='contact-form-container1'>Let's Talk</h1>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="full name">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label htmlFor="Number">Number</label>
            <div className="form-group">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="City">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <label htmlFor="Comments">Comments</label>
            <div className="form-group">
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <p className='pops' >Thanks for you</p>
        )}
      </div>
      <div className='demo3'>
        <p>Copyright 2024 | All Rights Reserved</p>
      </div>
    </>
  );
}

export default ContactForm;
