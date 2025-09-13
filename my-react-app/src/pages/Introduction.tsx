import React from "react";
import { useNavigate } from "react-router-dom";

const Introduction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-50 px-4">
      <h1 className="text-4xl font-bold mb-4 text-green-700">Welcome to Community Farming</h1>
      <p className="text-lg mb-8 text-center max-w-md">
        Connect local farmers with buyers directly, share produce, and promote sustainable farming practices in your community.
      </p>
      <div className="flex gap-4">
        <button 
          onClick={() => navigate("/login")}
          className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
        >
          Login
        </button>
        <button 
          onClick={() => navigate("/signup")}
          className="px-6 py-2 bg-white border border-green-500 text-green-500 rounded-md hover:bg-green-100"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Introduction;
