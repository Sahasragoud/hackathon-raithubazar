// src/pages/Cart.tsx
import React from "react";
import { useCart } from "../pages/CartContext"; 
import type { Product } from "../pages/types"; // Make sure you have Product type
import Navbar from "../components/Navbar"; // Import Navbar

const Cart: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Navbar */}
        <Navbar />

        <div className="flex flex-col items-center justify-center flex-1 bg-gray-50">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">🛒 Your Cart is Empty</h2>
          <p className="text-gray-500">Add some products to see them here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="p-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">🛒 Your Cart</h2>

        {/* Cart Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item: Product) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-40 w-full object-cover rounded-md mb-3"
              />
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>

              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                ❌ Remove
              </button>
            </div>
          ))}
        </div>

        {/* Cart Footer */}
        <div className="mt-6 flex justify-between items-center">
          <h3 className="text-xl font-bold">Total: ₹{totalPrice}</h3>
          <button
            onClick={clearCart}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Clear Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
