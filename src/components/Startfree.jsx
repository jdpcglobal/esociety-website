import React, { useState } from 'react';
import image27 from "../image/col27.png";
import Nav from "./Nav";
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
       <Nav/>
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
