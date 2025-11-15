// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">{price}</p>
      <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
