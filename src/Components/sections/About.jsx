import Button from "../common/Button";
import Keys from "../../assets/Keys.jpg";
import ResponsiveImage from "../common/Responsiveimagae";

function About() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg: gap-8 items-center w-full max-w-[1440px] mx-auto h-auto mb-1 bg-cover bg-purple-400">
        <div className="w-full h-auto">
            <ResponsiveImage src={Keys} alt="KeyHolder" className="h-[500px] ml-10 w-full object-cover" />
        </div>
        <div className=" mx-auto px-4 justify-items-end  space-y-4">
            <h2 className="text-3xl font-bold mb-4 mr-43 text-gray-300">About Us</h2>
            <p className="mb-6 text-sm">At Pure Canvas, you will find clothing that speaks to your personality, beauty products that enhance your glow and accessories that amplify your story — because you deserve to feel bold, beautiful and unstoppable every single day.We are on a mission to redefine what “everyday” means.</p>
            <Button variant="outline" size="md" className="ml-50">Learn More</Button>
        </div>

    </div>
)};

export default About;