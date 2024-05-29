import React, { useEffect, useState } from "react";

import { Helmet } from 'react-helmet';
import image from "../image/col1.png";
import image5 from "../image/col7.png";
import image6 from "../image/col9.png";
import image7 from "../image/col10.png";
import image1 from "../image/col2.png";
import image2 from "../image/col3.png";
import image3 from "../image/col4.png";
import image4 from "../image/col5.png";
import image11 from "../image/col11.png";
import image12 from "../image/col12.png";
import image13 from "../image/col13.png";
import image14 from "../image/col14.png";
import image15 from "../image/col15.png";
import image16 from "../image/col16.png";
import image17 from "../image/col17.png";
import image18 from "../image/col18.png";
import image19 from "../image/col19.png";
import image20 from "../image/col20.png";
import image21 from "../image/col21.png";
import image22 from "../image/col22.png";
import image23 from "../image/col23.png";
import image24 from "../image/col24.png";
import image25 from "../image/col25.png";

          
import Footer from "./footer";
import Toptodown from "./Toptodown";
import Nav from "./Nav";


 


const Navbar = () => {

   
  const [activeContent, setActiveContent] = useState(
    <div className="row adda" >
    <h1 className="title1" mt-5 >Come Together As a Community</h1>
    <h5 className="title2">The Private Social Network for your Apartment/Housing Society /Gated <p>Community</p></h5>
    <div className="col-lg-6 p-3 ">
      <div className="sideElement">
        <h1 className="title3">Connect With Community Neighbors/Fellow Owners <p>& Association</p> </h1>
        <h5 className="contant2 ">
        ADDA provides a Private Social Networking Platfrom which helps connect Neighbors. Be it Important Discussions 
        regarding the Community, or asking Neighbors for Advice, or staying updated regarding all Activities
        
       in the Community; Staying Connected makes Community Living not only Fun, but a lot more Secure!
        </h5>
      </div>
    </div>
    <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
      <img src={image5} alt="Your Image" className="img-fluid " />
    </div>
    <div class="row" mt-4 >
 <div class="col p-3 "><h4 className="title4">Forum Discussion</h4>
 <p className="contant3">Threaded Conversation Forum. Put up important Updates on Notice Boards</p>
 </div>
 <div class="col p-3 "><h4 className="title4">Online Polls</h4>
 <p className="contant3">Gather opinion of Community members on various matters of Importance</p>
 </div>
 <div class="col p-3 "><h4 className="title4">Groups</h4>
 <p className="contant3">Connect with Neighbors with Similar Interests like Sports, Hobbies, Volunteer Work</p>
 </div>
 <div class="col p-3 "><h4 className="title4">Photos, Albums</h4>
 <p className="contant3">Share photos with Neighbors, preserve memories of Community Events</p>
 </div>

</div>
<div className="row bg-light ">
<div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
      <img src={image6} alt="Your Image" className="img-fluid" />
    </div>
    <div className="col-lg-6 p-3 ">
      <div className="sideElement">
        <h1 className="title3">The One Stop Apartment Management System  for Owners & Tenants </h1>
        <h5 className="contant2 ">
        Managing all Information related to your apartment can be a task. More so, if you have
         multiple properties or are living away from your Property, starting from Raising Maintenance
          Requests, Making Payments of Property Dues, Maintaining Accounts History
         to Managing Tenants' Data, Apartment Management App - ADDA makes it super easy to manage it all.
        </h5>
      </div>
    </div>
   
    <div class="row" mt-4 >
 <div class="col p-3 "><h4 className="title4">Payments</h4>
 <p className="contant3">Integrated Payment Gateway, gives Residents multiple choices for Payments, Residents get Instant Receipts</p>
 </div>
 <div class="col p-3 "><h4 className="title4">Document Management</h4>
 <p className="contant3">Helps maintain all Property and Tenancy related Documents in one place. Easy Sharing Options with other Members</p>
 </div>
 <div class="col p-3 "><h4 className="title4">Property Management</h4>
 <p className="contant3">Ability to Manage Multiple Properties, Tenants and Apartment related data like Family Members, Vehicles, Parking</p>
 </div>
 <div class="col p-3 "><h4 className="title4">Helpdesk</h4>
 <p className="contant3">Easily raise Maintenance Requests and track to Quick Closure. Attach photos, provide comments & feedback</p>
 </div>


</div> 
</div>

<div className="row ">
   

   <div className="col-lg-6 p-3 ">
     <div className="sideElement">
       <h1 className="title3">Unlock the Benefits of<p>Living in a Housing Society</p>  </h1>
       <h5 className="contant2 ">
       Whether it's about the new Yoga Classes in the Clubhouse, or the Neighbors 
       giving away pre-used Books and Toys - information about all Community 
       Activities is available right on the ADDA App. Get the most out of living in a community with ADDA.
       </h5>
     </div>
   </div>
   <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
     <img src={image7} alt="Your Image" className="img-fluid" />
   </div>
  
   <div class="row" mt-4 >
<div class="col p-3 "><h4 className="title4">Discover</h4>
<p className="contant3">Buy, Rent or Sell anything from Furniture, Toys to Apartments. Checkout Local Vendors Recommended by Neighbors</p>
</div>
<div class="col p-3 "><h4 className="title4">Facilities</h4>
<p className="contant3">Ability to check availability of Common Facilities, including options to make online payments to confirm booking</p>
</div>
<div class="col p-3 "><h4 className="title4">Activities</h4>
<p className="contant3">Do not miss out on any Activities - Events, Celebrations, Hobby sessions happening in the Community</p>
</div>
<div class="col p-3 "><h4 className="title4">Directory</h4>
<p className="contant3">Directory of all neighbors - Setup Privacy Options, have Direct Chat with Neighbors. List of Emergency Contacts</p>
</div>

</div>
 </div>
 <div className="requestb">
 <a href="contact"> <button className="custom-button33">Request Demo </button></a>
 </div>
  </div>

  );
  const [activeImageId, setActiveImageId] = useState(1);

  const images = [
    { id: 1, src: image1, content: 
      <div className="row adda" >
      <h1 className="title1" mt-5 >Come Together As a Community</h1>
      <h5 className="title2">The Private Social Network for your Apartment/Housing Society /Gated <p>Community</p></h5>
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">Connect With Community Neighbors/Fellow Owners <p>& Association</p> </h1>
          <h5 className="contant2 ">
          ADDA provides a Private Social Networking Platfrom which helps connect Neighbors. Be it Important Discussions 
          regarding the Community, or asking Neighbors for Advice, or staying updated regarding all Activities
          
         in the Community; Staying Connected makes Community Living not only Fun, but a lot more Secure!
          </h5>
        </div>
      </div>
      <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image5} alt="Your Image" className="img-fluid " />
      </div>
      <div class="row" mt-4 >
   <div class="col p-3 "><h4 className="title4">Forum Discussion</h4>
   <p className="contant3">Threaded Conversation Forum. Put up important Updates on Notice Boards</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Online Polls</h4>
   <p className="contant3">Gather opinion of Community members on various matters of Importance</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Groups</h4>
   <p className="contant3">Connect with Neighbors with Similar Interests like Sports, Hobbies, Volunteer Work</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Photos, Albums</h4>
   <p className="contant3">Share photos with Neighbors, preserve memories of Community Events</p>
   </div>
  
 </div>
<div className="row bg-light ">
 <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image6} alt="Your Image" className="img-fluid" />
      </div>
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">The One Stop Apartment Management System  for Owners & Tenants </h1>
          <h5 className="contant2 ">
          Managing all Information related to your apartment can be a task. More so, if you have
           multiple properties or are living away from your Property, starting from Raising Maintenance
            Requests, Making Payments of Property Dues, Maintaining Accounts History
           to Managing Tenants' Data, Apartment Management App - ADDA makes it super easy to manage it all.
          </h5>
        </div>
      </div>
     
      <div class="row" mt-4 >
   <div class="col p-3 "><h4 className="title4">Payments</h4>
   <p className="contant3">Integrated Payment Gateway, gives Residents multiple choices for Payments, Residents get Instant Receipts</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Document Management</h4>
   <p className="contant3">Helps maintain all Property and Tenancy related Documents in one place. Easy Sharing Options with other Members</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Property Management</h4>
   <p className="contant3">Ability to Manage Multiple Properties, Tenants and Apartment related data like Family Members, Vehicles, Parking</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Helpdesk</h4>
   <p className="contant3">Easily raise Maintenance Requests and track to Quick Closure. Attach photos, provide comments & feedback</p>
   </div>
  

 </div> 
 </div>

 <div className="row ">
     
 
     <div className="col-lg-6 p-3 ">
       <div className="sideElement">
         <h1 className="title3">Unlock the Benefits of<p>Living in a Housing Society</p>  </h1>
         <h5 className="contant2 ">
         Whether it's about the new Yoga Classes in the Clubhouse, or the Neighbors 
         giving away pre-used Books and Toys - information about all Community 
         Activities is available right on the ADDA App. Get the most out of living in a community with ADDA.
         </h5>
       </div>
     </div>
     <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
       <img src={image7} alt="Your Image" className="img-fluid" />
     </div>
    
     <div class="row" mt-4 >
  <div class="col p-3 "><h4 className="title4">Discover</h4>
  <p className="contant3">Buy, Rent or Sell anything from Furniture, Toys to Apartments. Checkout Local Vendors Recommended by Neighbors</p>
  </div>
  <div class="col p-3 "><h4 className="title4">Facilities</h4>
  <p className="contant3">Ability to check availability of Common Facilities, including options to make online payments to confirm booking</p>
  </div>
  <div class="col p-3 "><h4 className="title4">Activities</h4>
  <p className="contant3">Do not miss out on any Activities - Events, Celebrations, Hobby sessions happening in the Community</p>
  </div>
  <div class="col p-3 "><h4 className="title4">Directory</h4>
  <p className="contant3">Directory of all neighbors - Setup Privacy Options, have Direct Chat with Neighbors. List of Emergency Contacts</p>
  </div>
 
</div>
   </div>
   <div className="requestb">
   <a href="contact"> <button className="custom-button33">Request Demo </button></a>
   </div>
    </div>

  },
    { id: 2, src: image2, content: 
      <div className="row side">
      <h1 className="title1" mt-5 >Manage Well, Save on Time & Cost</h1>
      <h5 className="title2">The property you manage is worth millions.
       You deserve the best society <p>management software to handle it.</p></h5>
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">Units & Users </h1>
          <h5 className="contant2 ">
         As an Association member, Community / Property Manager, 
         this module will help you manage all Units & Users data from one Single
          birds eye view! Send broadcasts to all Owners, Tenants and manage access of all users on ADDA platform
          </h5>
        </div>
      </div>
      <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image11} alt="Your Image" className="img-fluid1" />
      </div>
      <div className="row bg-light">
       
       <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
              <img src={image12} alt="Your Image" className="img-fluid" />
            </div>
            <div className="col-lg-6 p-3 ">
              <div className="sideElement">
                <h1 className="title3">Facility Booking </h1>
                <h5 className="contant2 ">
                Association gets powerful options to setup Common 
                Facilities for Online Booking and also Configure Booking Parameters.
                 For Residents this provides Immense Convenience as they can easily
                  check Availability and Book by making Payments Online.
                 For Associations this Streamlines Processes and Increases Revenue by avoiding ad-hoc booking requests!
                </h5>
              </div>
            </div>
           
          
          </div>
          <div className="row ">
           
       
            <div className="col-lg-6 p-3 ">
              <div className="sideElement">
                <h1 className="title3">Helpdesk Tracker  </h1>
                <h5 className="contant2 ">
                Forget the hassles
                 of manually managing maintenance complaints and escalations from Residents!
                 <p>Get the ability to Centrally track Complaints, Suggestions and Requests. Set up Task
                   Owners, Timelines and Escalation Matrix.
                    Bring in Speedy Resolution of Issues resulting in Delight of Residents</p>
                </h5>
              </div>
            </div>
            <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
              <img src={image13} alt="Your Image" className="img-fluid" />
            </div>
           
           
          </div>
          <div className="row bg-light">
           
       <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
              <img src={image14} alt="Your Image" className="img-fluid" />
            </div>
            <div className="col-lg-6 p-3 ">
              <div className="sideElement">
                <h1 className="title3">Asset & Inventory Management </h1>
                <h5 className="contant2 ">
                With this Society Management System's One Central Module, 
                now maintain details of all Assets in the Apartment Complex; 
                Set up Maintenance Reminders, maintain related Documents, Service History, Complaints Record.
                 Save lakhs in repair and breakdown costs, increase longevity of assets and add value to the property.
                </h5>
              </div>
            </div>
           
          
          </div>
          <div class="row " mt-4 >
         <div class="col p-3 ">
         <img src={image15} alt="Your Image" className="image-fluid3" />
          <h4 className="title4">Projects & Task Manager</h4>
         <p className="contant3">Manage meetings, take & circulate MoMs, reports. Automatic Email and SMS Reminders</p>
         </div>
         <div class="col p-3 ">
         <img src={image16} alt="Your Image" className="image-fluid3" />
          <h4 className="title4">Document Management</h4>
         <p className="contant3">Central storage space for all property, association, resident related documents</p>
         </div>
         <div class="col p-3 ">
         <img src={image17} alt="Your Image" className="image-fluid3" />
          <h4 className="title4">Vendor Management</h4>
         <p className="contant3">Complete Management of Vendors, vendor database. Invoices, payments history</p>
         </div>
         
        
       </div>
       <div className="requestb">
     <a href="contact"> <button className="custom-button33">Request Demo </button></a>
     </div>
      </div>
    },
    { id: 3, src: image3, content: 
      <div className="row">
      <h1 className="title1" mt-5 >World's Most Used Association <p>Accounting Software</p></h1>
      <h5 className="title2">Keep money matters on your fingertips, pave way for convenient &<p> transparent accounting.</p></h5>
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">Billing & Collection Automation </h1>
          <h5 className="contant2 ">
          With this Apartment Billing Software, achieve on time & smooth billing with automated invoicing with pre configured formulae for calculating dues. Integrated Payment Gateway, gives residents multiple choices for payments
           & instant receipts are generated. Online Defaulter Follow-up options help Increase your Collection.
          </h5>
        </div>
      </div>
      <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image18} alt="Your Image" className="img-fluid1" />
      </div>
      
 <div className="row bg-light">
     
 <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image19} alt="Your Image" className="img-fluid" />
      </div>
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">Expense Management </h1>
          <h5 className="contant2 ">
          Is the Maintenance due charged to residents making up for your Expenses? 
          What are the areas of maximum spend? The Budgeting Module 
          and Extensive Expense Reports, helps in giving visibility to expenses and better strategise
           ideas to reduce costs.
           <p>Manage Vendor Invoicing and Payments, Bulk Upload Expenses, Create and Manage Purchase Requests.</p>
          </h5>
        </div>
      </div>
     
    
    </div>
    <div className="row ">
     
 
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">Integrated Payment <p>Gateway</p>
</h1>
          <h5 className="contant2 ">
          ADDA has integration with many major payment gateways in multiple geographies. This enables Apartment,
           Condo or Villa Owners and Tenants to easily make payment for dues, on the go, from the ADDA App.
           <p>Instant receipts are generated and Dues get cleared off. Facility Booking, Move in/out charges,
             Festival ticketing can all be done easily through Payment Gateway</p>
          </h5>
        </div>
      </div>
      <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image20} alt="Your Image" className="img-fluid" />
      </div>
     
     
    </div>
    
    <div class="row bg-light  " mt-4 >
   <div class="col p-3 ">
   <img src={image21} alt="Your Image" className="image-fluid3" />
    <h4 className="title4">Bank & Cash</h4>
   <p className="contant3">Bank Reconciliation, visibility
    into the Book Balance as well as Bank Balance. Multiple Petty Cash accounts can be tracked</p>
   </div>
   <div class="col p-3 ">
   <img src={image22} alt="Your Image" className="image-fluid3" />
    <h4 className="title4">General Ledger</h4>
   <p className="contant3">End to End Accounting from defining Chart of Accounts to generation of Trial Balance and Final Balance Sheets.</p>
   </div>
   <div class="col p-3 ">
   <img src={image23} alt="Your Image" className="image-fluid3" />
    <h4 className="title4">Utility Tracker</h4>
   <p className="contant3">Setup and Maintaining Separate Billing of Utilities like Piped Gas, Water, Electricity, Diesel Generator, etc.</p>
   </div>
   
  
 </div>
 <div className="requestb">
     <a href="contact"> <button className="custom-button33">Request Demo </button></a>
     </div>
    </div>
    },
    { id: 4, src: image4, content: 
      <div className="row">
      <h1 className="title1" mt-5 >Build Trust through Effective <p>Communication</p></h1>
      <h5 className="title2">One of the Key Success Factors for Apartment Association Members /
      <p>Property Manager / OAMS is Effective Communication with Owners.</p> </h5>
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">Broadcasts </h1>
          <h5 className="contant2 ">
         ADDA provides easy Broadcast options to Communicate with Owners and Tenants. Be it Emergency Drills, 
         updates regarding Community Celebrations or Important Community related Decisions - keep everyone updated.
          </h5>
        </div>
      </div>
      <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image24} alt="Your Image" className="img-fluid" />
      </div>
      <div class="row" mt-4 >
   <div class="col p-3 "><h4 className="title4">Broadcast by Sticky</h4>
   <p className="contant3">Put up Important Announcements on the Online Sticky board</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Email Broadcasts</h4>
   <p className="contant3">Send Instant or Schedule Email Broadcasts to all Members</p>
   </div>
   <div class="col p-3 "><h4 className="title4">SMS Broadcast</h4>
   <p className="contant3">Send SMS broadcasts to instantly reach all Members</p>
   </div>
   <div class="col p-3 "><h4 className="title4">Mobile Notifications</h4>
   <p className="contant3">For the Smart phone users, send Broadcasts as Push Notifications</p>
   </div>
  
 </div>
 <div className="row bg-light ">
     
 <div className="col-lg-6 p-3 d-flex justify-content-center align-items-center">
        <img src={image25} alt="Your Image" className="img-fluid" />
      </div>
      <div className="col-lg-6 p-3 ">
        <div className="sideElement">
          <h1 className="title3">Internal Ad Manager </h1>
          <h5 className="contant2 ">
          Several businesses or freelancers are often interested in advertising to dwellers of Apartment,
           Condo or Villa Complexes. For Associations interested to open up this extra revenue source, ADDA provides
            an Ad Manager platfom.
           Manage content of Ads, expiry date and also price which in turn results in automatic accounting entries.
          </h5>
        </div>
      </div>
     
     
    </div>
    <div className="requestb">
     <a href="contact"> <button className="custom-button33">Request Demo </button></a>
     </div>
    
    </div>
    },
  ];

  const handleImageClick = (id, content) => {
    setActiveImageId(id);
    setActiveContent(content);
  };

  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    // Set showContent to true after a delay to trigger animation
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 500); // Adjust delay as needed

    // Clear timeout on component unmount
    return () => clearTimeout(timeout);
  }, []);

 


  return (
    <>
     <Helmet>
        <title>Free Society Management ,Sfotware For</title>
        <meta name="description" content="Description of your page goes here."
        />
      </Helmet>
      <div className="container-fluid side12 ">
       <Nav/>
        <div className="container-fluid ">
          <div className="row ">
            <div className="col-lg-6 p-3 sidedown">
              <div className="sideElement  ">
                <h1 className="mb-3">ADDA ERP</h1>
                <h5 className="contant">
                  The Most Robust Association Management Software for Apartment Associations.
                </h5>
              </div>
            </div>
            <div className="col-lg-6 p-3 main d-flex justify-content-center align-items-center sidedown">
              <img src={image} alt="Your Image" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid1">
      <div className={`container-fluid1 ${showContent ? 'slide-up' : ''}`}>
        <div className="row side">
       
          {images.map((image) => (
            <div key={image.id} className="col-lg-3 p-3 mt-5">
              <div
                className={`image-container ${activeImageId === image.id ? 'active' : ''}`}
                onClick={() => handleImageClick(image.id, image.content)}
              >
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className="img-fluid80"
                />
              </div>
            </div>
          ))}
        </div>
        </div>
        {activeContent && (
           <div className={`row side ${showContent ? 'slide-up' : ''}`}>
            <div className="col-lg-12 p-3">
              <div className="content">
                <p>{activeContent}</p>
              </div>
            </div>
            </div>
          
        )}
      </div>
      
      <Footer />
     <Toptodown/>
     
     
    </>
  );
};

export default Navbar;
