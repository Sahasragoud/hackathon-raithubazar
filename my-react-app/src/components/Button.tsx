import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
    >
      {text}
    </button>
  );
};

export default Button;
