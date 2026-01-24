import Button from "../common/Button";
import Statistics from "./Statistics";
import Header from "../layout/Header";

function Hero() {
  return(   
    <section className="bg-primary w-full max-w-[1440px] mx-auto mb-3 px-4 sm:px-6 lg:px-8">

      <div className="w-full max-h-[1000px] max-w-[1400px] pt-3">
         <Header/>
        <h2 className="font-bold text-4xl md:text-5xl lg:text-6xl mb-5 text-center mt-3 text-neutralDark">Elegance with an edge.</h2>
        <p className="font-xs text-xl md:text-2xl lg:text-3xl text-center">Redefine Your Everyday.Style,Beauty & Strength -All in one Place.From head to toe-beautiful skincare,fashion-forward apparel and eye-catching accessories,all curated so you can build the look,feel the confidence and own your day.</p>
       <div className="flex justify-center">
        <Button className="mt-5 bg-secondary" variant="outline" size="lg">Shop the Collection</Button>
        </div> 
        <div className="flex justify-center mt-10">
           <Statistics/>
        </div>
      </div>
    </section>
    
  )
};
export default Hero;