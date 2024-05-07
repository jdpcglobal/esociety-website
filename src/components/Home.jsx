import React from 'react';
import Datascroll from "./Datascroll";
import Toptodown from "./Toptodown";
import Nav from "./Nav";


const CenteredContainer = () => {

    
  return (
    <>
  <div className="container-fluid101 ">
      <div className="container-fluid101 ">
       <Nav/>
        </div>
        </div>


    <div className="centered-container99">
      <h2 className="centered-heading99">HAPPY<p>COMMUNITY LIVING!</p>
</h2>
      <p className="centered-text99">The <span className='yellow'>Most Recommended Society Management Software</span> for Residential Communities</p>
      <div className="button-container99">
       <a href="/search-name"> <button className="custom-button99">Start Free Trial </button></a>
       <a href="/contact"> <button className="custom-button91">Schedule Free Demo</button></a>
      </div>
      <Datascroll/>
    </div>
    <Toptodown/>
    </>
  );
};

export default CenteredContainer;
