import React from "react";

function Footer() {
  return (
    <footer className="footer w-full max-w-[1440px] mx-auto h-auto top-4944px8 bg-gray-500">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gaps-8 sm:grid-cols-2 gaps- mt-1">
       <div className="mt-5 ml-3">
      <ul>
        <h3 className="font-bold">Our Products</h3>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Beauty</a></li>
      </ul>
      </div>
      <div className="mt-5">
      <ul>
        <h3 className="font-bold">Customer Care</h3>
        <li><a href="#">Shipping & Returns</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      </div>
      <div className="mt-5">
        <ul>
        <h3 className="font-bold">Contacts</h3>
        <li><a href="#">Instagram</a></li> 
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Pinterest</a></li>
        </ul>   
      </div>
      </div>
      <div>
    <p className="text-center font-semibold">©{new Date().getFullYear()}Pure Canvas.Empowering Fashion.</p>
      </div>
    </footer>
  );
}
export default Footer;