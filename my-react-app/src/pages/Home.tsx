import React from "react";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-green-50">
      {/* Navbar */}
      <nav className="bg-green-600 text-white p-4 flex justify-between items-center shadow-md">
        <h1
          className="text-2xl font-bold cursor-pointer"
          onClick={() => navigate("/")}
        >
          🌱 Community Farming
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-white text-green-900 rounded-md hover:bg-green-100 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="px-4 py-2 bg-white text-green-900 rounded-md hover:bg-yellow-500 transition"
          >
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center flex-grow text-center px-6">
        <h2 className="text-4xl font-bold text-green-700 mb-4">
          Welcome to Community Farming 🌾
        </h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Connecting <span className="font-semibold">farmers</span> and{" "}
          <span className="font-semibold">buyers</span> directly to build a
          healthier, sustainable, and fair agricultural ecosystem.  
          By joining us, you support <span className="font-semibold">local farmers</span>,
          enjoy <span className="font-semibold">fresh produce</span>, and
          contribute to a stronger community.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="px-8 py-3 bg-green-600 text-white rounded-md text-lg hover:bg-green-700 transition"
        >
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-green-600 text-white py-4 text-center">
        © {new Date().getFullYear()} Community Farming | All Rights Reserved
      </footer>
    </div>
  );
};

export default Home;
