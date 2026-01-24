import Button from "../common/Button";
import Men from "../../assets/MenCloth.jpg";
import Women from "../../assets/Women.jpg";
import Bracelets from "../../assets/Bracelets.jpg";
import Children from "../../assets/Children.jpg";
import ResponsiveImage from "../common/Responsiveimage";
function NewInStore() {
    return (
        <div className="flex flex-col md:flex-row gap-6 w-full max-w-[1440px] mx-auto h-auto mb-3 mt-3 opacity-100 bg-primary">
            <div className="flex flex-col justify-center md:w-1/2 w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 ml-10 mt-5 text-gray-600">Shop New Arrivals</h2>
                <p className="mb-3">Get ready to elevate your style with our latest collection!Discover the hottest products,trending fashion and exclusive drops that will take your wardrobe to the next level </p>
                <Button variant="secondary" size="lg" className="text-center bg-secondary">Unlock Exclusive Deals</Button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4  gap-6 md:w-1/2 w-full p-4">
                <div className="space-y-2 ">
                    <ResponsiveImage src={Men} alt="Men Clothline" className="w-full h-60 object-cover rounded-lg" />
                    <p>Men Clothline</p>
                </div>
                <div className="space-y-2">
                    <ResponsiveImage src={Women} alt="Women Clothline" className="w-full h-60 object-cover rounded-lg"/>
                    <p>Women Clothline</p>
                </div>
                <div className="space-y-2">
                    <ResponsiveImage src={Bracelets} alt="Accessories Collection" className="w-full h-60 object-cover rounded-lg"/>
                    <p>Accessories Collection</p>
                </div>
                <div className="space-y-2">
                    <ResponsiveImage src={Children} alt="Children Clothline" className="w-full h-60 object-cover rounded-lg"/>
                    <p>Children Clothline</p>
                </div>
            </div>
        </div>
    );
}           
export default NewInStore;