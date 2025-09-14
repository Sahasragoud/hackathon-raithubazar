// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import BuyerDashboard from "./pages/BuyerDashboard";
import SellerDashboard from "./pages/SellerDashboard";
import BuyerSignUp from "./pages/BuyerSignUp";
import SellerSignUp from "./pages/SellerSignUp";
import BuyerLogin from "./pages/Login";
import Cart from "./pages/Cart";
import FeedbackPage from "./pages/FeedBack";
import ComplaintsPage from "./pages/Complaints";
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
          <Route path="/" element={<Home />} />

          {/* Buyer Pages */}
          <Route path="/BuyerDashboard" element={<BuyerDashboard />} />
          <Route path="/SignUp/buyer" element={<BuyerSignUp />} />
          <Route path="/Login" element={<BuyerLogin />} />

          {/* Seller Pages */}
          <Route path="/SellerDashboard" element={<SellerDashboard />} />
          <Route path="/SignUp/seller" element={<SellerSignUp />} />

          {/* Cart */}
          <Route path="/cart" element={<Cart />} />

          {/* Products */}
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />

          {/* Feedback */}
          <Route path="/feedback" element={<FeedbackPage />} />

          {/* Complaints */}
          <Route path="/complaints" element={<ComplaintsPage />} />

          {/* Orders */}
          <Route path="/orders" element={<Orders />} />

          {/* Catch-all: redirect to Home */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

export default App;
