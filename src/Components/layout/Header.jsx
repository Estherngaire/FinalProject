function Header() {
    return (
    <header className="bg-primary text-neutralDark shadow-md p-3">
     <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xs md:text-2xs lg:text-4xs font-bold">Pure Canvas</h1>
    <nav>
        <ul className="flex gap-6 text-lg">

            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    </div>
    </header>
)};

export default Header;