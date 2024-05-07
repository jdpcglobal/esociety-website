import React, { useState } from 'react';

import image from "../image/col37.png";
import image2 from "../image/col38.png";
import image3 from "../image/col36.png";
import image4 from "../image/col39.png";
import image5 from "../image/col40.png";
import image6 from "../image/col41.png";
import image7 from "../image/col42.png";
import image8 from "../image/col43.png";
import image9 from "../image/col44.png";
import image10 from "../image/col45.png";
import image11 from "../image/col46.png";
import image12 from "../image/col47.png";
import image13 from "../image/col48.png";
import image14 from "../image/col49.png";
import image15 from "../image/col50.png";
import image16 from "../image/col51.png";
import image17 from "../image/col52.png";
import image18 from "../image/col53.png";
import image19 from "../image/col54.png";
import image20 from "../image/col55.png";
import image21 from "../image/col56.png";
import image23 from "../image/col57.png";
import image24 from "../image/col58.png";
import image25 from "../image/col59.png";
import image26 from "../image/col60.png";
import image27 from "../image/col61.png";
import image28 from "../image/col62.png";
import image29 from "../image/col63.png";
import image30 from "../image/col64.png";
import image31 from "../image/col65.png";
import image32 from "../image/col66.png";
import image33 from "../image/col67.png";
import image34 from "../image/col68.png";
import image35 from "../image/col69.png";
import image36 from "../image/col70.png";
import image37 from "../image/col71.png";
import image38 from "../image/col72.png";
import image39 from "../image/col73.png";
import image40 from "../image/col74.png";

import Footer from "./footer";

