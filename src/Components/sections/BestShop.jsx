import Display from "../../assets/ClothDisplay.jpg";
import ResponsiveImage from "../common/Responsiveimagae";
function BestShop() {
    return (
        <div className="grid grid-cols-2 gap-6 w-[1440px] h-[591px] mb-2 opacity-100 mx-auto px-4 items-center bg-purple-500">
            <div>
                <h2 className="font-bold text-3xl ml-50 mb-3 text-gray-500">Why Choose Us</h2>   
                <p className="text-xl">Every piece we offer is handpicked to help you look sharp, feel confident, and enjoy your everyday moments a little more. Shopping with us is easy, fast, and fun—because you deserve products that do the job and make you smile. Choose us, and upgrade your style without the stress.</p>
            </div>
            <div className="grid grid-cols-1">
                <ResponsiveImage src={Display} alt="Clothline" className="h-100 w-150" />
            </div>

        </div>
    );
}
export default BestShop;