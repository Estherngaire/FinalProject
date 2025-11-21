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
        
    <div className="w-full max-w-[1440px] mx-auto h-auto mb-2 px-4 bg-purple-500">
      <div className='mb-6 mt-6'>
        <h2 className="text-3xl font-bold mb-2 text-center text-gray-700">Our Products</h2>
        <p className='text-center mb-6'>Explore our hand-picked collection of on-trnd outfits and accessories each piece expertly crafted to blend styles,comfort and quality.From tailored staples to standout accents,our collection lets you express yourself effortlessly.</p>
      </div>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
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