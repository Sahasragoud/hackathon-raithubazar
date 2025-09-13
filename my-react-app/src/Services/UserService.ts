import type { SellerRegisterRequest } from "../Type/SellerRegisterRequest";
import API from "./Api";

const AuthService = {
  registerSeller: (data: SellerRegisterRequest) => API.post("auth/register-seller", data),
  login: (data: any) => API.post("/auth/login", data),
  registerBuyer: (data: any) => API.post("/auth/register-buyer", data),
};

export default AuthService;
