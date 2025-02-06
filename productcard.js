import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-gray-700">{product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">Ver Produto</button>
      </Link>
    </div>
  );
};

export default ProductCard;
