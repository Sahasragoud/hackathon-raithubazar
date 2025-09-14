// src/types.ts
export interface User {
  id: number;
  name: string;
}

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
  unit: string;
  seller: User;
  image: string;
  description: string;
  rating: number; // make it required
}
