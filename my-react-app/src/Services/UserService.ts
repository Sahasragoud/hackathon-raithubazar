import type { BuyerRegisterRequest } from "../Type/BuyerRegisterRequest";
import API from "./Api";

const AuthService = {
  registerBuyer: (data: BuyerRegisterRequest) => API.post(`auth/register-buyer`, data),
  login: (data: any) => API.post(`auth/login`, data),
  registerSeller: (data: any) => API.post(`auth/register-seller`, data)
};

const AdminService = {
  getAllUsers : (page : number, size:number, sortField: string, sortDirection: string) => API.get(`/admin/users?page=${page}&size=${size}&sortField=${sortField}&sortDirection=${sortDirection}`),
  getAllOrders : (page : number, size:number, sortField: string, sortDirection: string) => API.get(`/admin/orders?page=${page}&size=${size}&sortField=${sortField}&sortDirection=${sortDirection}`),
  getAllProducts : (page : number, size:number, sortField: string, sortDirection: string) => API.get(`/admin/products?page=${page}&size=${size}&sortField=${sortField}&sortDirection=${sortDirection}`),
  deleteUser : (userId: number) => API.delete(`/admin/users/${userId}`),
  deleteProduct : (productId: number) => API.delete(`/admin/products/${productId}`)
}

const OrderService = {

}
export default AuthService;
