import Button from "../common/Button";
import Statistics from "./Statistics";
import Header from "../layout/Header";

function Hero() {
  return(   
    <section className="container mb-2 w-full max-w-[1440px] h-auto bg-purple-400">
      <div className="bg-center w-full max-h-[1000px] max-w-[1400px]">
         <Header/>
        <h2 className="font-bold text-4xl mb-5 text-center mt-3 text-gray-600">Elegance with an edge.</h2>
        <p className="font-xs text-xl text-center">Redefine Your Everyday.Style,Beauty & Strength -All in one Place.From head to toe-beautiful skincare,fashion-forward apparel and eye-catching accessories,all curated so you can build the look,feel the confidence and own your day.</p>
        <Button className="mt-5" variant="outline" size="lg">Shop the Collection</Button>
        <Statistics/>
      </div>
    </section>
    
  )
};
export default Hero;