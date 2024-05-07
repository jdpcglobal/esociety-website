import React, { useState } from 'react';
import image26 from "../image/col26.png";
import Nav from "./Nav";
function SignIn() {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log('Email/Phone:', emailOrPhone, 'Password:', password, 'Remember Me:', rememberMe);
    // Reset form fields
    setEmailOrPhone('');
    setPassword('');
    setSubmitted(true);
  };

  return (
    <>
 <div className="container-fluid1 b">
      <div className="container-fluid1 b">
        <Nav/>
        </div>
        </div>

    
    <div className='signin-container1'>
     <img src={image26} alt="Your Image" className="imag sidedown22" />
     <h2 className='imag'>Login you</h2></div>
    <div className="signin-container">
    {!submitted ? (
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label htmlFor="emailOrPhone">Email or Phone</label>
          <input
            type="text"
            id="emailOrPhone"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
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
          <input
            type="checkbox"
            id="rememberMe"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

         <label1>
             I agree to the<a className='under' href="/terms-and-conditions">Terms and Conditions</a> 
          </label1>
        </div>
        <div className="form-group">
          <button type="submit">Sign In</button>
        </div>
        <div className="form-group down24">
          
          <a className='under1' href="/sing-up">Create Account</a>
        </div>
        
      </form>
       ) : (
        <p className='pops'>Thank you for sign-in</p>
      )}
    </div>
    <div className='demo3'>
        <p>Copyright 2024 | All Rights Reserved</p>
      </div>
    </>
  );
}

export default SignIn;
