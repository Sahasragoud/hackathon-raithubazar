// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./pages/Home";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerSignUp from "./pages/BuyerSignUp";
import SellerSignUp from "./pages/SellerSignUp";
import BuyerLogin from "./pages/Login";
import Cart from "./pages/Cart";
import FeedbackPage from "./pages/FeedBack";
import Complaints from "./pages/Complaints";
import Orders from "./pages/Orders";
import Products from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";

// Context
import { CartProvider } from "./pages/CartContext";

const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Buyer */}
          <Route path="/buyer-dashboard" element={<BuyerDashboard />} />
          <Route path="/signup/buyer" element={<BuyerSignUp />} />
          <Route path="/login" element={<BuyerLogin />} />

          {/* Seller */}
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          <Route path="/signup/seller" element={<SellerSignUp />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Feedback */}
          <Route path="/feedback" element={<FeedbackPage />} />

          {/* Complaints */}
          <Route path="/complaints" element={<Complaints />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />

          {/* Catch-all: Home if no match */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
