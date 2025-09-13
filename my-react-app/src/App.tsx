import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

// import Orders from "./pages/Orders";

// function App() {
//   return <Orders />;
// }

//export default App;

//src/App.tsx
// import FeedbackPage from "./pages/Products";
// import Products from "./pages/Products";

// function App() {
//   return <FeedbackPage />;
// }

// export default App;
