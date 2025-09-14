// src/pages/BuyerDashboard.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext";
import type { Product } from "../pages/types";

// Import Navbar
import Navbar from "../components/Navbar";

// Import local images
import f1 from "../assets/f1.jpeg";
import f2 from "../assets/f2.jpg";
import f3 from "../assets/f3.jpeg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";
import f7 from "../assets/f7.jpg";
import f8 from "../assets/f8.jpg";
import f9 from "../assets/f9.jpg";
import f10 from "../assets/f10.jpg";

const products: Product[] = [
  { id: 1, name: "Fresh Tomatoes", category: "Vegetables", price: 50, quantity: 20, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Juicy red tomatoes, perfect for salads.", image: f1, rating: 4 },
  { id: 2, name: "Golden Potatoes", category: "Vegetables", price: 30, quantity: 50, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Farm-fresh potatoes, ideal for fries.", image: f2, rating: 5 },
  { id: 3, name: "Sweet Mangoes", category: "Fruits", price: 120, quantity: 15, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Ripe, juicy mangoes with natural sweetness.", image: f3, rating: 5 },
  { id: 4, name: "Organic Wheat", category: "Grains", price: 40, quantity: 100, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "High-quality wheat grains for healthy flour.", image: f4, rating: 4 },
  { id: 5, name: "Bananas", category: "Fruits", price: 60, quantity: 30, unit: "Dozen", seller: { id: 1, name: "Ramesh Kumar" }, description: "Fresh yellow bananas full of energy.", image: f5, rating: 3 },
  { id: 6, name: "Carrots", category: "Vegetables", price: 45, quantity: 25, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Crunchy carrots rich in Vitamin A.", image: f6, rating: 4 },
  { id: 7, name: "Green Grapes", category: "Fruits", price: 90, quantity: 18, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Seedless green grapes, sweet and tangy.", image: f7, rating: 5 },
  { id: 8, name: "Brown Rice", category: "Grains", price: 70, quantity: 80, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Nutritious brown rice for a healthy diet.", image: f8, rating: 4 },
  { id: 9, name: "Onions", category: "Vegetables", price: 40, quantity: 60, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Fresh red onions for daily cooking.", image: f9, rating: 4 },
  { id: 10, name: "Apples", category: "Fruits", price: 150, quantity: 25, unit: "KG", seller: { id: 1, name: "Ramesh Kumar" }, description: "Crisp red apples full of flavor.", image: f10, rating: 5 },
];

const BuyerDashboard: React.FC = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navbar */}
      <Navbar />

      {/* Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 mt-4">🛍 Buyer Dashboard</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg p-4 flex flex-col cursor-pointer hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-40 w-full object-cover rounded-md mb-3"
              onClick={() => setSelectedProduct(product)}
            />
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-600">₹{product.price}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(product.rating ?? 0)}{" "}
              <span className="text-gray-500">({product.rating ?? 0})</span>
            </p>
            <button
              onClick={() => addToCart(product)}
              className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              ➕ Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-200 bg-opacity-70 z-40 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative overflow-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-3 right-3 text-gray-700 text-2xl font-bold hover:text-gray-900"
            >
              &times;
            </button>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="h-64 w-full object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold">{selectedProduct.name}</h2>
            <p className="text-gray-600 my-2">₹{selectedProduct.price}</p>
            <p className="text-yellow-500">
              {"⭐".repeat(selectedProduct.rating ?? 0)}{" "}
              <span className="text-gray-500">({selectedProduct.rating ?? 0})</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">{selectedProduct.description}</p>
            <p className="text-sm text-gray-600 mt-1">Category: {selectedProduct.category}</p>
            <p className="text-sm text-gray-600">
              Quantity: {selectedProduct.quantity} {selectedProduct.unit}
            </p>
            <p className="text-sm text-gray-600">Seller: {selectedProduct.seller.name}</p>
            <button
              onClick={() => addToCart(selectedProduct)}
              className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              ➕ Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuyerDashboard;
