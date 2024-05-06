import React from 'react';
import image from "../image/col92.png";
import image1 from "../image/col93.png";
import image2 from "../image/col94.png";
import image3 from "../image/col95.png";
import image4 from "../image/col96.png";
import image5 from "../image/col97.png";
import Footer from './footer';

const ImageScrollSection = () => {
  const handleClickScroll = (targetId) => {
    const targetElement = document.getElementById(`image-${targetId}-content`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
    
      <div className="container-fluid updown ">
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand " href="/know-more">
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
        
        <div className='container-fluid down34'>
          <div className='row down35'>
    <h1 className='smoot'>Has features for each of the following Stakeholders...</h1>
    <div className="image-scroll-section">
      <div className="image-row38">
        <img
          src={image}
          alt="Image 1"
          className="image38"
          onClick={() => handleClickScroll(1)}

        />
        <img
          src={image1}
          alt="Image 2"
          className="image38"
          onClick={() => handleClickScroll(2)}
        />
        <img
          src={image2}
          alt="Image 3"
          className="image38"
          onClick={() => handleClickScroll(3)}
        />
       
      </div>
      <div className='border1'></div>
      <div className="content-section38">
        <div id="image-1-content" className="image-content38">
        <div className="centered-column01">
          <h2 className="dec">Bird's Eye View of all Properties</h2>
          <h4 className="dec1">Dream Come True for your HQ</h4>
        </div>
        <div className="column-group01 mar">
          <div className="inner-column02">
          <h1 className='dec2'>Central Command Centre</h1>
          <p className='dec3'>Get a mega dashboard in the ADDA Enterprise edition where you can find all the details for all your properties. ADDA Enterprise Admin Dashboard is a 1-stop destination for builders, 
            property managers and facility managers 
            where important details of their properties are available.</p>
           
    
          </div>
          <div className="inner-column01">
            
 <img src={image3} alt="Example" className="image33" />
          </div>
        </div>
        </div>
        <div id="image-2-content" className="image-content38 bg-light ">
        <div className="column-group01 mar">
        <div className="inner-column01">
            
            <img src={image4} alt="Example" className="image33 down12" />
                     </div>
          <div className="inner-column02">
          <h1 className='dec2'>Central Broadcast</h1>
          <p className='dec3'>Single touch broadcast to all
           properties targeted groups like Owners, Tenants and Management Committee members.</p>
           
    
          </div>
          
        </div>
        </div>
        <div id="image-3-content" className="image-content38 ">
        <div className="column-group01 ">
        <div className="inner-column02">
        <h1 className='dec2'>Central Broadcast</h1>
          <p className='dec3'>Single touch broadcast to all
           properties targeted groups like Owners, Tenants and Management Committee members.</p>
            
                     </div>
          <div className="inner-column01">
          <img src={image5} alt="Example" className="image33" />
           
    
          </div>
          
        </div>
        </div>
      </div>
    </div>
    <div className='but'>
    <a href="/contact"> <button className="custom-button33">Request Demo </button></a>
    </div>
    </div>
   
    </div>
    <div className='foo'>
    <Footer/>   
    </div>
    </>
  );
};

export default ImageScrollSection;
