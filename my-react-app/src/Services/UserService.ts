import type { BuyerRegisterRequest } from "../Type/BuyerRegisterRequest";
import API from "./Api";

const AuthService = {
  registerBuyer: (data: BuyerRegisterRequest) => API.post(`/auth/register-buyer`, data),
  login: (data: any) => API.post(`/auth/login`, data),
  registerSeller: (data: any) => API.post(`/auth/register-seller`, data)
};

export default AuthService;
