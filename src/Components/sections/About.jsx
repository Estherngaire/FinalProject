import Button from "../common/Button";
import accessoriesImage from "../../assets/accessories.jpg";

function About() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg: gap-8 items-center  w-1440px h-591px mb-10">
        <div className="w-50% h-50%">
            <img src={accessoriesImage} alt="Men Accessories" className="w-400 h-100" />
        </div>
        <div className=" mx-auto px-4 text-right h-90 space-y-4">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="text-lg mb-6">We are on a mission to redefine what “everyday” means.</p>
            <p className="text-md mb-6">At Pure Canvas, you will find clothing that speaks to your personality, beauty products that enhance your glow and accessories that amplify your story — because you deserve to feel bold, beautiful and unstoppable every single day.</p>
            <Button variant="outline" size="md">Learn More</Button>
        </div>

    </div>
)};

export default About;