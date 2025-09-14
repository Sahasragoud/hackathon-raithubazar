import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../Services/UserService";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showSignupOptions, setShowSignupOptions] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await AuthService.login({ username, password });
      const { user, token } = response.data;

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      console.log("User logged in:", user);
      alert("Login successful!");
      navigate("/");
    } catch (error: any) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md relative">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Login
        </h2>

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

        <button
          onClick={handleLogin}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center">
          Don’t have an account?{" "}
          <span
            onClick={() => setShowSignupOptions(true)}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Sign Up
          </span>
        </p>

        {/* Signup Options Modal */}
        {showSignupOptions && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-md">
            <div className="bg-white p-6 rounded-md shadow-lg text-center w-80">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">
                Choose Sign Up Type
              </h3>
              <div className="flex justify-around">
                <button
                  onClick={() => navigate("/buyersignup")}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
                >
                  Buyer
                </button>
                <button
                  onClick={() => navigate("/sellersignup")}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                  Seller
                </button>
              </div>
              <button
                onClick={() => setShowSignupOptions(false)}
                className="mt-4 text-sm text-gray-500 hover:underline"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
