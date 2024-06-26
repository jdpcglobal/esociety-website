import React, { useState } from 'react';
import Nav from "./Nav";
function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [city, setCity] = useState('');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false); // State for handling submission confirmation
  const [contactApi, setContactApi] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)

    
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Phone Number:', phoneNumber);
    console.log('City:', city);
    console.log('Comments:', comments);

    // Reset form fields
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setCity('');
    setComments('');

    // Set submitted state to true to display thanks message
    setSubmitted(true);

    // You can optionally add additional logic here (e.g., API call, redirect)
  };


  const ContactApi = async () => {
    const payload = {
        // token: token
        name: fullName,
        phone: phoneNumber,
        email: email,
        message: comments,
        city: city,
        key: 'AKMKDLOCMDOABUBDDS'
    };
    console.log('NotificationScreen=====', payload)
    try {
        const response = await fetch(
            'https://jdpcglobal.com/api/save_contact_us', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
        if (!response.ok) {
            throw new Error('NotificationScreen Error');
        }

        const data = await response.json();

        console.log('ContactApi=====', data.message)
        setContactApi(data.message)
    } catch (error) {
        console.error('NotificationScreen Error Last');
    }
}

  return (
    <>
     <div className="container-fluid1 b">
      <div className="container-fluid1 b">
       <Nav/>
        </div>
        </div>
      <h1 className='contact-form-container1'>Let's Talk</h1>
      <div className="contact-form-container">
        <h2>Contact Us</h2>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="full name">Full Name</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label htmlFor="Number">Number</label>
            <div className="form-group">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="City">City</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
            <label htmlFor="Comments">Comments</label>
            <div className="form-group">
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                required
              ></textarea>
            </div>
            <button onClick={ContactApi} type="submit">Submit</button>
          </form>
        ) : (
          <p className='pops right1' >{contactApi}</p>
        )}
      </div>
      <div className='demo3'>
        <p>Copyright 2024 | All Rights Reserved</p>
      </div>
    </>
  );
}

export default ContactForm;
