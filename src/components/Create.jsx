import React, { useState } from 'react';

function SignUpForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password || !confirmPassword) {
      alert('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Form is valid - handle submission (e.g., send data to server)
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);

    // Reset form fields and set submitted state to true
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setSubmitted(true);
  };

  return (
    <>
    <div className="container-fluid1 b">
      <div className="container-fluid1 b">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand" href="/">
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
            
            <a className="btn btn-outline-success me-2 mx-2 "  href="/search-name" >Start Free Trial</a>
          </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </div>
        </div>
    <div className="signin-container  down23">
      <h2>Sign Up</h2>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      ) : (
        <div className='btn56'>
             <p >Thank you for signing up</p>
       <a href="/login"><button type="submit">Sign-in</button></a> 
        </div>
       
      )}
    </div>
    <div className='demo3'>
        <p>Copyright 2024 | All Rights Reserved</p>
      </div>
    </>
  );
}



export default SignUpForm;
