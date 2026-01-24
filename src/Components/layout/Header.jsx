function Header() {
    return (
    <header className="bg-secondary text-neutralDark  w-full">
     <div className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 py-4">
      <h1 className="text-xl md:text-2xl font-bold">Pure Canvas</h1>
    <nav>
        <ul className="flex gap-6  text-base md:text-lg">

            <li><a href="#home" className="font-semibold">Home</a></li>
            <li><a href="#about" className="font-semibold">About</a></li>
            <li><a href="#features" className="font-semibold">Features</a></li>
            <li><a href="#contact" className="font-semibold">Contact</a></li>
            <li><a href="/login" className="font-bold">Login</a></li>
        </ul>
    </nav>
    </div>
    </header>
)};

export default Header;