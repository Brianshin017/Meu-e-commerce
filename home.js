import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const products = [
  { id: 1, name: "iPhone 12 Pro Moment Case - Blue", price: "$149.00", image: "/product1.jpg" },
  { id: 2, name: "Full Aquarelle iPhone XR", price: "$169.00", image: "/product2.jpg" },
  { id: 3, name: "iPhone 12 Pro Moment Case - Olive", price: "$149.00", image: "/product3.jpg" },
  { id: 4, name: "Leather Case iPhone 12 Deep Violet", price: "$230.00", image: "/product4.jpg" },
  { id: 5, name: "iPhone 13 Case Luxe - Dusty Pink", price: "$149.00", image: "/product5.jpg" },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">E-commerce Store</h1>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
