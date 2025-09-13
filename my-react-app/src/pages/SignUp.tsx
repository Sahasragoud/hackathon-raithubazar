import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log({ username, email, address, phone, password });
    alert("Sign Up successful!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
          Sign Up
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

        {/* Email */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your email"
        />

        {/* Address */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your address"
        />

        {/* Phone */}
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          placeholder="Enter your phone number"
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
          onClick={handleSignUp}
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Sign Up
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
