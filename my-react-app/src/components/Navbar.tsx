// src/components/Navbar.tsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../pages/CartContext";

// User roles type
type UserRole = "buyer" | "seller" | "admin" | undefined;

interface User {
  id: number;
  name: string;
  role: UserRole;
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const { cart } = useCart();

  // Get user from localStorage
  const user: User | null = JSON.parse(localStorage.getItem("user") || "null");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload(); // reload to reset navbar
  };

  return (
    <nav className="bg-green-600 text-white px-6 py-4 flex justify-between items-center shadow-md fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="text-xl font-bold cursor-pointer" onClick={() => navigate("/")}>
        FreshMart
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-4 items-center">
        {!user && (
          <>
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/Login" className="hover:text-gray-200">Login</Link>
            <Link to="/BuyerSignUp" className="hover:text-gray-200">Register(Buy)</Link>
            <Link to="/SignUp/seller" className="hover:text-gray-200">Register(sell)</Link>
          </>
        )}

        {user?.role?.toUpperCase() === "ADMIN" && (
          <>
            <Link to="/buyers" className="hover:text-gray-200">Buyers</Link>
            <Link to="/sellers" className="hover:text-gray-200">Sellers</Link>
            <Link to="/products" className="hover:text-gray-200">Products</Link>
            <Link to="/orders" className="hover:text-gray-200">Orders</Link>
            <Link to="/feedback" className="hover:text-gray-200">Feedbacks</Link>
            <Link to="/reviews" className="hover:text-gray-200">Reviews</Link>
          </>
        )}

        {user?.role?.toUpperCase() === "BUYER" && (
          <>
            <Link to="/products" className="hover:text-gray-200">Products</Link>
            <Link to="/myorders" className="hover:text-gray-200">My Orders</Link>
            <Link to="/help" className="hover:text-gray-200">Help</Link>
          </>
        )}

        {user?.role?.toUpperCase() === "SELLER" && (
          <>
            <Link to="/my-products" className="hover:text-gray-200">My Products</Link>
            <Link to="/orders" className="hover:text-gray-200">Orders</Link>
            <Link to="/reviews" className="hover:text-gray-200">Reviews</Link>
            <Link to="/complaints" className="hover:text-gray-200">Complaints</Link>
          </>
        )}
      </div>

      {/* Right Side: Cart & Logout */}
      <div className="flex items-center space-x-4">
        {user?.role === "buyer" && (
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
        )}

        {user ? (
          <button
            onClick={handleLogout}
            className="px-3 py-2 bg-red-600 rounded hover:bg-red-700"
          >
            Logout
          </button>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
