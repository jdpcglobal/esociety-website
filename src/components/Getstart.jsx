import React from 'react';
import image from "../image/col75.png";
import image1 from "../image/col82.png";

import image2 from "../image/col38.png";
import image3 from "../image/col36.png";
import image4 from "../image/col39.png";
import image5 from "../image/col40.png";
import image6 from "../image/col41.png";
import image7 from "../image/col42.png";
import image8 from "../image/col43.png";
import image9 from "../image/col44.png";
import image10 from "../image/col45.png";

const CenteredRowWithImage = () => {
  return (
    <>
    <div className="container5 ">
      <div className="heading-container5">
        <h1 className="centered-heading5">
     <a href="/home">  <img src={image1} alt="Example" className="image54" /></a>  

        </h1>
      </div>
      <div className="row5">
        <div className="text-column5">
          <h1 className='tex5'>Get Your Apartment <p>Super App</p></h1>
          <div className='text5  '>
             <p>Join  <span5>13,00,000+ </span5>Apartment & Villa<p>Owners/Residents who use ADDA globally!</p></p>
             
             </div>
        </div>
        <div className="image-column5">
          <img src={image} alt="Example" className="image5" />
        </div>
      </div>
      <div id="image-2-content1" className="image-content">
        <div className="centered-container88">
      <h1 className="centered-heading88"><p className='tex16'>The pint-sized powerhouse to manage all aspects of your Apartment/Villa, and stay updated with everything in your Community</p></h1>
    
      <div className="row88">
        <div className="column88 colum88">
        <img src={image2} alt="Your Image" className="img-fluid6" />
        <h3 className='text20'>Private Social Network</h3>
        <p className='text19'>Connect with Neighbors,Discussions, Polls, Albums and more</p>
        <img src={image4} alt="Your Image" className="img-fluid6" />
        <h3 className='text20'>Manage Multiple Properties</h3>
        <p className='text19'>One apartment management app

to overview multiple owned units</p>
        <img src={image5} alt="Your Image" className="img-fluid6" />
        <h3 className='text20'>Manage Visitors</h3>
        <p className='text19'>Authorize Visitors through this Visitor Management App.

Pre-authenticate Guests</p>
        <img src={image6} alt="Your Image" className="img-fluid6" />
        <h3 className='text20'>Domestic Help</h3>
        <p className='text19'>Find Domestic Help, View/Provide

Reviews, View Attendance</p>
        </div>
       
        <div className="column88 colum88">
        <img src={image7} alt="Your Image" className="img-fluid6" />
        <h3  className='text20'>Bill Payments</h3>
        <p className='text19'>Easy payment options for

Maintenance Dues, Utility Bills</p>
        <img src={image8} alt="Your Image" className="img-fluid6" />
        <h3 className='text20'>Discover</h3>
        <p className='text19'>Explore the best trusted by neighbors:

Offers, Buy/Sell/Rent, Recommendations</p>
        <img src={image9} alt="Your Image" className="img-fluid6" />
        <h3 className='text20'> Emergency Help</h3>
        <p className='text19'>Get immediate help from Security,

Neighbors when needed</p>
        <img src={image10} alt="Your Image" className="img-fluid6" />
        <h3 className='text20'>Facility, Activities</h3>
        <p className='text19'>Book common Facilities. Stay

updated about Activities, Events</p>
        </div>
      </div>
      
    </div>
    
        </div>

        
      </div>
      <div className='demo'>
      <a href="/contact"> <button className="custom-button33 today">Get Started Today </button></a>
          <a href="/pricing"> <button className="custom-button333 today">View Latest Packages </button></a>
      </div>
      <div className='demo3'>
        <p>Copyright 2024 | All Rights Reserved</p>
      </div>
     
      
    
    </>
  );
};

export default CenteredRowWithImage;
