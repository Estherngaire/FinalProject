import accessories from '../../assets/accessories.jpg';
import BowJeans from '../../assets/Baggy.jpg';
import Necklace from '../../assets/Bangle.jpg';
import BlackandWhite from '../../assets/BlackandWhite.jpg';
import MenSweatshirt from '../../assets/MenSweatshirt.jpg';
import BlackJeans from '../../assets/Jeansblack.jpg';
import Jeans from '../../assets/jeans.jpg';
import Sweatshirt from "../../assets/hajs.jpg";
import ProductCard from '../common/ProductCard';

function ProductShowcase() {
    const products=[
        {id:1, name:"Product 1", image:accessories, price:"$8" },
        {id:2, name:"Product 2", image:BowJeans, price:"$56" },
        {id:3, name:"Product 3", image:Necklace, price:"$12" },
        {id:4, name:"Product 4", image:BlackandWhite, price:"$55" },
        {id:5, name:"Product 5", image:MenSweatshirt, price:"$57" },
        {id:6, name:"Product 6", image:BlackJeans, price:"$96" },
        {id:7, name:"Product 7", image:Jeans, price:"$70" },
        {id:8, name:"Product 8", image:Sweatshirt, price:"$64" },
    ];
    return (
        
    <div className="max-w-6xl mx-auto p-6 w-1440px h-1252px mb-10 px-4 bg-pink-800">
      <h2 className="text-3xl font-bold mb-6 text-center">Our Products</h2>
      <p className='text-2xl text-center'>Products Provided are selected from the best products with number 1 quality</p>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image} 
            /> 
        ))};
         </div>
    </div>
    );
}
export default ProductShowcase;