import React from 'react';
import image from "../image/col98.png";
import Footer from "./footer";
const BackgroundImageContainer = () => {
  return (
    <>
    <div className="main-container78">
      {/* First Container with Background Image */}
      <div className="background-container78">
        {/* Content inside the background container */}
        <div className="background-content79">
        <div className="container-fluid78  cont ">
      <div className="container-fluid78 ">
        <nav className="navbar navbar-expand-lg navbar-light p-3">
          <div className="container d-flex justify-content-between align-items-center">
            <a className="navbar-brand " href="/Home ">
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
                  <a className="nav-link" href="/customer-Love">
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
            <a className="btn btn-outline-success mx-0  "   href="/login">Sign In</a>
           
          </form>
                </li>
              </ul>
            </div>
          </div>
        </nav></div>
        </div>
        </div>
      </div>

      {/* Second Container with Two Columns (Text and Image) */}
      <div className="content-container ">
        {/* Column 1 - Text */}
        <div className="text-column78">
          <h2>About Us</h2>
          <p>
          ADDA in South Asian languages
           (pronounced "Uhd'da") means a community gathering having a friendly or intellectual discussion.
          </p>
          <p>It takes a village to raise a child. - African Proverb.</p>
          <p>A child always has a playmate here, every festival is celebrated by all, challenges of daily life are faced together as neighbors with a strong glue of shared common wealth - the value of their property,
             their life's savings, the place which is at the centre of their workplace, Apartment Communities are those Villages. A piece of land on which tens or hundreds of families live a harmonious life school, and favorite hangouts.</p>
        </div>
        {/* Column 2 - Image */}
        <div className="image-column">
          <img src={image} alt="Image" className="image78" />
        </div>
      </div>
      <div className='  conte '>
        <p>The Apartment Community is also a registered organisation - collecting common funds towards paying vendors for
             maintenance or building new infrastructure, paying Taxes, handling disputes internal as well as external.</p>
             <p>The biggest difference in this organisation being its leaders. These are the Owners elected to be in the Managing Committee. They spend scarce personal time in placing operational processes, evaluating expense decisions, executing projects for common welfare without looking for selfish gains. Some of them learn altogether new skill e.g., accounting to do this! While they receive loud applauses,
                 they also receive louder doubts that often make their job look thankless.</p>
                 <p>We believe in their courage, and their drive to build that dream neighborhood!</p>
                 <p>It is for these Apartment Residents and their Managing Committees that we in Team ADDA dedicate our life's work. We build the best Software Product for them on which they can run their Apartment Community - elegantly weaving together every aspect of Communication, Facility Management, Security, Accounting.</p>
<p>Started in 2009, we’ve been relentlessly working towards bringing residential communities together by connecting them online.</p>
      </div>
    </div>
    <div className='border12'></div>
    <div className='border13'>
        <Footer/>
    </div>
    </>
  );
};

export default BackgroundImageContainer;
