import Testimonial from "../../assets/testimonials.jpg";
import ResponsiveImage from "../common/Responsiveimage";
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah W.",
      message: "Amazing quality! The products arrived on time and the service was exceptional.",
      image: "/src/assets/user.jpg",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 bg-primary mb-3 mt-3">
      <div className="h-30 w-1/2 flex flex-col  mb-5">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-5">What Our Customers Say</h2>
        {testimonials.map((item, index) => (
          <div key={index} className="p-5 bg-secondary shadow-lg rounded-2xl w-full max-w-md mx-auto flex flex-col items-center text-center">
            <ResponsiveImage
              src={item.image}
              alt={item.name}
              className="w-20 h-20 rounded-full object-cover mx-auto"
            />
            <h3 className="font-semibold text-center mt-3">{item.name}</h3>
            <p className="italic text-center mt-3">"{item.message}"</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 w-full mb-3">
              <img src={Testimonial} alt="Clothingline" className="w-full max-h-[400px] object-cover rounded-xl"/>
      </div>
    </div>
  );
}

export default Testimonials;
