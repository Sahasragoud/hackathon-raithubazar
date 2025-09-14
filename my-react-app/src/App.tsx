import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyerDashboard from "./pages/BuyerDashboard"; // import your dashboard
import Cart from "./pages/Cart";
import { CartProvider } from "./pages/CartContext";


const App: React.FC = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<BuyerDashboard />} /> {/* use dashboard here */}
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

// export default App;
