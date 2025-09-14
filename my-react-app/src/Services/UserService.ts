import axios, { AxiosResponse } from "axios";
import type { BuyerRegisterRequest } from "../Type/BuyerRegisterRequest";

const API_URL = "http://localhost:9090/api"; // Fixed quotes and comma

const AuthService = {
  registerBuyer: (data: BuyerRegisterRequest): Promise<AxiosResponse> => {
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
