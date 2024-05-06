import React from 'react';
import Footer from './footer';

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
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
                  <a className="nav-link" href="/blog">
                    Bolg
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
    </>
  );
};

export default Customerlove;
