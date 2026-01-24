function Footer() {
  return (
    <footer className="footer w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-secondary mt-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-neutralDark">
       <div>
      <ul>
        <h3 className="font-bold">Our Products</h3>
        <li><a href="#">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Accessories</a></li>
        <li><a href="#">Beauty</a></li>
      </ul>
      </div>
      <div >
      <ul>
        <h3 className="font-bold">Customer Care</h3>
        <li><a href="#">Shipping & Returns</a></li>
        <li><a href="#">FAQs</a></li>
        <li><a href="#">Privacy Policy</a></li>
      </ul>
      </div>
      <div>
        <ul>
        <h3 className="font-bold">Contacts</h3>
        <li><a href="#">Instagram</a></li> 
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Pinterest</a></li>
        </ul>   
      </div>
      </div>
      <div>
    <p className="text-center font-semibold mt-3">©{new Date().getFullYear()}Pure Canvas.Empowering Fashion.</p>
      </div>
    </footer>
  );
}
export default Footer;