import Testimonial from "../../assets/Testimonials.jpg";
function Testimonials() {
  const testimonials = [
    {
      name: "Sarah W.",
      message: "Amazing quality! The products arrived on time and the service was exceptional.",
      image: "/src/assets/user1.jpg",
    },
  ];

  return (
    <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 w-1440px h-480px mb-10">
      <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>

      <div className="text-right">
        {testimonials.map((item, index) => (
          <div key={index} className="p-6 bg-pink-950 shadow-lg rounded-2xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-16 h-16 rounded-full object-cover mx-auto mb-4"
            />
            <p className="italic text-center mb-4">"{item.message}"</p>
            <h3 className="font-semibold text-center">{item.name}</h3>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2">
              <img src={Testimonial} alt="Clothingline" className="w-80 h-80"/>
      </div>
    </div>
  );
}

export default Testimonials;
