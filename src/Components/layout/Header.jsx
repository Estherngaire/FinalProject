function Header() {
    return (
    <header className="bg-primary text-neutralDark shadow-md p-3 mb-2">
     <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl md:2xl lg:3xl font-bold">Pure Canvas</h1>
    <nav>
        <ul className="flex gap-6 text-lg">

            <li><a href="#home" className="font-semibold">Home</a></li>
            <li><a href="#about" className="font-semibold">About</a></li>
            <li><a href="#features" className="font-semibold">Features</a></li>
            <li><a href="#contact" className="font-semibold">Contact</a></li>
            <li><a href="/login" className="font-bold font-3xl">Login</a></li>
        </ul>
    </nav>
    </div>
    </header>
)};

export default Header;