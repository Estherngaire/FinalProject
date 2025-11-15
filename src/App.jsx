import React from 'react';
import './App.css';
import Footer from './Components/layout/Footer';
import Hero from './Components/sections/Hero';
import About from './Components/sections/About';
import NewInStore from './Components/sections/NewInStore';
import NewsletterSection from './Components/sections/NewsLetter';
import BestShop from './Components/sections/BestShop';
import ProductShowcase from './Components/sections/ProductShowcase';
import Testimonials from './Components/sections/Testimonials';

function App() {
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

export default App;
  