import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    // Add your signup logic here (API call)
    console.log({ name, email, password });
    navigate("/login"); // Redirect after signup
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Sign Up</h2>
        <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button text="Sign Up" onClick={handleSignUp} />
        <p className="mt-4 text-center">
          Already have an account? <span className="text-green-500 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
