import Button from "../common/Button";
import Keys from "../../assets/Keys.jpg";
import ResponsiveImage from "../common/Responsiveimage";

function About() {
    return (
    <div className="mb-3 mt-3 flex flex-column md:flex-row justify-between w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 gap-8 bg-cover bg-primary">
        <div className="md:w-1/2 w-full">
            <ResponsiveImage src={Keys} alt="KeyHolder" className="max-h-[500px] w-full object-cover rounded-lg" />
        </div>
        <div className=" flex flex-col justify-center w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4  text-neutralDark">About Us</h2>
            <p className="mb-6 text-xl md:text-2xl lg:text-3xl">At Pure Canvas, you will find clothing that speaks to your personality, beauty products that enhance your glow and accessories that amplify your story — because you deserve to feel bold, beautiful and unstoppable every single day.We are on a mission to redefine what “everyday” means.</p>
            <Button variant="outline" size="md" className="ml-50 bg-secondary">Learn More</Button>
        </div>

    </div>
)};

export default About;