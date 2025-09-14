import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "./CartContext";

const ProductDetails: React.FC = () => {
  const location = useLocation();
  const { product } = location.state || {};
  const { addToCart } = useCart();

  if (!product) return <p>Product not found</p>;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg w-full">
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
        <p className="text-gray-600">{product.description}</p>
        <p className="text-lg font-semibold text-blue-600 mt-2">₹{product.price}</p>
        <p className="text-sm text-gray-500">Seller: {product.seller.name}</p>

        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          ➕ Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
