import axios from "axios";
import type { AxiosResponse } from "axios";
import type { BuyerRegisterRequest } from "../Type/BuyerRegisterRequest";

const API_URL = "https://your-api-url.com"; // Replace with real backend

const AuthService = {
  registerBuyer: (data: BuyerRegisterRequest): Promise<AxiosResponse> => {
    // Example POST request
    return axios.post(`${API_URL}/buyers/register`, data);
  },

  login: (data: any): Promise<AxiosResponse> => {
    return axios.post(`${API_URL}/login`, data);
  },

  registerSeller: (data: any): Promise<AxiosResponse> => {
    return axios.post(`${API_URL}/sellers/register`, data);
  },
};

export default AuthService;
