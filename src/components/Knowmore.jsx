import React from 'react';
import image from "../image/col84.png";
import image1 from "../image/col85.png";
import image2 from "../image/col86.png";
import image3 from "../image/col87.png";
import image4 from "../image/col88.png";
import image5 from "../image/col89.png";
import image6 from "../image/col28.png";
import image7 from "../image/col90.png";
import image8 from "../image/col42.png";
import image9 from "../image/col45.png";
import image10 from "../image/col39.png";
import Footer from "./footer";
import Toptodown from "./Toptodown";
import Nav from "./Nav";

const ResponsiveContainerLayout = () => {
  return (
    <>
    <div className="container-fluid b">
      <div className="container-fluid b">
       <Nav/>
        </div>
        </div>
   <div className='container104'>
    <div className='row101'>
      <div className='col-lg-12 text105'>
      <h1 className="heading-text01">For Builders/Property Managers<p>Who Value Customer</p>  Experience</h1>
      </div>
      </div>
      </div>
      <div className="row101 two-column-row01">
        <div className="column02">
          <h1 className='tex16'>Do You Manage Multiple <p>Apartment/ Villa/<span12>Office Properties?</span12>   Enterprise Is Just For You</p></h1>
        </div>
        <div className="column01">
        
          
          <p className='tex12'> <img src={image} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
          <span12>Cloud ERP</span12>Tailor-made for Property Managers.</p>
          <p className='tex12'> <img src={image1} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
          <span12>Central Online Data</span12>Private To Each Property.</p>
          <p className='tex12'> <img src={image2} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
          Multi - property <span12>Enterprise Dashboard.</span12></p>
          <p className='tex12'> <img src={image3} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
          Property<span12 >Mobile App</span12> For Residents.</p>
          <p className='tex12'> <img src={image4} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
          <span12>Admin</span12>Mobile App For Building Managers.</p>
          <div className='text33'>
          <a href="future"> <button className="custom-button33">All Features </button></a>
          
             </div>
        </div>

      </div>
      <div className="heading-two-columns-row01 bg-light">
        
        <div className="centered-column01 ">
          <h2 className="sub-heading01 ">You have given the Best Homes, Offices and Infrastructure to your Customers.</h2>
          <h4 className="sub-heading02 ">Now give them the best ONLINE experience as well!</h4>
        </div>
        <div className="column-group01">
          <div className="inner-column02">
          <h1 className='left1'> Your Customer’s View</h1>
            <div className='colum3'>
    
    <img src={image6} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    Official Updates For the Property
    </div>
    <div className='border mt-3'></div>
    <div className='colum3'>
    
    <img src={image6} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    View and Pay Dues Online
    </div>
    <div className='border mt-3'></div>
    <div className='colum3'>
    
    <img src={image6} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    Book Facility From Anywhere & Much More.
    </div>
    <div className='border mt-3'></div>
          </div>
          <div className="inner-column01">
            
 <img src={image5} alt="Example" className="image33" />
          </div>
        </div>
        <div className="column-group01">
          <div className="inner-column03 ">
          <img src={image7} alt="Example" className="image33" />
         
          </div>
          <div className="inner-column04 ">
            
          <h1 className='left1'> 
Your View</h1>
            <div className='colum3'>
    
    <img src={image6} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    Single Dashboard of Multiple Properties
    </div>
    <div className='border mt-3'></div>
    <div className='colum3'>
    
    <img src={image6} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    Advanced Broadcast, Helpdesk, Purchasing etc.
    </div>
    <div className='border mt-3'></div>
    <div className='colum3'>
    
    <img src={image6} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    
    Integration With Back-end Enterprise ORACLE etc.
    </div>
    <div className='border mt-3'></div>
          </div>
          
        </div>
        <div className="column-group01 bg-white mb-5 ">
          <div className="inner-column04 ">
          <h1 className='down87'> Why ADDA?</h1>
            <div className='colum3'>
    
    <img src={image10} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    Battle-Hardened Record of over
10 Years
    </div>
    <div className='border mt-3'></div>
    <div className='colum3'>
    
    <img src={image8} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    Fully Compliant with Real Estate Regulatory Authority (RERA) across multiple countries
    </div>
    <div className='border mt-3'></div>
    <div className='colum3'>
    
    <img src={image9} alt="Your Image" className="img-fluid35 mx-2 mb-1" />
    
    The most comprehensive Software in Apartment Management Segment
    </div>
    <div className='border mt-3'></div>
         
         
          </div>
          <div className="inner-column05  mt-5 ">
          <h1 className='inner12'>Experience True Convenience in Apartment Living</h1>
         
          </div>
          
        </div>
      </div>
    
      
    
     
  <Footer/> 
  <Toptodown/>
       </>
  );
};

export default ResponsiveContainerLayout;
