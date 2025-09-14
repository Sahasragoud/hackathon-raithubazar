// // src/context/CartContext.tsx
// import React, { createContext, useState, useContext } from "react";
// import type { ReactNode } from "react";
// import type { Products } from "../pages/types";   // ✅ type-only import


// interface CartContextType {
//   cart: Products[];
//   addToCart: (product: Products) => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [cart, setCart] = useState<Products[]>([]);

//   const addToCart = (product: Products) => {
//     setCart((prevCart) => [...prevCart, product]);
//     alert(`${product.name} added to cart ✅`);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used inside a CartProvider");
//   }
//   return context;
// };



import React, { createContext, useState, useContext } from "react";
import type { ReactNode } from "react";
import type { Product } from "../pages/types";

interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};

interface Props {
  children: ReactNode;
}

export const CartProvider: React.FC<Props> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
