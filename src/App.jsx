import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './Components/layout/Footer';
import Hero from './Components/sections/Hero';
import About from './Components/sections/About';
import NewInStore from './Components/sections/NewInStore';
import NewsletterSection from './Components/sections/NewsLetter';
import BestShop from './Components/sections/BestShop';
import ProductShowcase from './Components/sections/ProductShowcase';
import Testimonials from './Components/sections/Testimonials';
import Login from './Components/common/Login';
function LandingPage() {
  return(
    <>
      <Hero/>
      <About/>
      <NewInStore/>
      <BestShop/>
      <ProductShowcase/>
      <Testimonials/>
      <NewsletterSection/>
      <Footer/>
    </>
  )
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Landing page */}
        <Route path="/" element={<LandingPage />} />

        {/* Login page */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}


export default App;
  