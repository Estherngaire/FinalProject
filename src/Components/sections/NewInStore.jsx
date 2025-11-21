import Button from "../common/Button";
import Men from "../../assets/MenCloth.jpg";
import Women from "../../assets/Women.jpg";
import Bracelets from "../../assets/Bracelets.jpg";
import Children from "../../assets/Children.jpg";
import ResponsiveImage from "../common/Responsiveimagae";
function NewInStore() {
    return (
        <div className="grid grid-cols-2 gap-6 w-full max-w-[1440px] mx-auto h-auto mb-2 opacity-100 bg-gray-400">
            <div className="text-left ml-10">
                <h2 className="text-3xl font-bold mb-5 ml-10 mt-5 text-gray-600">Shop New Arrivals</h2>
                <p className="mb-3">Get ready to elevate your style with our latest collection!Discover the hottest products,trending fashion and exclusive drops that will take your wardrobe to the next level </p>
                <Button variant="secondary" size="lg" className="ml-15">Unlock Exclusive Deals</Button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
                <div className="space-y-2 w-full sm:w-1/2 md:w-3/4">
                    <ResponsiveImage src={Men} alt="Men Clothline" className="w-80 h-60 object-cover rounded-lg" />
                    <p>Men Clothline</p>
                </div>
                <div className="space-y-2">
                    <ResponsiveImage src={Women} alt="Women Clothline" className="w-80 h-60 object-cover rounded-lg"/>
                    <p>Women Clothline</p>
                </div>
                <div className="space-y-2">
                    <ResponsiveImage src={Bracelets} alt="Accessories Collection" className="w-80 h-60 object-cover rounded-lg"/>
                    <p>Accessories Collection</p>
                </div>
                <div className="space-y-2">
                    <ResponsiveImage src={Children} alt="Children Clothline" className="w-80 h-60 object-cover rounded-lg"/>
                    <p>Children Clothline</p>
                </div>
            </div>
        </div>
    );
}           
export default NewInStore;