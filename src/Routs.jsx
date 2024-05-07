import React from 'react'
import MainComponent from './MainComponent'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInForm from './components/Sign';
import ContactForm from './components/simplecontactfrom';
import StartFreeTrialForm from './components/Startfree';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Customercomments from './components/Customercomments';
import BlogDemo from './components/BlogDemo';
import Home from './components/Home';
import Getstart from './components/Getstart';
import Knowmore from './components/Knowmore';
import Future from './components/Future';
import Aboutus from './components/Aboutus';
import Terms from './components/Terms';
import Create from './components/Create';






const Routs = () => {
  return (
    <>

<BrowserRouter>
      <Routes>
        
          <Route index element={<MainComponent />} />
          
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/login" element={<SignInForm />} />
          <Route path="/search-name" element={<StartFreeTrialForm />} />
          <Route path="/" element={<Navbar />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/customer-love" element={<Customercomments />} />
          <Route path="/blog" element={<BlogDemo/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/Get-start" element={<Getstart/>} />
          <Route path="/know-more" element={<Knowmore/>} />
          <Route path="/future" element={<Future/>} />
          <Route path="/about-us" element={<Aboutus/>} />
          <Route path="/sing-up" element={<Create/>} />
          
          <Route path="/terms-and-conditions" element={<Terms/>} />
          
         
          
          
          
        
          
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routs
