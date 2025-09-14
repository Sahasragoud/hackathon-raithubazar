// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
 import SellerSignup from "./pages/SellerSignUp";
// import BuyerSignup from "./pages/BuyerSignUp";
// import Orders from "./pages/Orders";

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Login" element={<Login />} />
      <Route path="/SellerSignUp" element={<SellerSignup />} />
//         <Route path="/BuyerSignUp" element={<BuyerSignup />} />     
//         <Route path="/Orders" element={<Orders />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



// import React from "react";
// import SellerDashboard from "./pages/SellerDashboard";

// function App() {
//   return (
//     <div>
//       <SellerDashboard />
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
// import SellerDashboard from "./pages/SellerDashboard";
// import Products from "./pages/Products";
// import Orders from "./pages/Orders";
// import Feedback from "./pages/FeedBack";
// import Complaints from "./pages/Complaints";

// const Navbar: React.FC = () => {
//   const location = useLocation();

//   const pages = [
//     { name: "Dashboard", link: "/" },
//     { name: "Products", link: "/products" },
//     { name: "Orders", link: "/orders" },
//     { name: "Feedback", link: "/feedback" },
//     { name: "Complaints", link: "/complaints" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-green-600 to-emerald-600 shadow-lg py-4 px-8 flex justify-center gap-6 z-50">
//       {pages.map((page) => (
//         <Link
//           key={page.name}
//           to={page.link}
//           className={`px-5 py-2.5 rounded-lg font-semibold transition text-lg ${
//             location.pathname === page.link
//               ? "bg-white text-green-700 shadow-md"
//               : "text-white hover:bg-white/20"
//           }`}
//         >
//           {page.name}
//         </Link>
//       ))}
//     </nav>
//   );
// };

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <div className="pt-24">
//         <Routes>
//           <Route path="/" element={<SellerDashboard />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/feedback" element={<Feedback />} />
//           <Route path="/complaints" element={<Complaints />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import SellerDashboard from "./pages/SellerDashboard";
// // import ProductsPage from "./pages/Products";
// // import OrdersPage from "./pages/Orders";
// // import FeedbackPage from "./pages/FeedBack";
// // import ComplaintsPage from "./pages/Complaints";

// // function App() {
// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<SellerDashboard />} />
// //         <Route path="/products" element={<ProductsPage />} />
// //         <Route path="/orders" element={<OrdersPage />} />
// //         <Route path="/feedback" element={<FeedbackPage />} />
// //         <Route path="/complaints" element={<ComplaintsPage />} />
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;


// App.tsx
// src/App.tsx
// src/App.tsx
// src/App.tsx
import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import BuyerDashboard from "./pages/BuyerDashboard"; // import your dashboard
// import Cart from "./pages/Cart";
// import { CartProvider } from "./pages/CartContext";

// const App: React.FC = () => {
//   return (
//     <CartProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<BuyerDashboard />} /> {/* use dashboard here */}
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </Router>
//     </CartProvider>
//   );
// };

// export default App;
