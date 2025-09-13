import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Introduction from "./pages/Introduction";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;
