import React from 'react';
import Request from "./request";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3 remove">
            <h4>About ADDA</h4>
            <p><a className="foot" href="/about-us">
                  About Us
                  </a></p>
            <p><a className="foot" href="/home">
                    Home
                  </a></p>
                  <p><a className="foot" href="/blog">
                  Blog
                  </a></p>
                  
                 
                  
                 
                 

                  
          </div>
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <p><a className="foot" href="/terms-and-conditions">
                  Terms and Conditions
                  </a></p>
                  <p><a className="foot" href="/know-more">
                  Know More
                  </a></p>
            <p><a className="foot" href="/">
            ADDA ERP
                  </a></p>

                 </div>
          <div className="col-md-3">
            <h4>Reach out to us</h4>
            <p><a className="foot" href="/customer-love">
                  Customer Love
                  </a></p>
            <p><a className="foot" href="/contact">
            Contact Us
                  </a></p>
                  <p><a className="foot" href="/pricing">
                  Pricing
                  </a></p>
                  
                 

          </div>
          <div className="col-md-3">
            <h4 className='foot1'>Let's talk</h4>
            
<Request/>

</div>  
          
        </div>
      </div>
      <div className='demo4'>
        <p>Copyright 2024 | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
