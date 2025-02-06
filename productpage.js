import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "iPhone 12 Pro Moment Case - Blue", price: "$149.00", image: "/product1.jpg" },
  { id: 2, name: "Full Aquarelle iPhone XR", price: "$169.00", image: "/product2.jpg" },
  { id: 3, name: "iPhone 12 Pro Moment Case - Olive", price: "$149.00", image: "/product3.jpg" },
  { id: 4, name: "Leather Case iPhone 12 Deep Violet", price: "$230.00", image: "/product4.jpg" },
  { id: 5, name: "iPhone 13 Case Luxe - Dusty Pink", price: "$149.00", image: "/product5.jpg" },
];

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Produto não encontrado</p>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-96 h-auto my-4" />
      <p className="text-xl font-semibold">{product.price}</p>
      <p className="text-gray-600">Opções de pagamento: à vista ou em 12x</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Comprar Agora</button>
    </div>
  );
};

export default ProductPage;
