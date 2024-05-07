import React from 'react';
import Footer from './footer';
import Toptodown from "./Toptodown";
import Nav from "./Nav";

const Customerlove = () => {
  // Hardcoded comments
  const comments = [
    { id: 1, name: 'Vinod Sunder', comment: ' it has made a big difference to our accounting. It is now a lot easier to generate quarterly maintenance bills, monitor payments and keep professional looking records which will be accessible anytime from anywhere. As committees change, the formats will never change and it will bring in a lot of standardisation.' },
    { id: 2, name: 'Carol Mathias', comment: 'Working with team to migrate the data was really commendable as there were many challenges we faced and yet they were patient and guided us everytime we needed assistance. We wish them all the very best look forward to their continued support for our community. God bless you' },
    { id: 3, name: 'Monu Michael', comment: 'We found it very easy to use and thus, the community members are actively using the new application. The onboarding process was very smooth and all the queries were answered on time. Thank you team for all the valuable support.' },
  ];

  return (
    <>
<div className="container-fluid11 ">
      <div className="container-fluid11 ">
       <Nav/>
        </div>
        </div>

    <div className="container111">
      <h2 className="title title12">Why Our Customers Love Us</h2>
      <div className="customer-comments">
        {comments.map(({ id, name, comment }) => (
          <div key={id} className="comment">
            <div className="customer-id">Customer ID: {id}</div>
            <div className="customer-name">Customer Name: {name}</div>
            <div className="customer-comment">{comment}</div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    <Toptodown/>
    </>
  );
};

export default Customerlove;
