import Button from "../common/Button";
import heroImage from "../../assets/hero.jpg";
import Statistics from "./Statistics";
import Header from "../layout/Header";

function Hero() {
  return(   
    <section className="mb-10 w-1440px h-1000px">
      <div className="bg-cover bg-center h-1000px w-1400px"
      style={
        { backgroundImage: `url(${heroImage})`}
        }>
         <Header/>
        <h2 className="font-bold text-6xl mb-5 text-center">Elegance with an edge.</h2>
        <p className="font-2xs text-3xl text-center">Redefine Your Everyday.Style,Beauty & Strength -All in one Place.From head to toe-beautiful skincare,fashion-forward apparel and eye-catching accessories,all curated so you can build the look,feel the confidence and own your day.</p>
        <Button className="text-center" variant="secondary" size="lg">Shop the Collection</Button>
        <Statistics/>
      </div>
    </section>
    
  )
};
export default Hero;