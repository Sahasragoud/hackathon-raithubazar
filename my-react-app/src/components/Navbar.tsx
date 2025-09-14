// src/components/Navbar.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
      {/* Logo / Brand */}
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        FreshMart
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4 items-center">
        <Link to="/buyer-dashboard" className="hover:text-gray-200">
          Buyer Dashboard
        </Link>
        <Link to="/seller-dashboard" className="hover:text-gray-200">
          Seller Dashboard
        </Link>
        <Link to="/products" className="hover:text-gray-200">
          Products
        </Link>
        <Link to="/feedback" className="hover:text-gray-200">
          Feedback
        </Link>
        <Link to="/complaints" className="hover:text-gray-200">
          Complaints
        </Link>
        <Link to="/orders" className="hover:text-gray-200">
          Orders
        </Link>
      </div>

      {/* Right Side: Cart & Auth */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => navigate("/cart")}
          className="relative px-3 py-2 bg-green-700 rounded hover:bg-green-800"
        >
          🛒 Cart
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cart.length}
            </span>
          )}
        </button>

        <Link to="/login/buyer" className="px-3 py-2 bg-green-700 rounded hover:bg-green-800">
          Login
        </Link>
        <Link to="/signup/buyer" className="px-3 py-2 bg-green-700 rounded hover:bg-green-800">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
