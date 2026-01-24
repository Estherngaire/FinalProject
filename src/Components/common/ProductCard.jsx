// src/components/ProductCard.jsx
import React from "react";

function ProductCard({ name, price, image }) {
  return (
    <div className="border border-white rounded-lg p-2 shadow hover:shadow-lg transition bg-neutralLight mt-2">
      <img src={image} alt={name} className="w-full h-60 object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{name}</h3>
      <p className="text-gray-600">{price}</p>
      <button className="mt-2 px-4 py-2 bg-gray-300 text-purple-500 rounded hover:bg-blue-700">
        Buy Now
      </button>
    </div>
  );
};

export default ProductCard;
