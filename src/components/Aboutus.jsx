import React from 'react';
import image from "../image/col98.png";
import Footer from "./footer";
import Toptodown from "./Toptodown";
import Nav from "./Nav";
const BackgroundImageContainer = () => {
  return (
    <>
    <Nav/>
    <div className="main-container78">
      {/* First Container with Background Image */}
      <div className="background-container78">
        {/* Content inside the background container */}
        <div className="background-content79">
        <div className="container-fluid78  cont ">
      <div className="container-fluid78 ">
      
      </div>
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
        <Toptodown/>
    </div>
    </>
  );
};

export default BackgroundImageContainer;