const ImageScrollSection = () => {
  const handleClickScroll = (targetId) => {
    const targetElement = document.getElementById(`image-${targetId}-content`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [activeItem, setActiveItem] = useState('null'); 

  const handleItemClick = (itemName) => {
      setActiveItem(itemName); // Update active item state
    };

  return (
    <>
    
    <div className="image-scroll-section">
     
      <div className="image-cont">
      <div className="whit3" onClick={() => handleClickScroll(1)}>
      <img
          src={image14}
          alt="Image 5"
          className="image22"
          
        />
      <p className={activeItem === 'ADD App ' ? 'active' : ''} onClick={() => handleItemClick('ADD App ')}>
      <span className='whit'>ADDA <span className='whit1'>App</span></span>
        </p>
        </div>

        <div className="whit3" onClick={() => handleClickScroll(2)}>
        <img
          src={image11}
          alt="Image 2"
          className="image22"
         
        />
        <p className={activeItem === 'ADD ERP' ? 'active' : ''} onClick={() => handleItemClick('ADD ERP')}>
      <span className='whit'>ADDA <span className='whit1'>ERP</span></span>
        </p>
        </div>

        <div className="whit3" onClick={() => handleClickScroll(3)}>
        <img
          src={image12}
          alt="Image 3"
          className="image22"
          
        />
        <p className={activeItem === 'ADD Gatekeeper' ? 'active' : ''} onClick={() => handleItemClick('ADD Gatekeeper ')}>
      <span className='whit'>ADDA <span className='whit1'>Gatekeeper</span></span>
        </p>
        </div>

        <div className="whit3" onClick={() => handleClickScroll(4)}>
        <img src={image13} alt="Image 4" className="image22" />
        <p className={activeItem === 'ADD App Books' ? 'active' : ''} onClick={() => handleItemClick('ADD App Books')}>
      <span className='whit'>ADDA <span className='whit1'>Books</span></span>
        </p>
       </div>
       
      </div>
      
      
        <div id="image-1-content" className="image-content76 bg-white">
          <h3 className='text14'>Comprehensive Suite of Software for Managing Apartment/Villa Communities, Smart Cities and<p>Townships!</p> </h3>
          <p className='text15'>We bring to you Global Best Practices via our Software!</p>
          <div className='image12'>
          <img src={image} alt="Your Image" className="img-fluid1" />
          </div>
        </div>
        <div id="image-2-content" className="image-content">
        <div className="centered-container88">
      <h1 className="centered-heading88"><p className='text16'>ADDA - The RESIDENT SuperApp</p></h1>
      <h4 className='text17'>Happy Communities are made of Delightful Resident Experience! Here's the APP Devoted to it!</h4>
      <div className="row">
        <div className="column column88">
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
        <div className="column column88">
          <img src={image3} alt="Example" className="image66" />

          <div className='text33 mt-0 '>
             <p>Join  <span33>13,00,000 Residents, </span33> across 3,500+<span33>Housing Societies</span33></p>
             
             </div>
          <a href="/Get-start"> <button className="custom-button96 mt-0 ">Get Started </button></a>
          <div className='space'>
            
          </div>
        </div>
        <div className="column column88">
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
      <div className='sd'></div>
    </div>
    
        </div>
        
      
      <div id="image-3-content" className="image-content33">
      <div className="centered-container33">
      <h1 className="centered-heading33"><p className='text16'>ADDA Gatekeeper</p></h1>
      <h4 className='text17'>Bring your Apartment Gate Online with Visitor Management System.
Welcome your Guests with Warmth, Bid GoodBye to Trespassers.</h4>

      <div className="row side34">
        <div className="column column33">
        <h3  className='text20'>FOR RESIDENTS</h3>
        <p className='text19'>Manage Visitors & Parcels from your Phone, Search for New Helpers,

Track attendance of Helpers</p>
<p></p>
<p></p>
<h3  className='text20'>FOR ADMIN</h3>
        <p className='text19'>
With this Society Security App, Monitor Security Processes, Investigate incidents from anywhere

and much more</p>

<h1 className='text20'>POPULAR FEATURES</h1>
<div className='content35'>
<img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
Visitor Management
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 IOT Based Staff Management
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Move in / Move out Management
 
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Security Hardware Integration
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 
IOT Based Vehicle Access Management
 
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />

 Emergency Management

 
 <p className='imag17'>

 <img src={image17} alt="Example" className="image33" />
 </p>


</div>
        </div>
        <div className=" column column35">
          <img src={image15} alt="Example" className="image33" />
          <div className='text33'>
             <p>Validated <span33>5,000,000+ Visitor</span33> Entries.</p>
             <p>Managed <span33>3,500,000+ Staff/Helper </span33>Checkins</p>
             </div>
         
          
          <a href="/contact"> <button className="custom-button33">Request Demo </button></a>
          <a href="/ "> <button className="custom-button333">Know More </button></a>
          
        </div>
       
      </div>
    </div>
        </div>
        <div id="image-4-content" className="image-content33 bg-light mt-5">
      <div className="centered-container33">
      <h1 className="centered-heading33"><p className='text16'>ADDA ERP</p></h1>
      <h4 className='text17'>With this Most Used Apartment Management Software, bring in Global Best Practices, Automation and Transparency.
Provide True Convenience in Community Living to Residents.</h4>

      <div className="row side34">
        <div className="column column33">
        <h3  className='text20'>FOR RESIDENTS</h3>
        <p className='text19'>Official Communication, Community Helpdesk, Chat,

Maintenance Bill Payment, Account Statement,

Documents, Parking Management</p>
<p></p>
<p></p>
<h3  className='text20'>FOR ADMIN</h3>
        <p className='text19'>Complete Accounting (ADDA books), Facility Management,

Automatic Bill Generation and AR entries,

Integrated Society Management System</p>

<h1 className='text20'>POPULAR FEATURES</h1>
<div className='content35'>
<img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Community Communication
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Helpdesk
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Accounting
 
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Expense Management
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Billing & Payment Gateway
 
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
Asset & Inventory
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Admin Reports
 
 <p className='imag17'>

 <img src={image19} alt="Example" className="image33" />
 </p>


</div>
        </div>
        <div className="column column35">
          <img src={image18} alt="Example" className="image33" />
          <div className='text33'>
             <p> <span33>Billing of $465,000,000 </span33> done using Platform</p>
             <p>Managed Payment Gateway  <span33> Transactions worth $80,000,000+ </span33>from Owners/Tenants.</p>
             </div>
         
          
          <a href="/contact"> <button className="custom-button33">Request Demo</button></a>
          <a href="/ "> <button className="custom-button333">Know More </button></a>
          
        </div>
       
      </div>
    </div>
        </div>

        <div className="image-content33 mt-5 ">
      <div className="centered-container33">
      <h1 className="centered-heading33"><p className='text16'>ADDA Clubhouse</p></h1>
      <h4 className='text17'>Your Clubhouse is your Community’s Greatest Asset. Use the Best Software to manage it!</h4>

      <div className="row side34">
        <div className=" column column33">
        <h3  className='text20'>FOR RESIDENTS</h3>
        <p className='text19'>Book and pay for Facilities, Participate in Hobby classes</p>
<p></p>
<p></p>
<h3  className='text20'>FOR ADMIN</h3>
        <p className='text19'>Augment Revenues, Ensure best Utilization of Facilities

Fool-proof access management</p>

<h1 className='text20'>POPULAR FEATURES</h1>
<div className='content35'>
<img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
Online Facility Booking
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Multi Communities One Clubhouse Architecture
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
 Separate Books of Accounts For Association and Clubhouse
 
 <img src={image16} alt="Your Image" className="img-fluid35 mx-2 mb-1" />

 IOT based Access Control
 

 
 <p className='imag17'>

 <img src={image21} alt="Example" className="image33" />
 </p>


</div>
        </div>
        <div className=" column column35">
          <img src={image20} alt="Example" className="image33" />
          <div className='text33'>
          <a href="/contact"> <button className="custom-button33">Request Demo </button></a>
          <a href="/ "> <button className="custom-button333">Know More </button></a>
             </div>
          
        </div>
       
       
      </div>
    </div>
        </div>

       
    </div>
    <div className='buttompage'>
          <div className='row'>
            <h1 className='textb'>Are you a Builder, 
            OAM, Management Agent or Property Manager, 
            Managing Multiple Apartment/ Villa/ Office Properties?</h1>
            <p className='textb1'>Are you someone who more than anything else values Customer Experience?
Do have a look at  Enterprise Edition - it’s tailor-made for you!</p>
<p className='textb2'><a href="/know-more"> <button className="custom-buttonb">Know More </button></a></p>

          </div>
        </div>
        <div className='textb3 mt-5 '>

        <div className='buttompage331'>
          <div className='row'>
            <h1 className='text331'>Trusted by over 3,500+ Residential Communities around the world</h1>
           <p className='text331'>
           <div className="column column35 delete">
          <img src={image23} alt="Example" className="logoimage mx-5 "/>
          <img src={image24} alt="Example" className="logoimage mx-5 "/>
          <img src={image29} alt="Example" className="logoimage mx-5 "/>
          <img src={image26} alt="Example" className="logoimage mx-5 "/>
          <img src={image39} alt="Example" className="logoimage mx-5 "/>
          <img src={image40} alt="Example" className="logoimage mx-5 "/>
          
          
        </div>
        <div className="column column35 delete2">
          <img src={image25} alt="Example" className="logoimage mx-5"/>
          <img src={image30} alt="Example" className="logoimage mx-5 "/>
          <img src={image31} alt="Example" className="logoimage mx-5 "/>
          <img src={image32} alt="Example" className="logoimage mx-5 "/>
          <img src={image33} alt="Example" className="logoimage mx-5 "/>
          <img src={image34} alt="Example" className="logoimage mx-5 "/>
          
        </div>
        <div className="column column35 delete3">
          <img src={image35} alt="Example" className="logoimage mx-5"/>
          <img src={image36} alt="Example" className="logoimage mx-5 "/>
          <img src={image37} alt="Example" className="logoimage mx-5 "/>
          <img src={image38} alt="Example" className="logoimage mx-5 "/>
          <img src={image27} alt="Example" className="logoimage mx-5 "/>
          <img src={image28} alt="Example" className="logoimage mx-5 "/>
          
          
        </div>
           </p>

          </div>
        </div>


        </div>
        <Footer/>
    </>
  );
};

export default ImageScrollSection;
