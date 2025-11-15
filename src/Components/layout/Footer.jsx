import React from "react";
function Footer() {
  return (
    <footer className="footer w-1440px h-513px top-4944px">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gaps-8 sm:grid-cols-2 gaps-8">
      <>
      <ul>
        <h3 class="h3">Our Products</h3>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Beauty</a></li>
      </ul>
      </>
      <>
      <ul>
        <h3 class="h3"><a href="#">Customer Care</a></h3>
        <li><a href="#">Shipping & Returns</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      </>
      <div className ="flex flex-col">
        <h3 class="h3">Contacts</h3>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Pinterest</a>
      </div>
      </div>
      <div>
    <p>©{new Date().getFullYear()}Pure Canvas.Empowering Fashion.</p>
      </div>
    </footer>
  );
}
export default Footer;