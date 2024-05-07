import React from 'react';
import image28 from "../image/col28.png";
import image29 from "../image/col29.png";
import image30 from "../image/col30.png";
import image31 from "../image/col31.png";
import Footer from "./footer";
import Toptodown from "./Toptodown";

function CenteredTextContainer({ children }) {
  return (
    <div className="centered-container">
      {children}
    </div>
  );
}

function App() {
  return (
    <>
    <div className="container-fluid ">
      <div className="container-fluid ">
        <nav className="navbar navbar-expand-lg navbar-light bg-white p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand " href="/ ">
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
    
    <div className="App">
      <CenteredTextContainer>
        <div className="container">
          <h1 className='pricing1'>ADDA Packages & Pricing</h1>
          <h4 className='pricing2'>Price Starts at ₹ 12 per unit per month</h4>
        </div>
      </CenteredTextContainer>
    </div>
<div className='container12 container'>
    <div className='img-fluid3'>
    {<img src={image29} alt="Your Image" className="img-fluid2" />}
    </div>

<h1 className='text12'>LITE PACKAGE</h1>
    <div className='row'>
        
        <div className='col-md-6'>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
            HelpDesk</p>

            <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
            Announcements</p>
            
            <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
            Resident Database with Change Logs</p>
         <p>   {<img src={image28} alt="Your Image" className="img-fluid1" />}
            Resident App + Portal</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
            Admin App + Portal</p>
            </div>
            <div className='col-md-6'>
            <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
            Booking Home Services</p>
            <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
            Visitor Invitation with Guest Code</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
            Resident ID card (with QR) on App</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
            Private Social Network for Residents</p>
</div>
        </div>
        <div className='btn2'>
        <a className="btn1 "   href="/contact"> Get Quote </a>
        </div>
      
        
    </div>

    <div class="container">
  <div class="row">
    <div class="col-md-6 coll1 coll3 ">
    <div className='img-fluid3'>
    {<img src={image30} alt="Your Image" className="img-fluid4" />}
    </div>
      <h1 className='text13'>MANAGE PACKAGE</h1>
      <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
      All Features in Lite Package +</p>
            <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
            Events Calendar & Albums</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Amenity Booking</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Staff Manager</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Parking Manager</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Move IN - Move OUT</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Admin Reports</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Projects & Meetings</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Vendor Master</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           AMC</p>
           <div className='border'>
            
           </div>
            <div className='btn2'>
        <a className="btn1 "   href="/contact"> Get Quote </a>
        </div>
    </div>
   
    
  
  
    
    <div class="col-md-6 coll1 coll3 coll4">
    <div className='img-fluid3'>
    {<img src={image31} alt="Your Image" className="img-fluid2" />}
    </div>
      <h1 className='text13'>BOOKS PACKGE</h1>
      <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
      All Features in Manage Package +</p>
            <p>{<img src={image28} alt="Your Image" className="img-fluid1" />}
            General Ledger</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Income Tracker</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Expense Tracker</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Bank & Cash</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Utility Tracker</p>
           <p> {<img src={image28} alt="Your Image" className="img-fluid1" />}
           Advanced Amenity Booking</p>
           <div className='border'>

           </div>
           
            <div className='btn5'>
        <a className="btn1"   href="/contact"> Get Quote </a>
        </div>
    </div>
    
  </div>
  
</div>
<div className='a'>

</div>
   
    <Footer/>  
    
<Toptodown/>
    </>
  );
}

export default App;
