// import type { SellerRegisterRequest } from "../Type/SellerRegisterRequest";
// import API from "./Api";

// const AuthService = {
//   registerSeller: (data: SellerRegisterRequest) => API.post("auth/register-seller", data),
//   login: (data: any) => API.post("/auth/login", data)
// };

// export default AuthService;


// src/Services/UserService.ts
import axios from "axios";

const API_URL = "http://localhost:8080/api"; // change to your backend base URL

const AuthService = {
  // Seller Signup
  registerSeller(data: any) {
    return axios.post(`${API_URL}/sellers/signup`, data);
  },

  // Buyer Signup
  registerBuyer(data: any) {
    return axios.post(`${API_URL}/buyers/signup`, data);
  },

  // Login (common for both sellers & buyers if your backend supports it)
  login(data: { username: string; password: string }) {
    return axios.post(`${API_URL}/login`, data);
  },
};

export default AuthService;
