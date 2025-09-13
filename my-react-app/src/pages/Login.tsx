import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log({ username, password });
    alert("Login successful!");
    navigate("/"); // Redirect after login
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Login
        </h2>

        {/* Username */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your username"
        />

        {/* Password */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your password"
        />

        {/* Button */}
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
