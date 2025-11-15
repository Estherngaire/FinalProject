import Button from "../common/Button";
import Men from "../../assets/MenCloth.jpg";
import Women from "../../assets/Women.jpg";
import Bracelets from "../../assets/Bracelets.jpg";
import Children from "../../assets/Children.jpg";
function NewInStore() {
    return (
        <div className="grid grid-cols-2 gap-6 w-1440px h-540px mb-10 opacity-100">
            <div className="text-left">
                <h2 className="text-3xl font-bold">Shop New Arrivals</h2>
                <p>Get ready to elevate your style with our latest collection!Discover the hottest products,trending fashion and exclusive drops that will take your wardrobe to the next level </p>
                <Button variant="secondary" size="lg">Unlock Exclusive Deals</Button>
            </div>
            <div className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-4 gap-6 h-auto">
                <div className="space-y-2">
                    <img src={Men} alt="Men Clothline" className="w-80 h-60 object-cover rounded-lg" />
                    <p>Men Clothline</p>
                </div>
                <div className="space-y-2">
                    <img src={Women} alt="Women Clothline" className="w-80 h-60 object-cover rounded-lg"/>
                    <p>Women Clothline</p>
                </div>
                <div className="space-y-2">
                    <img src={Bracelets} alt="Accessories Collection" className="w-80 h-60 object-cover rounded-lg"/>
                    <p>Accessories Collection</p>
                </div>
                <div className="space-y-2">
                    <img src={Children} alt="Children Clothline" className="w-80 h-60 object-cover rounded-lg"/>
                    <p>Children Clothline</p>
                </div>
            </div>
        </div>
    );
}           
export default NewInStore;