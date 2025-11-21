import Testimonial from "../../assets/Testimonials.jpg";
import ResponsiveImage from "../common/Responsiveimagae";
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah W.",
      message: "Amazing quality! The products arrived on time and the service was exceptional.",
      image: "/src/assets/user.jpg",
    },
  ];

  return (
    <div className="flex flex-row  w-full max-w-[1440px] mx-auto h-auto mb-2 bg-gray-500">
      <div className="h-30">
        <h2 className="text-2xl font-bold text-center mt-5">What Our Customers Say</h2>
        {testimonials.map((item, index) => (
          <div key={index} className="p-2 bg-purple-400 shadow-lg rounded-2xl w-full max-w-[180px] mx-auto h-auto mt-7 ml-5 item-left">
            <ResponsiveImage
              src={item.image}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover mx-auto"
            />
            <h3 className="font-semibold text-center mt-3">{item.name}</h3>
            <p className="italic text-center mt-3">"{item.message}"</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 ml-15 mt-3 mb-3">
              <img src={Testimonial} alt="Clothingline" className="w-205 h-100"/>
      </div>
    </div>
  );
}

export default Testimonials;
